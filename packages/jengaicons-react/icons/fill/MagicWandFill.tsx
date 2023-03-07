import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const MagicWandFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M23.842 4.717a1 1 0 0 0-1.414 0L4.496 22.65a1 1 0 0 0 0 1.414l3.882 3.882a1 1 0 0 0 1.414 0l17.932-17.932a1 1 0 0 0 0-1.414l-3.882-3.883Zm-5.313 6.728 4.606-4.606 2.468 2.468-4.706 4.705-2.368-2.567ZM10.96 5.129a1 1 0 0 1 1 1v1.308h1.308a1 1 0 1 1 0 2H11.96v1.308a1 1 0 0 1-2 0V9.437H8.652a1 1 0 0 1 0-2H9.96V6.129a1 1 0 0 1 1-1Zm16.23 11.154a1 1 0 1 0-2 0v1.77h-1.769a1 1 0 0 0 0 2h1.77v1.768a1 1 0 1 0 2 0v-1.769h1.769a1 1 0 1 0 0-2h-1.77v-1.769Zm-6.538 5.461a1 1 0 0 1 1 1v.847h.846a1 1 0 0 1 0 2h-.846v.846a1 1 0 1 1-2 0v-.846h-.846a1 1 0 1 1 0-2h.846v-.847a1 1 0 0 1 1-1Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

MagicWandFill.displayName = "MagicWandFill"

export default MagicWandFill
