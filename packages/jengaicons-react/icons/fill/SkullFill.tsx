import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const SkullFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M23.176 24.198a.514.514 0 0 0-.223.42v3.165a.5.5 0 0 1-.5.5H19.86v-4.168a1 1 0 0 0-2 0v4.168h-1.8v-4.168a1 1 0 0 0-2 0v4.168h-2.407a.5.5 0 0 1-.5-.5v-3.038a.514.514 0 0 0-.232-.427 10.917 10.917 0 0 1-4.888-9.108c0-6.035 4.892-10.927 10.927-10.927 6.035 0 10.927 4.892 10.927 10.927 0 3.726-1.864 7.016-4.71 8.988Zm-10.492-8.585a1.375 1.375 0 1 0 0 2.751 1.375 1.375 0 0 0 0-2.75ZM9.31 16.99a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0Zm11.927-1.376a1.375 1.375 0 1 0 0 2.751 1.375 1.375 0 0 0 0-2.75ZM17.86 16.99a3.375 3.375 0 1 1 6.751 0 3.375 3.375 0 0 1-6.75 0Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

SkullFill.displayName = "SkullFill"

export default SkullFill
