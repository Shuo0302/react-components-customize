import classNames from 'classnames';
import { FC, forwardRef, Ref, RefObject, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { dotsFlag, DotsType } from '../../types/slider';
import styles from './dots.module.less';

export interface DotsProps {
  type?: DotsType;
  className?: string;
  slideCount: number;
  dotStyle?: string; // dot 的自定义样式
  autoPlaySpeed?: number;
  currentIndex?: number;
  onClick?: (e: any) => void;
  onMouseEnter?: (e: any) => void;
  onMouseOver?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
}

export interface DotsHandle {

}

const Dots = (props: DotsProps, ref: Ref<unknown> | undefined) => {
  const {
    className,
    type = DotsType.POINT,
    slideCount,
    dotStyle,
    currentIndex = 0,
    autoPlaySpeed,
    onClick,
    onMouseEnter,
    onMouseOver,
    onMouseLeave
  } = props;

  const dotsEvents = {
    onClick,
    onMouseEnter,
    onMouseOver,
    onMouseLeave
  };

  const dotRefs: (HTMLDivElement | null)[] = [];

  useEffect(() => {
    // remove onfocus & onblur
    return () => {
      dotRefs.forEach(ref => {
        if (ref) {
          ref.onfocus = null;
          ref.onblur = null;
        }
      });
    }
  }, []);

  // 生成 dot 列表
  const dots: Array<any> = useMemo(() => {
    const _dots: any[] = [];
    const _dotStyle = type === DotsType.STYLED ? dotStyle : null; // 是否需要自定义样式

    for (let i = 0; i < slideCount; i++) {
      _dots.push(
        <div
          key={`${dotsFlag[type]}${i}`}
          ref={ref => dotRefs[i] = ref}
          className={classNames(styles['dot-bar'], {
            [styles['line-bar']]: type === DotsType.LINE,
            [styles['point-bar']]: type === DotsType.POINT
          }, _dotStyle)}
          {...dotsEvents}
        >
          {i + 1}
        </div>
      );
    }

    return _dots;
  }, [slideCount, dotStyle, onClick]);

  const dotAnimate = useMemo(() => {
    return 
  }, []);

  const next = useCallback(() => {
    
  }, []);

  useImperativeHandle(ref, (): DotsHandle => ({
    
  }));

  return <div className={classNames(styles['dots-container'], className)}>{dots.map(dot => dot)}</div>;
};

export default forwardRef(Dots);
