import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const StarHalfFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M17.01 4.917V22.17'
      />
      <path
        fill={color || colorCtx || "#000000"}
        d='m9.525 27.648 7.385-5.366V4.917L12.09 13.6H4.96l7.386 5.366-2.821 8.682Z'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m9.525 27.648 7.385-5.366V4.917L12.09 13.6H4.96l7.386 5.366-2.821 8.682Z'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeDasharray='6 6'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m17.01 4.917 4.82 8.683h7.13l-7.386 5.366 2.821 8.682-7.385-5.366'
      />

      {children || childrenCtx}
    </svg>
  )
})

StarHalfFill.displayName = "StarHalfFill"

export default StarHalfFill
