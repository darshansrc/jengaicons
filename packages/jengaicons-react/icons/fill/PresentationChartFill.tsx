import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const PresentationChartFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M17.96 4.283a1 1 0 0 0-2 0v2.88H6.44a1 1 0 0 0-1 1v14.32a1 1 0 0 0 1 1h5.4l-3.341 4.175a1 1 0 1 0 1.562 1.25l3.84-4.8a.996.996 0 0 0 .219-.625h5.68c0 .22.071.44.219.625l3.84 4.8a1 1 0 1 0 1.562-1.25l-3.34-4.175h5.399a1 1 0 0 0 1-1V8.163a1 1 0 0 0-1-1h-9.52v-2.88Zm-3.84 11.52a1 1 0 1 0-2 0v2.88a1 1 0 1 0 2 0v-2.88Zm2.84-2.92a1 1 0 0 1 1 1v4.8a1 1 0 0 1-2 0v-4.8a1 1 0 0 1 1-1Zm4.84-.92a1 1 0 1 0-2 0v6.72a1 1 0 1 0 2 0v-6.72Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

PresentationChartFill.displayName = "PresentationChartFill"

export default PresentationChartFill
