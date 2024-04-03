

import React, { FunctionComponent } from "react";

interface ApplicationTabsProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
}

const DocumentTabs: FunctionComponent<ApplicationTabsProps> = ({
  setActiveTab,
  activeTab,
}) => {
  return (
    <div className="w-full m-4 flex flex-row items-start justify-start gap-[28px] tracking-[normal] mq495:flex-wrap">
      <button
        className={`cursor-pointer ${
          activeTab === "apply" ? "bg-primary-1" : "bg-white"
        } py-1.5 px-10 rounded-46xl shadow-[0px_4px_12px_rgba(153,_153,_153,_0.36)] flex flex-row items-start justify-start whitespace-nowrap hover:bg-crimson-200`}
        onClick={() => setActiveTab("apply")}
      >
        <div className="relative text-xl leading-[54px] font-gilroy text-left whitespace-nowrap">
        Uploaded by you
        </div>
      </button>
      <button
        className={`cursor-pointer ${
          activeTab === "applied" ? "bg-primary-1" : "bg-white"
        } py-1.5 px-10 rounded-46xl shadow-[0px_4px_12px_rgba(153,_153,_153,_0.36)] flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro-100`}
        onClick={() => setActiveTab("applied")}
      >
        <div className="relative text-xl leading-[54px] font-gilroy text-text text-left whitespace-nowrap">
        Uploaded by Edulley
        </div>
      </button>
    </div>
  );
};

export default DocumentTabs;
