import React, { FunctionComponent, useState } from "react";
import ApplicationTabs from "./application-tabs";
import ApplicationApplyInProgram from "./applications-to-apply/application-apply-in-program";
import ApplicationAppliedPrograms from "./applied-applications/application-applied-programs";
import ApplicationFilter from "./application-filter/application-filter";

const Application: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState("apply");

  return (
    <>
      <ApplicationTabs setActiveTab={setActiveTab} activeTab={activeTab} />
      {/* Render content based on active tab */}
      {activeTab === "apply" && (
        <div className="mb-4 mx-auto w-[90vw] flex flex-col items-center justify-center gap-[20px] tracking-[normal] text-left text-37xl text-text font-gilroy mq450:gap-[17px_70px] mq900:gap-[35px_70px]">
          <ApplicationFilter />
          <ApplicationApplyInProgram />
        </div>
      )}
      {activeTab === "applied" && (
        <div className="mb-4 mx-auto w-[90vw] flex flex-col items-center justify-center gap-[20px] tracking-[normal] text-left text-37xl text-text font-gilroy mq450:gap-[17px_70px] mq900:gap-[35px_70px]">
          <ApplicationAppliedPrograms />
        </div>
      )}
    </>
  );
};

export default Application;
