import React from "react";
import "./Card.css";

function Card({ post }) {
  const style = { fontSize: "10px" };
  return (
    <div className="card">
      <div style={style}>
        <p>
          {post.channel_name} {" | "}
          {post.publish_date}
        </p>
      </div>
      <br />

      <div>{post.msg}</div>
      <br />
      <br />
    </div>
  );
}

export default Card;
