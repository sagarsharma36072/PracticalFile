import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PostDetailPage from './pages/PostDetailPage';
import AboutPage from './pages/AboutPage';
import CreatePostPage from './pages/CreatePostPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/post/:id" element={<PostDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/create" element={<CreatePostPage />} />
        </Routes>
    );
}

export default App;

