import type { SVGProps } from "react"

export interface JengaIconCommonProps {
  /** Set the size of the Svg in px*/
  size?: number | string

  /** Change the color of Icon */
  color?: string

  /** Alternate text */
  alt?: string

  /** Mirror the icon for RTL support */
  mirrored?: boolean

  /** Change the style prop of svg element */
  style?: SVGProps<SVGSVGElement>["style"]

  children?: SVGProps<SVGSVGElement>["children"]
}

export interface JengaIconRegularProps extends JengaIconCommonProps {
  /**
   * Sets the thinkness / `strokeWidth` of the Icon \
   * Only applies to `Regular` icons
   * */
  weight?: SVGProps<SVGSVGElement>["strokeWidth"]
}

export interface JengaIconFillProps extends JengaIconCommonProps {
  // currently no, special props for Fill icons but will add in future
}

export type JengaIconProps = JengaIconRegularProps | JengaIconFillProps
export type TJengaIconContext = Partial<JengaIconProps | JengaIconRegularProps>