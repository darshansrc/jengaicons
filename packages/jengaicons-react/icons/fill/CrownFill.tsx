import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const CrownFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M9.02 25.298a.509.509 0 0 1-.625-.367l-3.17-12.935a.5.5 0 0 1 .718-.562l6.52 3.435a.5.5 0 0 0 .674-.207l3.57-6.708a.5.5 0 0 1 .881-.003l3.615 6.704a.5.5 0 0 0 .684.2L28 11.45a.5.5 0 0 1 .732.54l-2.737 12.925a.51.51 0 0 1-.622.386c-3.158-.775-10.022-1.672-16.353-.004Zm4.826-3.086a31.35 31.35 0 0 1 6.561 0 1 1 0 1 0 .21-1.99 33.355 33.355 0 0 0-6.98 0 1 1 0 1 0 .209 1.99Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

CrownFill.displayName = "CrownFill"

export default CrownFill
