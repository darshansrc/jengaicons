import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const DockerlogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M15.717 7.654h2.486v2.25h-2.486v-2.25Zm-3.449 2.723H9.784v2.25h2.486v-2.25ZM9.31 13.093H6.823v2.25h2.486v-2.25Zm2.96 0H9.782v2.25h2.486v-2.25Zm.473 0h2.486v2.25h-2.486v-2.25Zm5.446 0h-2.486v2.25h2.486v-2.25Zm.473 0h2.486v2.25h-2.486v-2.25Zm-5.919-2.716h2.486v2.25h-2.486v-2.25Zm5.446 0h-2.486v2.25h2.486v-2.25Zm7.517 3.315c2.19-.356 3.255.65 3.255.65s-.65 2.546-3.729 2.31c-2.072 4.971-6.452 7.694-12.311 7.694-8.169 0-8.169-7.458-7.873-8.583h16.278c.887 0 1.48-.236 1.835-.414-1.244-2.309.473-4.38.473-4.38s1.835 1.006 2.072 2.723Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

DockerlogoFill.displayName = "DockerlogoFill"

export default DockerlogoFill
