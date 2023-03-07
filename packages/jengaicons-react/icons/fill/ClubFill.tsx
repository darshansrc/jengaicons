import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const ClubFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='m13.426 27.663 1.711-5.354a5.672 5.672 0 1 1-4.319-9.35c.486 0 .952.005 1.402.12a5.672 5.672 0 1 1 9.472 0c.445-.113.928-.12 1.41-.12a5.672 5.672 0 1 1-4.197 9.488l1.595 5.224a.473.473 0 0 1-.452.612h-6.173a.473.473 0 0 1-.45-.62Z'
      />

      {children || childrenCtx}
    </svg>
  )
})

ClubFill.displayName = "ClubFill"

export default ClubFill
