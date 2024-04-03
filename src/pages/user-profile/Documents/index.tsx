import React, { FunctionComponent, useState } from "react";
import DocumentTabs from "./document-tabs";
import WelcomeProfileCard from "../welcome-edulley-profile-card";
import DocumentUploadByUser from "./document-upload-by-user";
import DocumentUploadByEdulley from "./document-upload-by-edulley/document-upload-by-edulley";

const Document: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState("apply");

  return (
    <>
      <DocumentTabs  setActiveTab={setActiveTab} activeTab={activeTab} />
      <WelcomeProfileCard/>
      {/* Render content based on active tab */}
      {activeTab === "apply" && (
        <div className="mb-4 mx-auto w-[90vw] flex flex-col items-center justify-center gap-[20px] tracking-[normal] text-left text-37xl text-text font-gilroy mq450:gap-[17px_70px] mq900:gap-[35px_70px]">
          <DocumentUploadByUser/>
        </div>
      )}
      {activeTab === "applied" && (
        <div className="mb-4 mx-auto w-[90vw] flex flex-col items-center justify-center gap-[20px] tracking-[normal] text-left text-37xl text-text font-gilroy mq450:gap-[17px_70px] mq900:gap-[35px_70px]">
          <DocumentUploadByEdulley />
        </div>
      )}
    </>
  );
};

export default Document;
