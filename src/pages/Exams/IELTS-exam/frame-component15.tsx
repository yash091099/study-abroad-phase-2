import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent15Type = {
  vector1?: string;
  prop?: string;
  materialSymbolsadsClick?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent15: FunctionComponent<FrameComponent15Type> = ({
  vector1,
  prop,
  materialSymbolsadsClick,
  propAlignSelf,
  propPadding,
  propWidth,
}) => {
  const frameDiv8Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  return (
    <div
      className="self-stretch h-[169px] flex flex-row items-start justify-center py-0 pr-0 pl-[23px] box-border text-left text-53xl text-white font-gilroy"
      style={frameDiv8Style}
    >
      <div className="self-stretch w-[133.5px] flex flex-row items-start justify-start pt-[21px] px-8 pb-6 box-border relative z-[1]">
        <img
          className="h-[23px] w-[22.5px] absolute !m-[0] top-[0px] right-[0px]"
          alt=""
          src="/vector-29.svg"
        />
        <img
          className="h-full w-[111px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full"
          alt=""
          src={vector1}
        />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="h-[76px] flex flex-row items-start justify-start py-0 pr-[5px] pl-1 box-border">
            <div className="h-[89px] relative tracking-[0.03em] uppercase inline-block min-w-[39px] shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-24xl mq800:text-39xl">
              {prop}
            </div>
          </div>
          <img
            className="w-12 h-12 relative overflow-hidden shrink-0 [debug_commit:f6aba90] z-[1]"
            loading="lazy"
            alt=""
            src={materialSymbolsadsClick}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent15;
