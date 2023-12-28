import React from "react";

function ThankYouPage() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <p style={{ fontSize: "14px", fontWeight: "700", color: "#3A365C" }}>
          CONGRATULAZIONI!
        </p>
        <p style={{ fontSize: "14px", fontWeight: "500", color: "#3A365C" }}>
          Hai totalizzato la bellezza di
        </p>
        <p style={{ fontSize: "50px", fontWeight: "700", color: "white" }}>
          19 PUNTI
        </p>
        <img
          className="trophy"
          src="/assets/img/trophy.png"
          alt=""
          style={{ width: "289px", zIndex: "3" }}
        />
        <div className="group-button">
          <button className="btn betogheter rounded-pill py-3 px-5 mb-2">ENTRA IN BE TOGHETHER</button>
          <button className="btn btn-outline-light rounded-pill py-3 px-5">GIOCA ANCORA</button>
        </div>
        <img className="ellipse" src="/assets/img/Ellipse.png" alt="" />
      </div>
    </>
  );
}

export default ThankYouPage;
