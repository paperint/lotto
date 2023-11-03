import React from "react";

function CheckLotto({
  checkLotto,
  setCheckLotto,
  handleCheckResult,
  resultLotto,
}) {
  return (
    <div className="w-11/12 overflow-hidden border border-orange-800 rounded-lg">
      <p className="p-2 text-white bg-orange-500 text-opacity-90">
        ตรวจรางวัลล็อตเตอรี่
      </p>
      <div className="flex flex-col justify-center gap-4 p-4">
        <div className="inline-flex items-center gap-2 text-lg">
          <p>เลขล็อตเตอรี่ :</p>
          <input
            className="px-4 py-1 rounded-md outline-none focus:border focus:border-orange-500"
            type="text"
            value={checkLotto}
            onChange={(e) => setCheckLotto(e.target.value)}
            placeholder="000"
          />
        </div>
        {resultLotto !== "" && (
          <p className="w-11/12 p-4 mx-auto text-lg text-white bg-black">
            {resultLotto}
          </p>
        )}

        <button
          onClick={() => handleCheckResult()}
          className="w-full px-12 py-1 bg-orange-500 border border-orange-800 rounded-xl active:scale-95"
        >
          ตรวจรางวัล
        </button>
      </div>
    </div>
  );
}

export default CheckLotto;
