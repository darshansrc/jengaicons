import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const FileCloudFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M6.96 4.283a1 1 0 0 1 1-1h13.021a1 1 0 0 1 .709.294l6.979 7.009a1 1 0 0 1 .291.705v16.992a1 1 0 0 1-1 1h-5.002a1 1 0 1 1 0-2h4.002v-15.06h-5.91a1 1 0 0 1-1-1v-5.94H8.96v10.982a1 1 0 1 1-2 0V4.283Zm15.09 2.54v3.4h3.402l-3.403-3.4ZM11.586 21.296a4.3 4.3 0 0 1 8.373 1.371c0 2.45-1.998 4.617-4.298 4.617H9.676a2.716 2.716 0 0 1-.26-5.42c-.034.263-.052.531-.052.803a1 1 0 1 0 2 0c0-.48.079-.941.223-1.37Zm-1.91-1.445c.115 0 .23.005.344.013a6.298 6.298 0 0 1 11.939 2.803c0 3.402-2.746 6.617-6.298 6.617H9.676a4.716 4.716 0 1 1 0-9.433Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

FileCloudFill.displayName = "FileCloudFill"

export default FileCloudFill
