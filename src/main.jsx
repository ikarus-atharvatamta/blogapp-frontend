import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./index.css"
import Blogs from './components/blogs/Hero.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import FeaturedBlogs from './components/blogs/FeaturedBlogs.jsx'
import RecentPosts from './components/blogs/RecentPosts.jsx'
import BlogCard from './components/common/BlogCard.jsx'
import PopularPosts from './components/blogs/PopularPosts.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    
    <Blogs/>
    <FeaturedBlogs/>
    <RecentPosts/>
    <BlogCard/> 
    <PopularPosts/>
  </StrictMode>,
)
