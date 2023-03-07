import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const LifebuoyFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M24.709 25.446a11.952 11.952 0 0 1-7.749 2.837 11.952 11.952 0 0 1-7.749-2.837l4.272-4.272c.981.698 2.181 1.109 3.477 1.109 1.296 0 2.496-.41 3.477-1.11l4.272 4.273Zm1.414-1.414a11.953 11.953 0 0 0 2.837-7.75c0-2.953-1.067-5.657-2.837-7.748l-4.272 4.272c.698.981 1.109 2.181 1.109 3.477 0 1.296-.41 2.496-1.11 3.476l4.273 4.273ZM24.71 7.12l-4.272 4.272a5.973 5.973 0 0 0-3.477-1.11c-1.296 0-2.496.412-3.477 1.11L9.211 7.12a11.952 11.952 0 0 1 7.749-2.837c2.954 0 5.658 1.067 7.749 2.837ZM7.797 8.534a11.952 11.952 0 0 0-2.837 7.749c0 2.954 1.067 5.658 2.837 7.749l4.272-4.273a5.972 5.972 0 0 1-1.109-3.476c0-1.296.41-2.496 1.11-3.477L7.796 8.534Zm5.163 7.749a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

LifebuoyFill.displayName = "LifebuoyFill"

export default LifebuoyFill
