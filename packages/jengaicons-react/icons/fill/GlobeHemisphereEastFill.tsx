import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const GlobeHemisphereEastFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M16.96 4.283c2.378 0 4.595.692 6.46 1.886v2.093l-3.204 3.882-4.517.61-3.813-2.17a1 1 0 0 0-1.326.315l-3.682 5.523a1 1 0 0 0-.168.555v5.497l-.024.013a11.944 11.944 0 0 1-1.726-6.204c0-6.628 5.372-12 12-12Zm0 24a11.972 11.972 0 0 1-9.089-4.165l.32-.175a1 1 0 0 0 .519-.877V17.28l2.997-4.496 3.297 1.876a1 1 0 0 0 .629.122l5.24-.709a1 1 0 0 0 .637-.354l3.682-4.46a1 1 0 0 0 .228-.637v-.85a11.963 11.963 0 0 1 3.54 8.51c0 1.042-.133 2.051-.382 3.014l-2.035-2.035a1 1 0 0 0-1.065-.226l-6.09 2.336a1 1 0 0 0-.637.84l-.354 3.753a1 1 0 0 0 .727 1.057l4.067 1.133.237.238a11.944 11.944 0 0 1-6.468 1.89Zm8.07-3.118a12.036 12.036 0 0 0 2.799-3.79l-2.24-2.24-4.905 1.881-.217 2.303 3.513.98a1 1 0 0 1 .439.255l.61.61Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

GlobeHemisphereEastFill.displayName = "GlobeHemisphereEastFill"

export default GlobeHemisphereEastFill
