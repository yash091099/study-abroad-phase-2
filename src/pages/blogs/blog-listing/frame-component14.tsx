import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent14Type = {
  lookAtAllTheCoursesAtUniv?: string;
  exploreAllCourses?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propLineHeight?: CSSProperties["lineHeight"];
};

const FrameComponent14: FunctionComponent<FrameComponent14Type> = ({
  lookAtAllTheCoursesAtUniv,
  exploreAllCourses,
  propWidth,
  propGap,
  propAlignSelf,
  propPadding,
  propLineHeight,
}) => {
  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
      alignSelf: propAlignSelf,
      padding: propPadding,
      border: '1px solid #ccc',
      borderRadius:' 10px'
    };
  }, [propWidth, propGap, propAlignSelf, propPadding]);

  const lookAtAllStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div
      className="w-[500px] ml-4 flex flex-col items-center justify-start gap-[28px] max-w-full text-center text-5xl text-black2 font-gilroy"
      style={frameDiv6Style}
    >
      <img src='/scholarship.png' alt="img"/>
      <h1
        className="m-0 self-stretch relative text-inherit leading-[42px] font-normal font-inherit mq450:text-lgi mq450:leading-[34px]"
        style={lookAtAllStyle}
      >
        {lookAtAllTheCoursesAtUniv}
      </h1>
      <button className="cursor-pointer [border:none] mb-3 py-[22px] px-[18px] bg-crimson-100 rounded-lg flex flex-col items-center justify-center">
        <div className="h-5 flex flex-row items-center justify-start py-0 px-0 box-border gap-[8px]">
      
          <div className="relative text-5xl leading-[22px] font-gilroy text-white text-left mq450:text-lgi mq450:leading-[18px]">
            {exploreAllCourses}
          </div>
          <img className="h-6 w-6 relative" alt="" src="/chevronsright.svg" />
        </div>
      </button>
    </div>
  );
};

export default FrameComponent14;
