"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<Boolean>(true);
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div
        className="m-auto w-full h-full flex min-h-screen items-end justify-center"
        onMouseDown={() => {
          setStatus(false);
        }}
        onMouseUp={() => {
          setStatus(true);
        }}
      >
        {status ? (
          <Image
            className="select-none"
            src={"/up.png"}
            alt="up"
            width={400}
            height={400}
          />
        ) : (
          <Image
            className="select-none"
            src={"/down.png"}
            alt="up"
            width={400}
            height={400}
          />
        )}
      </div>
    </main>
  );
}
