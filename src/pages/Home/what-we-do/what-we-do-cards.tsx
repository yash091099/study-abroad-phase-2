import { FunctionComponent } from 'react';
import './FrameComponent2.css';

type FrameComponent2Props = {
  prop: string;
  sOPWriting: string;
  guidance: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Props> = ({
  prop,
  sOPWriting,
  guidance,
}) => {
  return (
    <div className="frame-component">
      <img
        className="frame-component-image"
        src={prop}
        alt={`${sOPWriting} ${guidance}`}
      />
      <h3 className="frame-component-title">{sOPWriting}</h3>
      <p className="frame-component-guidance">{guidance}</p>
      <button className="frame-component-button">Start now <img src='/chevronsright1.svg' alt="Right Arrow"/></button>
    </div>
  );
};

export default FrameComponent2;
