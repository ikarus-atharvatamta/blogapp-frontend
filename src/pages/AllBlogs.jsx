import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import PopularPosts from "../components/blogs/PopularPosts";
import Footer from "../components/common/Footer";
import { getPosts } from "../services";

export default function AllBlogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      
      <PopularPosts
        title="Blogs"
        posts={posts}
        loading={loading}
      />
      <Footer />
    </>
  );
}
