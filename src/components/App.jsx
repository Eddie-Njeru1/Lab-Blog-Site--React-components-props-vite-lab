import React from "react";
import Header from "./Header";
import About from "./About";
import ArtictleList from "./ArticleList";

import user from "../data/blog.js"
function App() {
  return (
    <div className = "App">
      <Header name ={user.name}/>
      <About image ={user.image} about={user.about}/>
      <ArticleList posts ={user.posts}/>
    </div>
  );
}

export default App;