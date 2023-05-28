import classNames from 'classnames';
import React, { FC, useMemo } from 'react';
import Dots, { DotsProps } from '../dots/dots';
import { SliderProps } from '../slider/slider';
import styles from './roto-wheel.module.less';

interface RotoWheelProps {
  pauseWhenHover?: boolean;
  children?: Array<React.ReactElement>;
}

const RotoWheel: FC<Omit<SliderProps & DotsProps & RotoWheelProps, 'type' | 'slideCount'>> = props => {
  const { className, pauseWhenHover = true, dots, dotsType, dotStyle, children } = props;

  const dotsEle = useMemo(() => {
    const slideCount = React.Children.count(children);
    console.log(slideCount);

    return typeof dots === 'object' ? (
      <Dots type={dotsType} slideCount={slideCount} className={dots.className} dotStyle={dotStyle} />
    ) : dots === true ? (
      <Dots type={dotsType} slideCount={slideCount} dotStyle={dotStyle} />
    ) : null;
  }, [children, dotsType, dots, dotStyle]);

  return (
    <div className={classNames(styles['roto-wheel-container'], className)}>
      {children}
      {dotsEle}
    </div>
  );
};

export default RotoWheel;
