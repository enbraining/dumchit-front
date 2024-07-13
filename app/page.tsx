"use client";

import Image from "next/image";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export default function Home() {
  const [status, setStatus] = useState<Boolean>(true);
  const [count, setCount] = useState(0);

  const audioRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    const audio = new Audio("/sound.mp3");
    audio.play();
  }, [count]);

  const handleMouseDown = useCallback(() => {
    setStatus(false);
    setCount((prevCount: number) => prevCount + 1);
  }, []);

  const handleMouseUp = useCallback(() => {
    setStatus(true);
  }, []);

  const handleTouchStart = useCallback(() => {
    setStatus(false);
  }, []);

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
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
        >
          <Image
            src={status ? "/up.png" : "/down.png"}
            alt={status ? "up" : "down"}
            width={1000}
            height={1000}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
