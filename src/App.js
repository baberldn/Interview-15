import React, { useState, useEffect } from "react";

function App() {
  return <WordByWord />;
}

const WordByWord = () => {
  const [inputText, setInputText] = useState(""); 
  const [displayText, setDisplayText] = useState(""); 
  const [words, setWords] = useState([]); 
  const [index, setIndex] = useState(0); 

  useEffect(() => {
    if (words.length > 0) {
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + (prev ? " " : "") + words[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 500);

      
      if (index >= words.length) {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
  }, [index, words]);

  const handleInputChange = (e) => {
    const newInput = e.target.value;
    setInputText(newInput);

    
    setDisplayText("");
    setWords(newInput.split(" "));
    setIndex(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <input
        type="text"
        placeholder="Metin girin"
        value={inputText}
        onChange={handleInputChange}
        className="w-80 p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-lg font-semibold text-gray-800 bg-white p-4 rounded-md shadow-md w-80 text-center">
        {displayText || "Metin burada görünecek."}
      </p>
    </div>
  );
};

export default App;
