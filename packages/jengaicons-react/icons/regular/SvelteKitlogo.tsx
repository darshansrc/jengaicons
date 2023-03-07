import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const SvelteKitlogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          fill={color || colorCtx || "#000000"}
          stroke={color || colorCtx || "#000000"}
          d='m24.479 14.482-.144.231.117.247c1.409 2.97.751 6.13-2.044 7.973l-5.57 3.55c-2.817 1.803-6.093 1.035-8.212-.961-2.112-1.99-2.986-5.112-1.09-7.987l.154-.236-.12-.254c-1.538-3.242-.445-6.347 2.043-7.968l5.57-3.551.004-.003c2.702-1.765 5.98-1.09 8.126.85 2.13 1.924 3.074 5.03 1.166 8.109Zm-13.794-3.95-.01.006-.009.007c-1.23.867-1.866 1.99-2.01 3.155-.142 1.152.204 2.301.857 3.23 1.307 1.86 3.917 2.92 6.533 1.392l.008-.005.008-.005 2.126-1.35c.415-.243.845-.094 1.084.23.119.16.17.34.152.506-.017.152-.098.337-.331.517l-5.542 3.538h-.001a.83.83 0 0 1-.868-.014c-.246-.152-.435-.446-.362-.908l.07-.442-.432-.119c-.878-.24-1.707-.671-2.499-1.27l-.522-.395-.243.607c-.88 2.192-.03 4.255 1.48 5.45 1.503 1.19 3.715 1.565 5.6.36l5.563-3.55.01-.007.011-.007c1.214-.867 1.846-1.986 1.99-3.143.144-1.147-.195-2.29-.842-3.215-1.296-1.855-3.89-2.91-6.53-1.42l-.012.006-.011.007-2.12 1.35c-.41.246-.84.095-1.086-.246a.754.754 0 0 1-.153-.518c.017-.147.095-.322.326-.484l5.567-3.532.001-.001c.269-.172.617-.148.895.042.269.184.414.484.328.826l-.121.48.48.126c.7.182 1.64.592 2.483 1.262l.514.408.257-.604c1.715-4.029-3.01-8.254-7.063-5.828l-.006.004-.006.004-5.564 3.55Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

SvelteKitlogo.displayName = "SvelteKitlogo"

export default SvelteKitlogo
