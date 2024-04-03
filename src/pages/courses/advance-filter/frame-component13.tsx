import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

export type FrameComponent13Type = {
  studyArea?: string;

  /** Style props */
  propLineHeight?: CSSProperties["lineHeight"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent13: FunctionComponent<FrameComponent13Type> = ({
  studyArea,
  propLineHeight,
  propMinWidth,
}) => {
  const studyAreaStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      minWidth: propMinWidth,
    };
  }, [propLineHeight, propMinWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-left text-9xl text-grey-1 font-gilroy">
      <div
        className="h-[34px] relative tracking-[-0.2px] leading-[42px] inline-block mq450:text-3xl"
        style={studyAreaStyle}
      >
        {studyArea}
      </div>
      <Form.Select className="self-stretch font-gilroy text-5xl text-grey-1" >
        <option disabled selected >Select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
    </div>
  );
};

export default FrameComponent13;
