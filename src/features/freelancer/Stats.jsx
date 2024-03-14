import React from "react";
import { HiCollection, HiOutlineViewGrid } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi2";
import Stat from "../owner/Stat";

function Stats({ proposals }) {
  if (proposals == undefined) return;
  const numberOfProposals = proposals.length;
  const numbOfAcceptedProposals = proposals.filter((item) => item.status === 2);
  const balance = numbOfAcceptedProposals.reduce((acc, curr) => acc + curr.price,0);

  return (
    <div className="grid grid-cols-3 gap-x-8">
      <Stat
        label={"درخواست ها"}
        value={numberOfProposals}
        icon={<HiOutlineViewGrid className="w-16 h-16" />}
        BgColor={`bg-primary-100`}
        textColor={`text-primary-700`}
      />
      <Stat
        label={"درخواست های تایید شده"}
        value={numbOfAcceptedProposals.length}
        icon={<HiCurrencyDollar className="w-16 h-16" />}
        BgColor={`bg-green-100`}
        textColor={`text-green-700`}
      />
      <Stat
        label={"حساب شما"}
        value={`${balance.toLocaleString()} تومان `}
        icon={<HiCollection className="w-16 h-16" />}
        BgColor={`bg-yellow-100`}
        textColor={`text-yellow-700`}
      />
    </div>
  );
}

export default Stats;
