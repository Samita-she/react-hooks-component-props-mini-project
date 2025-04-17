// src/components/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog'; // Ensure this path is correct


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About about={blogData.about} image={blogData.image} />
      <main>
        <ArticleList posts={blogData.posts} /> {/* Ensure posts is passed correctly */}
      </main>
    </div>
  );
}

export default App;