import { DotsType, PauseType } from '@/types/slider';
import classNames from 'classnames';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Dots, { DotsProps } from '../dots/dots';
import styles from './roto-wheel.module.less';

interface RotoWheelProps {
  autoplay?: boolean;
  autoPlaySpeed?: number;
  pauseWhenHover?: boolean;
  dots?: boolean | { className: string };
  dotsType?: DotsType;
  children?: Array<React.ReactElement>;
}

export interface RotoWheelState {
  animating: boolean; // 处于切换动画中
  autoPlaying: boolean; // 自动播放中
  currentIndex: number; // 当前页面索引
  dragging: boolean; // 手动拖拽中
  swiping: boolean; // 状态，可切换
  sliderCount: number; // 页面数
}

const initialState: RotoWheelState = {
  animating: false,
  autoPlaying: false,
  currentIndex: 0,
  dragging: false,
  sliderCount: 0,
  swiping: false
};

const RotoWheel: FC<Omit<DotsProps & RotoWheelProps, 'type' | 'slideCount'>> = props => {
  const {
    className,
    autoplay = false,
    autoPlaySpeed = 0,
    pauseWhenHover = true,
    dots,
    dotsType,
    dotStyle,
    children
  } = props;
  const [state, setState] = useState<RotoWheelState>(initialState); // 整合 state 属性，方便管理
  const [autoPlayTimer, setAutoPlayTimer] = useState<NodeJS.Timer>();
  const dotsRef = useRef(null);

  // 初始化
  useEffect(() => {
    // 计算 sliderCount
    const sliderCount = React.Children.count(children);
    setState({ ...state, sliderCount });
  }, []);

  // next
  const next = useCallback(() => {
    () => {
      const currentIndex = state.currentIndex;
      const nextIndex = (currentIndex + 1) % state.sliderCount;

      dotsRef.current?.next();
    };
  }, [state.sliderCount]);

  // dot focus
  const onDotFocus = () => autoplay && pause();

  // dot blur
  const onDotBlur = () => autoplay && pause();

  const autoPlay = (playType: string) => {
    if (!autoPlay) {
      return;
    }
    // 重新生成计时器
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
    }
    setAutoPlayTimer(setInterval(() => {next()}, autoPlaySpeed));
  };

  const pause = (pauseType: PauseType) => {
    // hover 时暂停，需要模拟暂停，blur 触发时延续动作
    if (pauseType === PauseType.HOVER) {
    } else if (pauseType === PauseType.CLICK) {
      // click 时暂停，切换到当前 dot ，blur 触发时重新运行
    }
  };

  // 生成 Dots 节点
  const dotsEle = useMemo(() => {
    const slideCount = state.sliderCount;
    console.log(slideCount);

    return typeof dots === 'object' ? (
      <Dots ref={dotsRef} type={dotsType} slideCount={slideCount} className={dots.className} dotStyle={dotStyle} />
    ) : dots === true ? (
      <Dots type={dotsType} slideCount={slideCount} dotStyle={dotStyle} />
    ) : null;
  }, [children, dotsType, dots, dotStyle, state.sliderCount]);

  return (
    <div className={classNames(styles['roto-wheel-container'], className)}>
      {children}
      {dotsEle}
    </div>
  );
};

export default RotoWheel;
