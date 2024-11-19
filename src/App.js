import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./App.css";


const categories = [
  {
    option: "Schuhe",
    tip: "Tragen Sie fest sitzende, rutschfeste Schuhe mit flachen Absätzen, um ein Ausrutschen auf Treppen zu vermeiden.",
  },
  {
    option: "Beleuchtung",
    tip: "Sorgen Sie für eine ausreichende Beleuchtung der Treppen, um Stolperfallen sichtbar zu machen.",
  },
  {
    option: "Handlauf",
    tip: "Benutzen Sie stets den Handlauf, um bei einem möglichen Stolpern Halt zu finden.",
  },
  {
    option: "Aufmerksamkeit",
    tip: "Gehen Sie konzentriert und vermeiden Sie Ablenkungen wie das Benutzen des Handys während des Treppensteigens.",
  },
  {
    option: "Ordnung",
    tip: "Halten Sie die Treppe frei von Gegenständen, um Stolperfallen zu vermeiden.",
  },
  {
    option: "Rutschhemmung",
    tip: "Bringen Sie rutschhemmende Beläge oder Antirutschstreifen auf den Stufen an, um die Trittsicherheit zu erhöhen.",
  },
  {
    option: "Sehhilfe",
    tip: "Tragen Sie bei Bedarf eine Sehhilfe, um die Treppe klar und deutlich zu erkennen.",
  },
  {
    option: "Kondition",
    tip: "Stärken Sie Ihre Muskulatur und Koordination durch regelmäßige Übungen, um sicherer auf Treppen zu gehen.",
  },
];


const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedTip, setSelectedTip] = useState("");
  const [showTip, setShowTip] = useState(false);


  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * categories.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };


  const handleStopSpinning = () => {
    setMustSpin(false);
    setSelectedTip(categories[prizeNumber].tip);
    setShowTip(true);
    setTimeout(() => setShowTip(false), 8000);
  };


  return (
      <div className={`app-container ${showTip ? "tip-background" : ""}`}>
        <h1>Prävention von Treppenstürzen</h1>
        {!showTip ? (
            <>
              <Wheel
                  mustStartSpinning={mustSpin}
                  prizeNumber={prizeNumber}
                  data={categories}
                  backgroundColors={["#3e3e3e", "#df3428"]}
                  textColors={["#ffffff"]}
                  onStopSpinning={handleStopSpinning}
              />
              <button onClick={handleSpinClick} className="spin-button">
                Drehen
              </button>
            </>
        ) : (
            <div className="tip-popup">
              <h2>Präventionstipp</h2>
              <p>{selectedTip}</p>
            </div>
        )}
      </div>
  );
};


export default App;