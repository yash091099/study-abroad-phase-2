import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SocialAuthContainerType = {
  authMethodText?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propLineHeight?: CSSProperties["lineHeight"];
};

const SocialAuthContainer: FunctionComponent<SocialAuthContainerType> = ({
  authMethodText,
  propMinWidth,
  propHeight,
  propLineHeight,
}) => {
  const signInWithStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propMinWidth, propHeight, propLineHeight]);

  return (
    <div className="flex flex-col items-center justify-start gap-[12px] text-left text-xl text-black2 font-gilroy">
      <div
        className="relative inline-block min-w-[103px] mq450:text-base"
        style={signInWithStyle}
      >
        {authMethodText}
      </div>
      <div className="h-11 flex flex-row items-start justify-start py-0 px-0 box-border gap-[15px]">
        <img
          className="h-11 w-[43.4px] relative rounded-md overflow-hidden shrink-0 min-h-[44px]"
          loading="lazy"
          alt=""
          src="/deviconlinkedin.svg"
        />
        <img
          className="h-11 w-[43.4px] relative rounded-md overflow-hidden shrink-0 min-h-[44px]"
          loading="lazy"
          alt=""
          src="/deviconlinkedin-1.svg"
        />
        <img
          className="h-11 w-[43.4px] relative rounded-md overflow-hidden shrink-0 min-h-[44px]"
          loading="lazy"
          alt=""
          src="/deviconfacebook.svg"
        />
      </div>
    </div>
  );
};

export default SocialAuthContainer;
