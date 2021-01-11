import React, { useState } from 'react';
import './Bubble.scss';

interface Props {
  size: string;
  text: string | Element;
}

const Bubble = (props: Props) => {
  const [shouldBeginRendering, beginRendering] = useState(false);
  const [shouldRecalculateRandoms, recalculateRandoms] = useState(false);

  const { size, text } = props;

  const lightenDarkenColor = (colorCode: string, amount: number) => {
    let usePound = false;
    let modifiedColorCode = colorCode;

    if (modifiedColorCode[0] === '#') {
      modifiedColorCode = modifiedColorCode.slice(1);
      usePound = true;
    }

    const num = parseInt(modifiedColorCode, 16);
    // eslint-disable-next-line no-bitwise
    let red = (num >> 16) + amount;

    if (red > 255) {
      red = 255;
    } else if (red < 0) {
      red = 0;
    }

    // eslint-disable-next-line no-bitwise
    let blue = ((num >> 8) & 0x00ff) + amount;

    if (blue > 255) {
      blue = 255;
    } else if (blue < 0) {
      blue = 0;
    }

    // eslint-disable-next-line no-bitwise
    let green = (num & 0x0000ff) + amount;

    if (green > 255) {
      green = 255;
    } else if (green < 0) {
      green = 0;
    }

    return (
      // eslint-disable-next-line no-bitwise
      (usePound ? '#' : '') + (green | (blue << 8) | (red << 16)).toString(16)
    );
  };

  const determinePath = () => {
    const randInt = Math.floor(Math.random() * 3) + 1;

    switch (randInt) {
      case 1:
        return 'Bubble Bubble__right';
      case 2:
        return 'Bubble Bubble__left';
      case 3:
        return 'Bubble Bubble__pulsing';
      default:
        return 'Bubble Bubble__pulsing';
    }
  };

  const chooseRandomColor = () => {
    const red = '#ff5c57';
    const green = '#5af78e';
    const yellow = '#f3f99d';
    const magenta = '#ff6ac1';
    const cyan = '#9aedfe';
    const blue = '#57c7ff';
    const randInt = Math.floor(Math.random() * 5) + 1;

    switch (randInt) {
      case 1:
        return red;
      case 2:
        return green;
      case 3:
        return yellow;
      case 4:
        return magenta;
      case 5:
        return cyan;
      default:
        return blue;
    }
  };

  const tick = () => {
    recalculateRandoms(!shouldRecalculateRandoms);
  };

  const timerStarted = () => {
    beginRendering(true);
  };

  const color = chooseRandomColor();

  const bubbleStyle = {
    background: `radial-gradient(circle at 50% 55%, ${lightenDarkenColor(
      color,
      40
    )}E6, ${lightenDarkenColor(color, 30)}E6 40%, ${lightenDarkenColor(
      color,
      20
    )}CC 60%, ${color}66)`,
    height: `${size}rem`,
    width: `${size}rem`,
    left: `${Math.floor(Math.random() * 100)}%`,
    top: `${80}vh`,
  };

  setTimeout(() => timerStarted(), Math.floor(Math.random() * 20000));

  if (shouldBeginRendering) {
    setTimeout(() => tick(), 20000);

    return (
      <div
        className={determinePath()}
        data-test-name="Bubble"
        style={bubbleStyle}
      >
        <div className="Bubble__name">{text}</div>
      </div>
    );
  }
  return null;
};

export default Bubble;
