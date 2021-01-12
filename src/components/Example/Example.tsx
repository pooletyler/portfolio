import React from 'react';
import './Example.scss';

interface Props {
  title: string;
  src: string;
}

const Example = (props: Props) => {
  const { title, src } = props;

  return (
    <div className="Example">
      <iframe
        src={src}
        title={title}
        width="100%"
        height="100%"
        scrolling="yes"
        className="Example__iframe"
      />
    </div>
  );
};

export default Example;
