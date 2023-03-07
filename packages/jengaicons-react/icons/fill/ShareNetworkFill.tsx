import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const ShareNetworkFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || colorCtx || "#000000"}
          fillRule='evenodd'
          d='M27.114 7.975a3.692 3.692 0 0 1-6.149 2.757.993.993 0 0 1-.109.08l-6.712 4.316a1.02 1.02 0 0 1-.117.065 3.69 3.69 0 0 1 0 2.18c.04.019.08.04.117.065l6.712 4.315c.039.025.075.052.11.08a3.692 3.692 0 1 1-1.073 1.667c-.04-.018-.08-.04-.118-.065l-6.712-4.315a1.007 1.007 0 0 1-.109-.08 3.692 3.692 0 1 1 0-5.514 1.02 1.02 0 0 1 .109-.08l6.712-4.316c.038-.024.078-.046.118-.065a3.692 3.692 0 1 1 7.221-1.09Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

ShareNetworkFill.displayName = "ShareNetworkFill"

export default ShareNetworkFill
