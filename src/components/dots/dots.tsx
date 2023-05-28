import classNames from 'classnames';
import { FC, useMemo } from 'react';
import { DotsType } from '../../types/slider';
import styles from './dots.module.less';

export interface DotsProps {
  type?: DotsType;
  className?: string;
  slideCount: number;
  dotStyle?: string; // dot 的自定义样式
  onClick?: (e) => void;
  onMouseEnter?: (e) => void;
  onMouseOver?: (e) => void;
  onMouseLeave?: (e) => void;
}

const Dots: FC<DotsProps> = props => {
  const {
    className,
    type = DotsType.POINT,
    slideCount,
    dotStyle,
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

  // 生成 dot 列表
  const dots: Array<any> = useMemo(() => {
    let _dots: any[] = [];

    // 直线型
    if (type === DotsType.LINE) {
      for (let i = 0; i < slideCount; i++) {
        _dots.push(
          <div key={`line-dot${i}`} className={styles['line-bar']} {...dotsEvents}>
            {i + 1}
          </div>
        );
      }
    }
    // 点型
    if (type === DotsType.POINT) {
      for (let i = 0; i < slideCount; i++) {
        _dots.push(
          <div key={`pont-dot${i}`} className={styles['point-bar']} {...dotsEvents}>
            {i + 1}
          </div>
        );
      }
    }
    // 自定义型
    if (type === DotsType.STYLED) {
      for (let i = 0; i < slideCount; i++) {
        _dots.push(
          <div key={`styled-dot${i}`} className={dotStyle} {...dotsEvents}>
            {i + 1}
          </div>
        );
      }
    }
    return _dots;
  }, [slideCount, dotStyle, onClick]);

  return <div className={classNames(styles['dots-container'], className)}>{dots.map(dot => dot)}</div>;
};

export default Dots;
