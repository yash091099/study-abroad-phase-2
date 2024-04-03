// ProfileTabs.tsx
import { FunctionComponent, useState } from "react";

interface ProfileTabsProps {
  onSelectTab: (tab: string) => void;
}

const ProfileTabs: FunctionComponent<ProfileTabsProps> = ({ onSelectTab }) => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    onSelectTab(tab);
  };

  return (
    <div className="w-[1680px] h-[60.5px] box-border max-w-full overflow-x-auto flex flex-row items-start justify-start gap-[30px] tracking-[normal] text-left text-9xl text-black2 font-gilroy border-b-[1px] border-solid border-black2">
      <button
        className={`cursor-pointer [border:none] py-2.5 px-[30px] bg-[transparent] h-14 box-border flex flex-row items-start justify-start border-b-[4px] border-solid ${
          activeTab === "profile" ? "border-primary-1" : ""
        } hover:bg-crimson-400`}
        onClick={() => handleClick("profile")}
      >
        <div className="relative text-9xl tracking-[-0.2px] font-gilroy text-primary-1 text-left inline-block min-w-[79px] mq450:text-3xl">
          Profile
        </div>
      </button>
      <button
        className={`cursor-pointer [border:none] py-2.5 px-[30px] bg-[transparent] h-14 box-border flex flex-row items-start justify-start border-b-[4px] border-solid ${
          activeTab === "application" ? "border-primary-1" : ""
        } hover:bg-crimson-400`}
        onClick={() => handleClick("application")}
      >
        <div className="relative text-9xl tracking-[-0.2px] font-gilroy text-primary-1 text-left inline-block min-w-[79px] mq450:text-3xl">
          Application
        </div>
      </button>
      <button
        className={`cursor-pointer [border:none] py-2.5 px-[30px] bg-[transparent] h-14 box-border flex flex-row items-start justify-start border-b-[4px] border-solid ${
          activeTab === "documents" ? "border-primary-1" : ""
        } hover:bg-crimson-400`}
        onClick={() => handleClick("documents")}
      >
        <div className="relative text-9xl tracking-[-0.2px] font-gilroy text-primary-1 text-left inline-block min-w-[79px] mq450:text-3xl">
          Documents
        </div>
      </button>
    </div>
  );
};

export default ProfileTabs;
