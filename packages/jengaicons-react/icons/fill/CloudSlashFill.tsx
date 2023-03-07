import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const CloudSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M7.851 4.974a1 1 0 0 1 1.41.121L27.83 27.148a1 1 0 0 1-1.53 1.288l-1.862-2.21H10.942a7.003 7.003 0 1 1 1.3-13.883l.19-.376-4.701-5.584a1 1 0 0 1 .12-1.409Zm3.523 9.267a5.007 5.007 0 0 0-3.24.848 5 5 0 0 0 2.81 9.137h11.74l-8.879-10.533a21.28 21.28 0 0 0-.42.916c-.369.863-.585 1.586-.585 2.043a1 1 0 0 1-2 0c0-.762.266-1.632.574-2.411Zm4.047-5.91a9.761 9.761 0 0 1 12.491 14.5c-.373.468-1.074.452-1.463-.001L15.213 9.742c-.381-.444-.302-1.124.208-1.412Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

CloudSlashFill.displayName = "CloudSlashFill"

export default CloudSlashFill
