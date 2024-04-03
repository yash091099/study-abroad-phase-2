import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent10Type = {
  specifyWhyYouWantToPursue?: string;
  discussTheCourseCurriculu?: string;
  explainTheSkillsYouWouldE?: string;

  /** Style props */
  propBackground?: CSSProperties["background"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propLineHeight?: CSSProperties["lineHeight"];
  propWidth2?: CSSProperties["width"];
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  specifyWhyYouWantToPursue,
  discussTheCourseCurriculu,
  explainTheSkillsYouWouldE,
  propBackground,
  propWidth,
  propWidth1,
  propLineHeight,
  propWidth2,
}) => {
  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const specifyWhyYouContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const discussTheCourseContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      lineHeight: propLineHeight,
    };
  }, [propWidth1, propLineHeight]);

  const explainTheSkillsContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div
      className="self-stretch [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#00949b] flex flex-col items-start justify-start py-[0.75rem] px-[0rem] box-border gap-[0.125rem] max-w-full text-center text-[1.375rem] text-white font-gilroy"
      style={frameDiv4Style}
    >
      <div
        className="w-[35.688rem] h-[1.688rem] relative leading-[2.063rem] inline-block max-w-full mq450:text-[1.125rem]"
        style={specifyWhyYouContainerStyle}
      >
        <ul className="m-0 font-inherit text-inherit pl-[1.318rem]">
          <li>{specifyWhyYouWantToPursue}</li>
        </ul>
      </div>
      <div
        className="w-[20.563rem] h-[1.688rem] relative inline-block max-w-full mq450:text-[1.125rem]"
        style={discussTheCourseContainerStyle}
      >
        <ul className="m-0 font-inherit text-inherit pl-[1.318rem]">
          <li>{discussTheCourseCurriculu}</li>
        </ul>
      </div>
      <div
        className="w-[36.313rem] h-[1.688rem] relative leading-[2.063rem] inline-block max-w-full mq450:text-[1.125rem]"
        style={explainTheSkillsContainerStyle}
      >
        <ul className="m-0 font-inherit text-inherit pl-[1.318rem]">
          <li>{explainTheSkillsYouWouldE}</li>
        </ul>
      </div>
    </div>
  );
};

export default FrameComponent10;
