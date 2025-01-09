import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { albumsData, assets } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  return (
    <>
      <NavBar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end ">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-6 h-6 mr-2"
              src={assets.spotify_logo}
              alt=""
            />
            <b className="mr-2">Spotify</b>
            <span className="text-slate-400	font-bold">• 1,323,561 likes </span>
            <b className="text-slate-400 font-bold">
              • 50 songs, about 2 hr 30 min
            </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default DisplayAlbum;
