import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent11Type = {
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

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  specifyWhyYouWantToPursue,
  discussTheCourseCurriculu,
  explainTheSkillsYouWouldE,
  propBackground,
  propWidth,
  propWidth1,
  propLineHeight,
  propWidth2,
}) => {
  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const specifyWhyYouContainer1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const discussTheCourseContainer1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      lineHeight: propLineHeight,
    };
  }, [propWidth1, propLineHeight]);

  const explainTheSkillsContainer1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div
      className="self-stretch [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#00949b] flex flex-col items-start justify-start py-3 px-0 box-border gap-[2px] max-w-full text-center text-3xl text-white font-gilroy"
      style={frameDiv5Style}
    >
      <div
        className="w-[571px] h-[27px] relative leading-[33px] inline-block max-w-full mq450:text-lg"
        style={specifyWhyYouContainer1Style}
      >
        <ul className="m-0 font-inherit text-inherit pl-[29px]">
          <li>{specifyWhyYouWantToPursue}</li>
        </ul>
      </div>
      <div
        className="w-[329px] h-[27px] relative inline-block max-w-full mq450:text-lg"
        style={discussTheCourseContainer1Style}
      >
        <ul className="m-0 font-inherit text-inherit pl-[29px]">
          <li>{discussTheCourseCurriculu}</li>
        </ul>
      </div>
      <div
        className="w-[581px] h-[27px] relative leading-[33px] inline-block max-w-full mq450:text-lg"
        style={explainTheSkillsContainer1Style}
      >
        <ul className="m-0 font-inherit text-inherit pl-[29px]">
          <li>{explainTheSkillsYouWouldE}</li>
        </ul>
      </div>
    </div>
  );
};

export default FrameComponent11;
