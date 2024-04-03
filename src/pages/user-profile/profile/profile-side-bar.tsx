import { FunctionComponent } from "react";
import ProfilePerdonalDetailsForm from "./personal-details-form/profile-perdonal-details-form";
import PersonalAcadmicDetails from "./acadmic-details-form/personal-acadmic-details";
import ProfileWorkBackground from "./work-background/profile-work-background-form";
import ProfileTestes from "./test-details-form/profile-testes-form";

interface SideBarProps {
  renderComponent: (component: JSX.Element) => void;
  activeComponent: JSX.Element;
}

const ProfileSideBar: FunctionComponent<SideBarProps> = ({ renderComponent, activeComponent }) => {
  return (
    <div className="w-72 flex flex-row items-start justify-start pt-6 px-6 box-border tracking-[normal]">
      <section className="flex-1 flex flex-col items-start justify-start gap-[24px] text-left text-mini font-light-basic-typography-paragraph-small">
        <div
          className={`self-stretch flex flex-row items-center justify-start gap-[16px] cursor-pointer ${
            activeComponent.type === ProfilePerdonalDetailsForm ? "bg-primary-1 text-white" : ""
          }`}
          onClick={() => renderComponent(<ProfilePerdonalDetailsForm />)}
        >
          <div className="h-10 rounded-md flex flex-row items-start justify-start p-2 box-border">
            <img className="h-6 w-6 relative" loading="lazy" alt="" src="/users.svg" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[21px] font-semibold">Personal Details</div>
            <div className="self-stretch relative text-smi leading-[20px]">Incomplete</div>
          </div>
        </div>
        <div
          className={`self-stretch flex flex-row items-center justify-start gap-[16px] cursor-pointer ${
            activeComponent.type === PersonalAcadmicDetails ? "bg-primary-1 text-white" : ""
          }`}
          onClick={() => renderComponent(<PersonalAcadmicDetails />)}
        >
          <div className="h-10 rounded-md bg-whitesmoke-600 shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-start justify-start p-2 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/heroiconsacademiccap.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[21px] font-semibold">Academic Profile</div>
            <div className="self-stretch relative text-smi leading-[20px]">Incomplete</div>
          </div>
        </div>
        <div
          className={`self-stretch flex flex-row items-center justify-start gap-[16px] cursor-pointer ${
            activeComponent.type === ProfileWorkBackground ? "bg-primary-1 text-white" : ""
          }`}
          onClick={() => renderComponent(<ProfileWorkBackground />)}
        >
          <div className="h-10 rounded-md bg-dimgray-500 flex flex-row items-start justify-start p-2 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/materialsymbolslightworkoutline.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[21px] font-semibold">Work Backgrounds</div>
            <div className="self-stretch relative text-smi leading-[20px]">Incomplete</div>
          </div>
        </div>
        <div
          className={`self-stretch flex flex-row items-center justify-start gap-[16px] cursor-pointer ${
            activeComponent.type === ProfileTestes ? "bg-primary-1 text-white" : ""
          }`}
          onClick={() => renderComponent(<ProfileTestes />)}
        >
          <div className="h-10 rounded-md bg-dimgray-500 flex flex-row items-start justify-start p-2 box-border">
            <img className="h-6 w-6 relative" loading="lazy" alt="" src="/filetext.svg" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[21px] font-semibold">Tests</div>
            <div className="self-stretch relative text-smi leading-[20px]">Incomplete</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileSideBar;