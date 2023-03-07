import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const TextHTwoFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M8.73 9.637a1 1 0 1 0-2 0v11.077a1 1 0 1 0 2 0v-4.539h7.6v4.539a1 1 0 1 0 2 0V9.637a1 1 0 1 0-2 0v4.538h-7.6V9.637Zm13.877 6.119a1.398 1.398 0 0 1 2.584.742c0 .15-.01.222-.127.423l-.014.019c-.023.032-.074.105-.167.232-.125.17-.294.396-.493.66-.398.53-.91 1.205-1.418 1.87a1009.9 1009.9 0 0 1-1.834 2.396l-.126.164-.033.043-.009.01-.002.004.792.61-.793-.61a1 1 0 0 0 .793 1.61h4.431a1 1 0 1 0 0-2h-2.404c.245-.32.51-.665.775-1.014a367.61 367.61 0 0 0 1.427-1.88c.2-.268.375-.501.506-.68.113-.154.236-.323.295-.423.291-.498.401-.916.401-1.434a3.398 3.398 0 0 0-6.277-1.806 1 1 0 1 0 1.693 1.064Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

TextHTwoFill.displayName = "TextHTwoFill"

export default TextHTwoFill
