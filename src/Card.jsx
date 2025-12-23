import React from "react";

function Card(props) {
  return (
    <div
      className="avatar"
      style={{
        width: "28%",
        backgroundColor: "white",
        border: "2px solid black",
        marginTop: "15px",
        marginRight: "10px",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <img
        src={props.img}
        alt={props.name}
        style={{
          height: "140px", // ⬅ reduced
          width: "100%",
          objectFit: "cover",
        }}
      />

      {/* Content */}
      <div style={{ padding: "10px" }}>
        <h2 style={{ color: "darkblue", fontSize: "16px", margin: "5px 0" }}>
          {props.date}
        </h2>

        <h1
          style={{
            fontFamily: "monospace",
            color: "black",
            fontSize: "18px",
            margin: "5px 0",
          }}
        >
          {props.name}
        </h1>

        <p
          style={{
            color: "green",
            fontSize: "13px",
            lineHeight: "1.3",
            maxHeight: "50px", // ⬅ controls height
            overflow: "hidden",
          }}
        >
          {props.desc}
        </p>

        <button style={{ marginTop: "8px", padding: "5px 10px" }}>
          <a
            href={props.anchor}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Click
          </a>
        </button>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          height: "50px", // ⬅ reduced
          width: "100%",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontWeight: "bold", fontSize: "14px" }}>{props.budget}</p>
          <h6>Budget</h6>
        </div>

        <div>
          <p style={{ fontWeight: "bold", fontSize: "14px" }}>{props.rating}</p>
          <h6>IMDB</h6>
        </div>

        <div>
          <p style={{ fontWeight: "bold", fontSize: "14px" }}>
            {props.collection}
          </p>
          <h6>Collection</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;
