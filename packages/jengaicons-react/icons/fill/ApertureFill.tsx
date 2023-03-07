import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const ApertureFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M7.567 9.314a11.978 11.978 0 0 1 8.996-4.525l2.356 6.598-3.576-.653a.815.815 0 0 0-.026-.005l-7.75-1.415ZM6.373 11.13l6.893 1.259-2.357 2.774-.01.012-5.106 6.011a11.97 11.97 0 0 1-.833-4.402c0-2.044.511-3.97 1.413-5.654Zm4.934 6.655-4.537 5.34a12.005 12.005 0 0 0 8.419 5.53l-3.882-10.87Zm6.05 10.992a11.978 11.978 0 0 0 8.996-4.524L15 22.179l2.357 6.597Zm3.296-7.598 6.894 1.259a11.947 11.947 0 0 0 1.413-5.654c0-1.555-.296-3.04-.834-4.403l-5.089 5.991a.95.95 0 0 1-.044.052l-2.34 2.755Zm-2.272-.415 2.737-3.222-1.422-3.98-4.158-.759-2.736 3.222 1.422 3.98 4.157.76Zm4.232-4.982L18.73 4.913a12.005 12.005 0 0 1 8.418 5.528l-4.536 5.34Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

ApertureFill.displayName = "ApertureFill"

export default ApertureFill
