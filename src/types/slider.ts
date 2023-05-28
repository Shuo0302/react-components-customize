export enum DotsType {
  LINE = "LINE", // 线型
  POINT = "POINT", // 点型
  STYLED = 'STYLED', // 自定义
}

export const dotsFlag = {
  [DotsType.LINE]: 'line-dot',
  [DotsType.POINT]: 'point-dot',
  [DotsType.STYLED]: 'styled-dot',
}

export enum PlayType {

}

export enum PauseType {
  HOVER = 'HOVER',
  CLICK = 'CLICK',
}
