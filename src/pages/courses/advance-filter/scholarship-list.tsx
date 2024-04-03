import { FunctionComponent } from "react";

export type ScholarshipListType = {
  path?: string;
  uGDiplomaCertificateAssoc?: string;
};

const ScholarshipList: FunctionComponent<ScholarshipListType> = ({
  path,
  uGDiplomaCertificateAssoc,
}) => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start gap-[13px] max-w-full text-left text-9xl text-grey-1 font-gilroy mq900:flex-wrap">
      <div className="h-6 w-12 relative">
        <input type="checkbox" />
      
      </div>
      <div className="h-[68px] flex-1 relative tracking-[-0.2px] leading-[42px] inline-block min-w-[404px] max-w-full mq450:text-3xl">
        {uGDiplomaCertificateAssoc}
      </div>
    </div>
  );
};

export default ScholarshipList;
