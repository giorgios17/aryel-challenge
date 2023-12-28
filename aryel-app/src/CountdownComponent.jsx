import React, { useState, useEffect } from "react";

function CountdownComponent({ setCountdownEnd }) {
  const [countdown, setCountdown] = useState(3);
  const [showReady, setShowReady] = useState(false);

  useEffect(() => {
    const firstCountdownInterval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(firstCountdownInterval);
          setShowReady(true);

          // Secondo countdown di 1 secondo
          const secondCountdownInterval = setInterval(() => {
            setCountdownEnd(true);
            clearInterval(secondCountdownInterval);
          }, 1000);

          return prevCountdown; // Mantieni il valore del countdown invariato
        }
      });
    }, 1000);

    // Cleanup della funzione di intervallo nel caso in cui il componente venga smontato prima che scada l'intervallo
    return () => clearInterval(firstCountdownInterval);
  }, [setCountdownEnd]);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column h-100">
        <img
          style={{ width: "320px", height: "120px" }}
          src="/assets/img/fireworks.png"
          alt=""
        />
        {countdown > 0 ? (
          <span className="numCountdown">{countdown}</span>
        ) : (
          <div className="w-50">
            <p style={{ fontSize: "36px", fontWeight: "700", color: "#3A365C" }}>
              Pronti
            </p>
            <p style={{ fontSize: "52px", fontWeight: "700", color: "white" }}>
              Partenza Via!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default CountdownComponent;
