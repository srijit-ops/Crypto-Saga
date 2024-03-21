import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Player
        src="https://lottie.host/c980b072-2b85-4779-b300-5bd88d662793/GR5E6fGwIO.json"
        className="player"
        loop
        autoplay
        style={{ height: "250px", width: "250px" }}
      />
    </div>
  );
}

export default Loader;
