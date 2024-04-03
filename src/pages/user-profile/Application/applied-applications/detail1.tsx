import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Detail1Type = {
  /** Style props */
  cUConventryBorderLeft?: CSSProperties["borderLeft"];
  cUConventryBackgroundColor?: CSSProperties["backgroundColor"];
  cUConventryBorderTop?: CSSProperties["borderTop"];
  propLineHeight?: CSSProperties["lineHeight"];
  propLineHeight1?: CSSProperties["lineHeight"];
  propHeight?: CSSProperties["height"];
  propLineHeight2?: CSSProperties["lineHeight"];
};

const Detail1: FunctionComponent<Detail1Type> = ({
  cUConventryBorderLeft,
  cUConventryBackgroundColor,
  cUConventryBorderTop,
  propLineHeight,
  propLineHeight1,
  propHeight,
  propLineHeight2,
}) => {
  const detail1Style: CSSProperties = useMemo(() => {
    return {
      borderLeft: cUConventryBorderLeft,
      backgroundColor: cUConventryBackgroundColor,
      borderTop: cUConventryBorderTop,
    };
  }, [cUConventryBorderLeft, cUConventryBackgroundColor, cUConventryBorderTop]);

  const universityName1Style: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const manchesterUK1Style: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight1,
    };
  }, [propLineHeight1]);

  const cUConventryStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight2,
    };
  }, [propHeight, propLineHeight2]);

  return (
    <div
      className="self-stretch box-border flex flex-row items-start justify-start py-5 px-[27px] max-w-full text-left text-5xl text-black2 font-gilroy border-l-[5px] border-solid border-primary-1"
      style={detail1Style}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-primary-1 mq450:flex-wrap">
          <div className="relative leading-[54px] mq450:text-lgi mq450:leading-[43px]">
            98765/23-24
          </div>
          <div className="relative text-xl leading-[54px] text-black2 whitespace-pre-wrap shrink-0 mq450:text-base mq450:leading-[43px]">
            01/02/2024 12:22 PM
          </div>
        </div>
        <div className="w-[347px] flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch relative leading-[34px] mq450:text-lgi mq450:leading-[27px]">
            MA by Research English Studies
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-grey-1 mq450:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="h-5 w-5 relative rounded-[50%] bg-gainsboro-200" />
              <div
                className="relative inline-block min-w-[119px]"
                style={universityName1Style}
              >
                University Name
              </div>
            </div>
            <div className="h-5 flex flex-row items-start justify-start gap-[6px]">
              <img
                className="h-5 w-5 relative min-h-[20px]"
                loading="lazy"
                alt=""
                src="/mappin1.svg"
              />
              <div
                className="relative inline-block min-w-[113px]"
                style={manchesterUK1Style}
              >
                Manchester, UK
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative text-base inline-block min-w-[111px]"
          style={cUConventryStyle}
        >
          CU : Conventry
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px] max-w-full mq450:flex-wrap">
          <div className="relative leading-[34px] inline-block min-w-[81px] mq450:text-lgi mq450:leading-[27px]">
            Status:
          </div>
          <button className="cursor-pointer [border:none] py-1.5 px-3 bg-thistle rounded flex flex-row items-start justify-start whitespace-nowrap hover:bg-plum">
            <div className="relative text-lg leading-[22px] font-gilroy text-blueviolet text-left">
              Conditional offer Recieved
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail1;
