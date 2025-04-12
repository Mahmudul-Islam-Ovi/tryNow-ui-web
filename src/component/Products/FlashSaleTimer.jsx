import React, { useEffect, useState } from "react";

export default function FlashSaleTimer() {
  const [secondsLeft, setSecondsLeft] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s) => {
    const hrs = String(Math.floor(s / 3600)).padStart(2, "0");
    const min = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return { hrs, min, sec };
  };

  const { hrs, min, sec } = formatTime(secondsLeft);

  return (
    <div className="flex flex-col md:flex-row items-center border-1 border-gray-300 rounded-full md:w-lg gap-2 text-sm">
      <span className="font-bold md:text-2xl px-4 py-2 ">Deal of the Day</span>
      <span className="font-semibold">End in:</span>
      <div className="flex gap-2 p-2 items-center justify-center">
        <span className="bg-blue-400 text-white px-2 py-2 rounded">00D</span>
        <span className="bg-blue-400 text-white px-2 py-2 rounded">{hrs}H</span>
        <span className="bg-blue-400 text-white px-2 py-2 rounded">{min}M</span>
        <span className="bg-blue-400 text-white px-2 py-2 rounded">{sec}S</span>
      </div>
    </div>
  );
}
