import React from "react";
import Post from "../../components/Post/post";
import SideNav from "../../components/SideNav/SideNav";
import "./news.css"; 
const news = () => {
  return (
    <div className="posi">
      <SideNav />
      <Post />
    </div>
  );
};

export default news;
