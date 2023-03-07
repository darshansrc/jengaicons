import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const FileDocFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M6.108 18.367h21.703a1 1 0 0 0 1-1v-6.68a1 1 0 0 0-.29-.705L22.125 3.56a1 1 0 0 0-.708-.294H6.108a1 1 0 0 0-1 1v13.1a1 1 0 0 0 1 1Zm15.793-8.66V4.483l5.727 5.723h-5.227a.5.5 0 0 1-.5-.5ZM7.138 20.824a4.229 4.229 0 0 1 0 8.458H5.724a1 1 0 0 1-1-1v-6.458a1 1 0 0 1 1-1h1.414Zm2.23 4.23c0-1.232-.999-2.23-2.23-2.23h-.414v4.458h.414c1.231 0 2.23-.998 2.23-2.229Zm6.101.001c0-1.355.94-2.226 1.836-2.226.897 0 1.836.871 1.836 2.226s-.94 2.227-1.836 2.227c-.896 0-1.836-.872-1.836-2.227Zm1.836-4.226c-2.236 0-3.836 2.017-3.836 4.226 0 2.21 1.6 4.227 3.836 4.227 2.236 0 3.836-2.018 3.836-4.227 0-2.209-1.6-4.226-3.836-4.226Zm5.248 4.224a4.229 4.229 0 0 1 4.229-4.229h1.414a1 1 0 1 1 0 2h-1.415a2.229 2.229 0 0 0 0 4.458h1.415a1 1 0 1 1 0 2h-1.415a4.229 4.229 0 0 1-4.228-4.229Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

FileDocFill.displayName = "FileDocFill"

export default FileDocFill
