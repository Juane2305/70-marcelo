import React, { useRef, useState, useEffect } from "react";
import icon from "../assets/icon-music.svg";
import pause from "../assets/icon-pause.svg";


const MusicPlayer = ({ cancion, initialPlay = false }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    if (initialPlay && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      })
    }
  }, [initialPlay]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full">
      <audio ref={audioRef} src={cancion} preload="auto" />

      <div className={`fixed top-12 right-10 sm:top-12 sm:right-10 z-50 flex flex-col items-center gap-1 ${!isPlaying ? 'animate-bounce' : ''}`}>
        {!isPlaying && (
          <div className="text-[12px] text-center sm:text-sm bg-gray-800 text-white font-semibold rounded-md px-3 py-1 shadow-lg">
          Presioná <br /> acá
          </div>
        )}

        <button onClick={togglePlayPause} type="button" aria-label={isPlaying ? "Pausar música" : "Reproducir música"}>
          {isPlaying ? (
            <img
              src={pause}
              alt="Pause"
              className="size-14 sm:size-16 p-3 animate-custom-bounce bg-[#DAA520] rounded-full bg-opacity-60 backdrop-blur"
            />
          ) : (
            <img
              src={icon}
              alt="Play"
              className="size-14 sm:size-16 p-3 animate-custom-bounce bg-[#DAA520] rounded-full bg-opacity-60 backdrop-blur"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;