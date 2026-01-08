import React, { useEffect, useRef, useCallback } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import axios from 'axios';

const QuillEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);
  const apiHost = import.meta.env.VITE_API_HOST;

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post(`${apiHost}/image/manage/`, formData);
        console.log(response);
        const imageUrl = apiHost + response.data.image_url;
        
        const quill = quillRef.current;
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
  }, [apiHost]);

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: {
            container: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image'],
              ['clean']
            ],
            handlers: {
              image: imageHandler
            }
          },
          clipboard: {
            matchers: [
              ['img', (node, delta) => {
                const Delta = Quill.import('delta');
                if (node.src.startsWith('data:image/')) {
                  const blob = dataURLtoBlob(node.src);
                  console.log(blob);
                  const formData = new FormData();
                  formData.append('image', blob);
                  return axios.post(`${apiHost}/image/manage/`, formData)
                    .then(response => {
                      const imageUrl = apiHost + response.data.image_url;
                      return new Delta().insert({ image: imageUrl });
                    })
                    .catch(error => {
                      console.error('Error uploading image:', error);
                      return new Delta();
                    });
                } else {
                  return delta;
                }
              }]
            ]
          }
        }
      });

      quillRef.current = quill;

      quill.on('text-change', (delta, oldDelta, source) => {
        if (source === 'user') {
          onChange(quill.root.innerHTML);
        }
      });
    }
  }, [imageHandler, apiHost]);

  const dataURLtoBlob = (dataurl) => {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  }

  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      const delta = quillRef.current.clipboard.convert(value);
      quillRef.current.setContents(delta, 'silent');
    }
  }, [value]);

  return <div  className="min-h-[500px]" ref={editorRef} />;
}

export default QuillEditor;
