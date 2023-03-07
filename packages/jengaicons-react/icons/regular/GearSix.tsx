import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const GearSix = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z'
        />
        <path
          fill={color || colorCtx || "#000000"}
          d='m19.85 27.634-.866.5a1 1 0 0 0 1.366.366l-.5-.866Zm-1.497-2.593.866-.5a1 1 0 0 0-1.117-.468l.251.968Zm5.797.11.5.866a1 1 0 0 0 .366-1.366l-.866.5Zm-1.498-2.594-.712-.702a1 1 0 0 0-.154 1.202l.866-.5Zm2.355-4.074v-1a1 1 0 0 0-.965.735l.965.265Zm2.993 0v1a1 1 0 0 0 1-1h-1Zm0-4.966h1a1 1 0 0 0-1-1v1Zm-2.993 0-.964.266a1 1 0 0 0 .964.734v-1Zm-2.355-4.074-.866-.5a1 1 0 0 0 .154 1.202l.712-.702ZM24.15 6.85l.866.5a1 1 0 0 0-.366-1.366l-.5.866Zm-4.3-2.483.5-.866a1 1 0 0 0-1.366.366l.866.5ZM18.353 6.96l-.251.968a1 1 0 0 0 1.117-.468l-.866-.5Zm-4.706 0-.866.5a1 1 0 0 0 1.117.468l-.251-.968ZM12.15 4.366l.866-.5A1 1 0 0 0 11.65 3.5l.5.866ZM7.85 6.85l-.5-.866a1 1 0 0 0-.366 1.366l.866-.5Zm1.498 2.594.712.702a1 1 0 0 0 .154-1.202l-.866.5Zm-2.355 4.074v1a1 1 0 0 0 .965-.734l-.965-.266Zm-2.993 0v-1a1 1 0 0 0-1 1h1Zm0 4.966H3a1 1 0 0 0 1 1v-1Zm2.993 0 .965-.265a1 1 0 0 0-.965-.735v1Zm2.355 4.073.866.5a1 1 0 0 0-.154-1.201l-.712.701ZM7.85 25.151l-.866-.5a1 1 0 0 0 .366 1.366l.5-.866Zm4.3 2.483-.5.866a1 1 0 0 0 1.366-.366l-.866-.5Zm1.497-2.593.251-.968a1 1 0 0 0-1.117.468l.866.5Zm7.069 2.093-1.497-2.593-1.732 1 1.497 2.593 1.732-1Zm2.934-2.85-4.3 2.484 1 1.732 4.3-2.483-1-1.732Zm-1.864-1.227 1.498 2.594 1.732-1-1.498-2.594-1.732 1Zm2.256-4.84a8.33 8.33 0 0 1-2.102 3.638l1.424 1.404a10.33 10.33 0 0 0 2.607-4.511l-1.928-.53ZM28 17.483h-2.993v2H28v-2Zm-1-3.966v4.966h2v-4.966h-2Zm-1.993 1H28v-2h-2.993v2Zm-3.067-4.372c.986 1 1.72 2.247 2.103 3.638l1.928-.53a10.33 10.33 0 0 0-2.607-4.512l-1.424 1.404Zm1.344-3.796-1.498 2.594 1.732 1 1.498-2.594-1.732-1ZM19.35 5.232l4.3 2.483 1-1.732-4.3-2.483-1 1.732Zm-.13 2.227 1.496-2.593-1.732-1-1.497 2.593 1.732 1Zm-3.22.2c.727 0 1.432.094 2.102.268l.502-1.936A10.356 10.356 0 0 0 16 5.66v2Zm-2.102.268A8.357 8.357 0 0 1 16 7.66v-2c-.898 0-1.771.114-2.604.33l.502 1.937Zm-2.614-3.06 1.497 2.592 1.732-1-1.497-2.593-1.732 1ZM8.35 7.714l4.3-2.483-1-1.732-4.3 2.483 1 1.732Zm1.864 1.228L8.716 6.35l-1.732 1 1.498 2.594 1.732-1Zm-2.256 4.84a8.33 8.33 0 0 1 2.102-3.638L8.636 8.741a10.33 10.33 0 0 0-2.607 4.511l1.929.53ZM4 14.517h2.993v-2H4v2Zm1 3.966v-4.966H3v4.966h2Zm1.993-1H4v2h2.993v-2Zm3.067 4.372a8.33 8.33 0 0 1-2.102-3.637l-1.929.53a10.33 10.33 0 0 0 2.607 4.51l1.424-1.403ZM8.716 25.65l1.498-2.595-1.732-1-1.498 2.595 1.732 1Zm3.934 1.117-4.3-2.483-1 1.732 4.3 2.483 1-1.732Zm.13-2.227-1.496 2.593 1.732 1 1.497-2.593-1.732-1Zm3.22-.2a8.353 8.353 0 0 1-2.102-.268l-.502 1.936c.833.216 1.706.331 2.604.331v-2Zm2.102-.268A8.356 8.356 0 0 1 16 24.34v2c.898 0 1.771-.115 2.604-.33l-.502-1.937Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

GearSix.displayName = "GearSix"

export default GearSix
