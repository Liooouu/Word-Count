"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const Wordcount = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const audioRef = useRef(null);
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    const words = value.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  };

  const handleKeyDown = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const resetFields = () => {
    setText("");
    setWordCount(0);
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div
      className="min-h-[115vh] pt-[70px] bg-cover bg-center bg-no-repeat font-sans flex flex-col items-center gap-6"
      style={{ backgroundImage: "url('/Pictures/IBG.png')" }} // fixed path: leading slash
    >
      <audio ref={audioRef} src="/Audio/Key.wav" preload="auto" /> {/* leading slash */}

      <button
        className="text-white bg-blue-700 px-4 py-2 rounded"
        onClick={goBack} // pass function, do NOT call directly
      >
        Back
      </button>

      <textarea
        placeholder="Type your message here..."
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-1/2 h-64 bg-white text-black p-4 shadow-md resize-none rounded"
      ></textarea>

      <div className="flex gap-4">
        <button
          onClick={() =>
            setWordCount(text.trim().split(/\s+/).filter(Boolean).length)
          }
          className="bg-black text-white uppercase tracking-wider rounded px-5 py-2 transition hover:bg-green-500 hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgb(12,200,15)]"
        >
          Word Counter
        </button>
        <button
          onClick={resetFields}
          className="bg-black text-white uppercase tracking-wider rounded px-5 py-2 transition hover:bg-green-500 hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgb(12,200,15)]"
        >
          Reset
        </button>
      </div>

      <p className="text-white font-semibold text-center">
        {text && `Total Number of Words: ${wordCount}`}
      </p>
    </div>
  );
};

export default Wordcount;
