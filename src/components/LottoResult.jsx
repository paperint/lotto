import React from "react";

function LottoResult({ data }) {
  return (
    <div className="grid w-full max-w-2xl grid-cols-4 grid-rows-4 overflow-hidden rounded-md">
      {data.map((item, index) => (
        <div
          key={index}
          className={`lottogrid${index} grid col-span-4 text-center`}
        >
          <div
            className={`${
              index === 1 ? "col-span-2" : ""
            } border border-orange-800 p-2 font-bold bg-orange-500 text-white text-opacity-90`}
          >
            {item.type}
          </div>
          {item.lotto.map((item, indexLotto) => (
            <div key={indexLotto} className="p-2 border border-orange-800">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LottoResult;
