import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setplayStatus] = useState(false);
  
  const [time, setTime] = useState({  
    currenTime: {
      second: 0,
      minute: 0,
    },
    
    totalTime: {
      second: 0,
      minute: 0,
    },
  });
  
  const play = () => {
    audioRef.current.play();
    setplayStatus(true);
  }

  const pause = () =>{
    audioRef.current.pause();
    setplayStatus(false);
  }

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,setTrack,
    playStatus,setplayStatus,
    time,setTime,
    play,pause
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;