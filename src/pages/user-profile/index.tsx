// Profile.tsx
import { FunctionComponent, useState } from "react";
import ProfileTabs from "./profile/profile-tabs";
import WelcomeProfileCard from "./welcome-edulley-profile-card";
import ProfileSideBar from "./profile/profile-side-bar";
import ProfilePerdonalDetailsForm from "./profile/personal-details-form/profile-perdonal-details-form";
import Application from "./Application";
import Document from "./Documents";


const Profile: FunctionComponent = () => {
  const [activeComponent, setActiveComponent] = useState<JSX.Element>(<ProfilePerdonalDetailsForm />);
const [activeTab, setActiveTab] = useState("profile");
  const renderComponent = (component: JSX.Element) => {
    setActiveComponent(component);

  };

  return (
    <div className="mb-4 mx-auto w-[90vw] flex flex-col items-center justify-center gap-[0px] tracking-[normal] text-left text-37xl text-text font-gilroy mq450:gap-[17px_70px] mq900:gap-[35px_70px]">
      <ProfileTabs
        onSelectTab={(tab: string) => {
          switch (tab) {
            case "profile":
              setActiveComponent(<ProfilePerdonalDetailsForm />);
              setActiveTab('profile')
              break;
            case "application":
              setActiveComponent(<Application />);
              setActiveTab('application')

              break;
            case "documents":
              setActiveComponent(<Document />);
              setActiveTab('documents')

              break;
            default:
              break;
          }
        }}
      />
     <>
        {activeTab==='profile'&& <WelcomeProfileCard />}
        <div className="flex w-full">
         {activeTab==='profile'&&  <div className="w-[20vw]">
            <ProfileSideBar renderComponent={renderComponent} activeComponent={activeComponent} />
          </div>}
          <div className="w-[75vw]">{activeComponent}</div>
        </div>
      </>

      {/* Removed direct rendering of Application and Document components */}
    </div>
  );
};

export default Profile;
