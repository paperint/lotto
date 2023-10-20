import React, { useState } from "react";
import useGenerateNumber from "../hook/useGenerateNumber";
import RandomLotto from "./RandomLotto";
import LottoResult from "./LottoResult";
import CheckLotto from "./CheckLotto";

const initialData = [
  { type: "รางวัลที่ 1", lotto: ["905"] },
  { type: "รางวัลเลขข้างเคียงรางวัลที่ 1", lotto: ["904", "906"] },
  { type: "รางวัลที่ 2", lotto: ["106", "598", "575"] },
  { type: "รางวัลเลขท้าย 2 ตัว", lotto: ["05"] },
];

function LotteryDisplay() {
  const [data, setData] = useState(initialData);
  const [checkLotto, setCheckLotto] = useState("");
  const [resultLotto, setResultLotto] = useState("");
  const { randomThreeNumber, randomTwoNumber } = useGenerateNumber();

  const handlerRandomLotto = () => {
    const newData = data.map((item) => {
      const arrayOfEachResult = [];
      if (item.type !== "รางวัลเลขท้าย 2 ตัว") {
        const newLottoNumbers = item.lotto.map(() =>
          randomThreeNumber(arrayOfEachResult)
        );
        arrayOfEachResult.push(...newLottoNumbers);
        return { ...item, lotto: newLottoNumbers };
      } else {
        const newLottoNumbers = item.lotto.map(() =>
          randomTwoNumber(arrayOfEachResult)
        );
        arrayOfEachResult.push(...newLottoNumbers);
        return { ...item, lotto: newLottoNumbers };
      }
    });
    setData(newData);
  };

  const handleCheckResult = () => {
    if (checkLotto.length > 3 || checkLotto.length === "") {
      setResultLotto("ไม่สามารถตรวจสอบได้");
      setCheckLotto("");
    }

    if (checkLotto.length === 2) {
      if (data[3].lotto.includes(checkLotto)) {
        setResultLotto(`${checkLotto} ถูก${data[3].type}`);
        setCheckLotto("");
      } else {
        setResultLotto(`${checkLotto} ไม่ถูกรางวัลใดเลย`);
        setCheckLotto("");
      }
    }

    if (checkLotto.length === 3) {
      const resultAfterCheck = data.filter((item) => {
        if (item.type === "รางวัลเลขท้าย 2 ตัว") {
          const lastTwoDigits = checkLotto.slice(-2);
          return item.lotto.includes(lastTwoDigits);
        } else {
          return item.lotto.includes(checkLotto);
        }
      });

      if (resultAfterCheck.length > 0) {
        const result = resultAfterCheck.map((item) => item.type).join(" และ");
        setResultLotto(`${checkLotto} ถูกรางวัล${result}`);
        setCheckLotto("");
      } else {
        setResultLotto(`${checkLotto} ไม่ถูกรางวัลใดเลย`);
        setCheckLotto("");
      }
    }
  };

  return (
    <article className="flex flex-col items-center justify-center w-full max-w-5xl gap-4 pb-6 mx-auto rounded-lg bg-slate-300">
      <RandomLotto handlerRandomLotto={handlerRandomLotto} />
      <LottoResult data={data} />
      <CheckLotto
        checkLotto={checkLotto}
        setCheckLotto={setCheckLotto}
        handleCheckResult={handleCheckResult}
        resultLotto={resultLotto}
      />
    </article>
  );
}

export default LotteryDisplay;
