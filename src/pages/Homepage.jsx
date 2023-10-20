import React from "react";
import LotteryDisplay from "../components/LotteryDisplay";

function Homepage() {
  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-slate-200">
      <LotteryDisplay />
    </section>
  );
}

export default Homepage;
