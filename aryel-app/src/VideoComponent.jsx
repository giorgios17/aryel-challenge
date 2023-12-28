import React from "react";
import { useState,useEffect } from "react";
function VideoComponent({setVideoEnd}) {
    const [hints, setHints] = useState([
        { text: "Acchiappa i Power Coin per accumulare 2 punti", interval: 4000 },
        { text: "Acchiappa le Energy Star per accumulare 1 punto", interval: 5000 },
        { text: "Schiva gli elementi di disturbo (semafori, cartelli di lavori in corso, area di cantiere, ecc.)", interval: 9500 },
        { text: "Se acchiappi gli elementi di disturbo perdi un punto", interval: 7000 },
      ]);
      const [hintIndex, setHintIndex] = useState(0);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setHintIndex((prevIndex) => (prevIndex + 1) % hints.length);
        }, hints[hintIndex].interval);
    
        // Cleanup della funzione di intervallo nel caso in cui il componente venga smontato prima che scada l'intervallo
        return () => clearInterval(intervalId);
      }, [hints, hintIndex]);
      const handleVideoEnd = () => {
        setVideoEnd(true);
      };
  return (
    <>
      <video style={{ height: "100vh", width: "100%" }} autoPlay onEnded={handleVideoEnd}>
        <source src="/assets/video/tutorial.mp4" type="video/mp4" />
      </video>
      <p className="hintText">{hints[hintIndex].text}</p>
    </>
  );
}

export default VideoComponent;
