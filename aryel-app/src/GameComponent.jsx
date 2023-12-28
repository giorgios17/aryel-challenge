import React from "react";
import { useEffect } from "react";

function GameComponent({setGameEnd}) {

    useEffect(() => {
        const gameTimeout = setTimeout(() => {
            setGameEnd(true);
        }, 5000);
    
        // Cleanup della funzione di timeout nel caso in cui il componente venga smontato prima che scada il timeout
        return () => clearTimeout(gameTimeout);
      }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center py-5 px-3">
        <div className="score">
          <p>PUNTEGGIO</p>
          <span>01</span>
        </div>
        <div className="timer">
          <p>TEMPO</p>
          <span>30:00</span>
        </div>
      </div>
      <img style={{position:"absolute",bottom:"0", left:"0", width:"100%"}} src="/assets/img/gamelogo.png" alt="" />
    </>
  );
}

export default GameComponent;
