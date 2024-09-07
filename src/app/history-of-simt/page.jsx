import History from "@/components/HistoryComponents/History";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";

const HistoryPage = () => {
  return (
    <div>
      <PageBanner heading={"History of DIET"} />
      <History />
    </div>
  );
};

export default HistoryPage;
