import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent16Type = {
  prepare?: string;
  registerInstructions?: string;
  noticeToTestTakers?: string;
  informationForTestTakers?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const FrameComponent16: FunctionComponent<FrameComponent16Type> = ({
  prepare,
  registerInstructions,
  noticeToTestTakers,
  informationForTestTakers,
  propWidth,
  propHeight,
}) => {
  const prepareStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const registerInstructionsNoticeContainerStyle: CSSProperties =
    useMemo(() => {
      return {
        height: propHeight,
      };
    }, [propHeight]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-left text-23xl text-black2 font-gilroy">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[33px]">
        <h2
          className="m-0 h-[51px] relative text-inherit tracking-[0.03em] uppercase font-normal font-inherit inline-block z-[1] mq450:text-6xl mq800:text-15xl"
          style={prepareStyle}
        >
          {prepare}
        </h2>
      </div>
      <div
        className="self-stretch h-[87px] relative text-5xl tracking-[0.03em] text-gray-700 inline-block z-[1] mq450:text-lgi"
        style={registerInstructionsNoticeContainerStyle}
      >
        <ul className="m-0 font-inherit text-inherit pl-8">
          <li className="mb-0">{registerInstructions}</li>
          <li className="mb-0">{noticeToTestTakers}</li>
          <li>{informationForTestTakers}</li>
        </ul>
      </div>
    </div>
  );
};

export default FrameComponent16;
