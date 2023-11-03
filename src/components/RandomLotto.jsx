import React from "react";

function RandomLotto({ handlerRandomLotto }) {
  return (
    <>
      <div className="w-full p-6 bg-orange-500 rounded-t-lg">
        <h1 className="text-xl font-bold text-center text-white text-opacity-90">
          รางวัลล็อตเตอรี่
        </h1>
      </div>

      <div className="w-full p-6">
        <p className="text-lg font-bold">ผลการออกรางวัลล็อตเตอรี่</p>
        <button
          onClick={() => handlerRandomLotto()}
          className="px-4 py-1 border-2 border-orange-400 rounded-xl active:scale-95"
        >
          <p className="font-bold">ดำเนินการสุ่มรางวัล</p>
        </button>
      </div>
    </>
  );
}

export default RandomLotto;
