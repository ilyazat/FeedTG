import "./Cards.module.css";
import posts from "../data/posts";
import Card from "./Card";
import React from "react";

function Cards() {
  return (
    <div className="cards">
      {posts.map((post) => {
        return <Card post={post} />;
      })}
    </div>
  );
}

export default Cards;
