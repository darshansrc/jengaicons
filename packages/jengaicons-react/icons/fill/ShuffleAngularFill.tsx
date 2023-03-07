import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const ShuffleAngularFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M26.067 4.853a1 1 0 1 0-1.414 1.414l2.521 2.522h-4.372a1 1 0 0 0-.807.41l-2.62 3.592a1 1 0 0 0 1.616 1.179l2.32-3.181h3.891l-2.55 2.549a1 1 0 1 0 1.415 1.414l4.243-4.242a.997.997 0 0 0 .293-.712v-.01a.998.998 0 0 0-.4-.799l-4.136-4.136Zm0 14.367a1 1 0 0 0-1.414 1.414l2.535 2.536h-3.877L13.13 9.213a1 1 0 0 0-.808-.41h-6.72a1 1 0 1 0 0 2h6.211l10.18 13.956a1 1 0 0 0 .808.41h4.386l-2.535 2.536a1 1 0 1 0 1.414 1.415l4.243-4.243a.998.998 0 0 0-.008-1.422l-4.235-4.235ZM5.603 25.156a1 1 0 1 1 0-2h6.211l2.32-3.181a1 1 0 1 1 1.617 1.178l-2.62 3.592a1 1 0 0 1-.808.411h-6.72Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

ShuffleAngularFill.displayName = "ShuffleAngularFill"

export default ShuffleAngularFill
