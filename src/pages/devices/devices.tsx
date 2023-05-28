import { DotsType } from '@/types/slider';
import classNames from 'classnames';
import { FC } from 'react';
import RotoWheel from '../../components/roto-wheel/roto-wheel';
import styles from './devices.module.less';

interface DevicesProps {}

const Devices: FC<DevicesProps> = () => {
  const xPhone = (
    <div className={classNames(styles['device-container'], styles['x-phone-bg'])}>
      <div className={styles['device-header']}>
        <p className={styles['device-title']}>xPhone</p>
        <p className={styles['device-desc']}>Lots to love. Less to spend.</p>
        <p className={styles['device-desc']}>Starting at $399.</p>
      </div>
      <div className={styles['x-phone-img']}></div>
    </div>
  );

  const tablet = (
    <div className={classNames(styles['device-container'], styles['tablet-bg'])}>
      <div className={styles['device-header']}>
        <p className={styles['device-title']}>xPhone</p>
        <p className={styles['device-desc']}>Lots to love. Less to spend.</p>
        <p className={styles['device-desc']}>Starting at $399.</p>
      </div>
      <div className={styles['tablet-img']}></div>
    </div>
  );

  const airPods = (
    <div className={classNames(styles['device-container'], styles['air-pods-bg'])}>
      <div className={styles['device-header']}>
        <p className={styles['device-title']}>xPhone</p>
        <p className={styles['device-desc']}>Lots to love. Less to spend.</p>
        <p className={styles['device-desc']}>Starting at $399.</p>
      </div>
      <div className={styles['air-pods-img']}></div>
    </div>
  );

  return (
    <div className={styles['devices-container']}>
      <RotoWheel
        className={styles['roto-wheel-container']}
        autoplay={true}
        pauseWhenHover={true}
        dots={{ className: styles['dots-container'] }}
        dotsType={DotsType.LINE}
      >
        {xPhone}
        {tablet}
        {airPods}
      </RotoWheel>
    </div>
  );
};

export default Devices;
