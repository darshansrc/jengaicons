import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const ChatTeardropDots = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>)

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          d='M16 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM22 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M15.985 28C22.62 28 28 22.627 28 16S22.62 4 15.985 4a12.004 12.004 0 0 0-9.746 4.98A11.927 11.927 0 0 0 4 15.143V28h11.985Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

ChatTeardropDots.displayName = "ChatTeardropDots"

export default ChatTeardropDots
