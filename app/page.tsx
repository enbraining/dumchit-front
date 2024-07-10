"use client";

import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import DownImage from "/down.png";
import UpImage from "/up.png";

export default function Home() {
  const [status, setStatus] = useState<Boolean>(true);
  const [count, setCount] = useState(0);

  const audioRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    const audio = new Audio("/sound.mp3");
    audio.play();
  }, [count]);

  return (
    <div>
      <audio
        ref={audioRef as MutableRefObject<HTMLAudioElement>}
        src="/sound.mp3"
      ></audio>
      <p className="text-center p-10 text-6xl font-semibold text-white">
        {count}
      </p>
      <div className="flex">
        <div
          className="m-auto w-full h-full flex min-h-[80vh] items-end justify-center"
          onMouseDown={() => {
            setStatus(false);
          }}
          onMouseUp={() => {
            setStatus(true);
            setCount(count + 1);
          }}
        >
          {status ? (
            <Image src={UpImage} alt="up" width={1000} height={1000} />
          ) : (
            <Image src={DownImage} alt="up" width={1000} height={1000} />
          )}
        </div>
      </div>
    </div>
  );
}
