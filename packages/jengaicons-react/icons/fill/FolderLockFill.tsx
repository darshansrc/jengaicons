import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const FolderLockFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M4.96 5.283a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h9.99a1 1 0 0 0 0-2H5.96v-14h22v2.016a1 1 0 1 0 2 0v-3.016a1 1 0 0 0-1-1H17.374l-3.707-3.707a1 1 0 0 0-.707-.293h-8Zm9.586 4-2-2H5.96v2h8.586Zm3.852 11.545a1 1 0 0 1 1-1h1.562v-.545a3.5 3.5 0 1 1 7 0v.545h1.562a1 1 0 0 1 1 1v5.41a1 1 0 0 1-1 1H19.398a1 1 0 0 1-1-1v-5.41Zm4.562-1.545a1.5 1.5 0 1 1 3 0v.5h-3v-.5Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

FolderLockFill.displayName = "FolderLockFill"

export default FolderLockFill
