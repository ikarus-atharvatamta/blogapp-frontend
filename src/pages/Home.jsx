import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Navbar from "../components/navbar/Navbar.jsx";
import Blogs from "../components/blogs/Hero.jsx";
import FeaturedBlogs from "../components/blogs/FeaturedBlogs.jsx";
import RecentPosts from "../components/blogs/RecentPosts.jsx";
import BlogCard from "../components/common/Blogthree.jsx";
import PopularPosts from "../components/blogs/PopularPosts.jsx";
import Newsletter from "../components/common/NewLetter.jsx";
import Footer from "../components/common/Footer.jsx";
import Hero from "../components/blogs/Hero.jsx";
import { useEffect, useState } from "react";
import { getPosts } from "../services.js";

import BlogDetailCard from "../components/blogs/BlogDetailCard.jsx";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getPosts();
      setPosts(data.slice(0, 6));
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedBlogs />
      <RecentPosts />
      <BlogCard />
      <PopularPosts
        posts={posts}
        loading={loading}
        showHeader={true}
        showViewAll={true}
      />
      <Newsletter />
      <Footer />
    </>
  );
}
