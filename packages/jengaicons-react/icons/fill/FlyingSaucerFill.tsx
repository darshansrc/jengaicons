import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const FlyingSaucerFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext)

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 32 32'
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='m21.331 22.47.418 2.528M16.96 22.823v3.428M12.589 22.47l-.418 2.528M22.21 9.623c3.996.836 6.75 2.593 6.75 4.628 0 2.84-5.368 5.143-12 5.143s-12-2.303-12-5.143c0-2.035 2.775-3.803 6.793-4.628'
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule='evenodd'
          d='M22.046 13.395a.468.468 0 0 0 .303-.34 5.555 5.555 0 1 0-10.856-.002c.034.16.15.286.303.34 3.242 1.15 6.763 1.248 10.25.002Z'
          clipRule='evenodd'
        />
        <path
          fill={color || colorCtx || "#000000"}
          d='m11.796 13.393-.334.943.334-.943Zm10.553-.337-.978-.213.978.213Zm-.303.339-.337-.942.337.942Zm-.57-1.526c0 .335-.037.661-.105.974l1.955.426c.098-.452.15-.92.15-1.4h-2ZM16.92 7.314a4.555 4.555 0 0 1 4.555 4.555h2a6.555 6.555 0 0 0-6.555-6.555v2Zm-4.555 4.555a4.555 4.555 0 0 1 4.555-4.555v-2a6.555 6.555 0 0 0-6.555 6.555h2Zm.104.973a4.579 4.579 0 0 1-.104-.973h-2c0 .479.052.947.15 1.398l1.954-.425Zm-1.008 1.494c3.447 1.223 7.205 1.329 10.92 0l-.673-1.883c-3.259 1.165-6.542 1.075-9.578-.002l-.669 1.885Zm-.946-1.07c.111.514.484.906.946 1.07l.669-1.885a.532.532 0 0 1 .34.391l-1.955.425Zm10.855-.423a.532.532 0 0 1 .338-.39l.674 1.883c.46-.164.831-.555.943-1.067l-1.955-.426Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

FlyingSaucerFill.displayName = "FlyingSaucerFill"

export default FlyingSaucerFill
