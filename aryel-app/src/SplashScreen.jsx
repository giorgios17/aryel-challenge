import React from "react";
import LogoComponent from "./LogoComponent";

function SplashScreen({playNow}) {
  return (
    <div>
      <LogoComponent />
      <div>
        <div className="container position-relative pt-5">
          <img style={{width:"271px",height:"237px"}} src="assets/img/leaderboard.png" alt="" />
          <img
            className="position-absolute"
            style={{ top: "40%", left: "-25px" }}
            src="assets/img/group17.png"
            alt=""
          />
        </div>
        <h2 className="splashScreenTitle my-3">Divertiti con Be Together</h2>
        <p className="splashScreenParagraph mb-3">
          Gioca con noi recuperando i Power Coin e le Energy Star di Be Together
          per fare il pieno di energia. Fai attenzione a evitare i malus per
          ottenere il massimo dei punti.
        </p>
        <button className="btnPlayNow" onClick={playNow}>GIOCA ORA</button>
        <div className="cookiesContainer purpleColor px-5">
          <p className="cookieText" style={{ fontWeight: "700" }}>COOKIES</p>
          <p className="cookieText mb-2">
            Once you tap “Gioca ora”, we’ll use cookies to enable operation of
            the site, and to measure usage and engagement
          </p>
          <p className="privacyText">
            Privacy Policy | Launchpad w/o Analytics Cookies
          </p>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
