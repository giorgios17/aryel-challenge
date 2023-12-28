import { useState, useEffect } from "react";
import "./App.css";
import SplashScreen from "./SplashScreen";
import LogoComponent from "./LogoComponent";
import VideoComponent from "./VideoComponent";
import CountdownComponent from "./CountdownComponent";
import GameComponent from "./GameComponent";
import ThankYouPage from "./ThankYouPage";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // Rileva se la larghezza della finestra è inferiore a una certa soglia (ad esempio, 768 pixel)
      setIsMobile(window.innerWidth < 450);
    };

    // Esegui il controllo iniziale
    handleResize();

    // Aggiungi un event listener per rilevare il ridimensionamento della finestra
    window.addEventListener("resize", handleResize);

    // Cleanup dell'event listener nel caso in cui il componente venga smontato
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [play, setPlay] = useState(false);
  const [videoEnd, setVideoEnd] = useState(false);
  const [countdownEnd, setCountdownEnd] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const playNow = () => {
    setPlay(true);
  };
  if (isMobile) {
    if (!play) {
      return (
        <div className="App bg-blue ">
          <div className="py-3 px-5">
            <SplashScreen playNow={playNow} />
          </div>
        </div>
      );
    }
    if (play && !videoEnd) {
      return (
        <>
          <div className="App">
            <LogoComponent />
            <VideoComponent setVideoEnd={setVideoEnd} />
          </div>
        </>
      );
    }
    if (play && videoEnd && !countdownEnd) {
      return (
        <>
          <div className="App bg-blue">
            <LogoComponent />
            <CountdownComponent setCountdownEnd={setCountdownEnd} />
          </div>
        </>
      );
    }
    if (play && videoEnd && countdownEnd && !gameEnd) {
      return (
        <>
          <div
            className="App"
            style={{
              backgroundImage: "url(/assets/img/selfie.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <GameComponent setGameEnd={setGameEnd} />
          </div>
        </>
      );
    }
    if (play && videoEnd && countdownEnd && gameEnd) {
      return (
        <>
          <div className="App bg-blue">
            <div className="py-5 px-5">
              <ThankYouPage />
            </div>
          </div>
        </>
      );
    }
  }else{
    return(
    <div className="App bg-blue text-light p-5">
      <h1>Visita il sito da mobile per giocare!</h1>
    </div>
    )
  }
}


export default App;
