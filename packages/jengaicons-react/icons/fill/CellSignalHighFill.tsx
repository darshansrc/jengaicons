import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const CellSignalHighFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M23.96 9.283 5.814 27.429a.5.5 0 0 0 .353.854H23.96v-19Zm2 19h2.5a.5.5 0 0 0 .5-.5V5.49a.5.5 0 0 0-.854-.354L25.96 7.283v21Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

CellSignalHighFill.displayName = "CellSignalHighFill"

export default CellSignalHighFill
