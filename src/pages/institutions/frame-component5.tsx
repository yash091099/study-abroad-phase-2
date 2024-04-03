import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent5Type = {
  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  propLeft,
  propTop,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
      cursor: "pointer",
    };
  }, [propLeft, propTop]);
  const navigate=useNavigate()

  return (
    <div onClick={() => navigate('/institution-details')}
      className="w-[388px] !m-[0] absolute top-[0px] left-[0px] rounded-[21.92px] box-border flex flex-col items-start justify-start max-w-full text-left text-9xl text-text font-gilroy border-[0.9px] border-solid border-silver-200"
      style={frameDiv1Style}
    >
      <img
        className="self-stretch h-64 relative rounded-[21.92px] max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/frame-1686560972@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start py-4 px-2.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[52px] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1px] min-w-[135px]">
              <h3 className="m-0 h-[34px] relative text-inherit leading-[42px] font-normal font-inherit inline-block mq450:text-3xl">
                University Name
              </h3>
              <div className="h-[22px] relative text-lg leading-[27px] inline-block min-w-[72px]">
                Country
              </div>
            </div>
            <div className="h-[60px] w-[60px] flex flex-row items-start justify-start relative gap-[9px] text-lg text-dimgray-300">
              <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-gainsboro-200" />
              <div className="absolute !m-[0] top-[calc(50%_-_11px)] left-[calc(50%_-_20.8px)] leading-[27px] inline-block min-w-[43px] z-[1]">
                Logo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
