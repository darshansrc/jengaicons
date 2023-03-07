import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const RustlogoFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M16.96 4.823C10.798 4.823 5.783 9.84 5.783 16c0 6.16 5.017 11.177 11.177 11.177 6.16 0 11.177-5.017 11.177-11.177 0-6.16-5.017-11.177-11.177-11.177Zm-.016.993a.732.732 0 0 1 .714.735.735.735 0 1 1-.714-.735Zm1.683 1.21a9.05 9.05 0 0 1 6.195 4.413l-.868 1.958a.676.676 0 0 0 .34.886l1.67.74c.052.522.058 1.048.02 1.57h-.93c-.092 0-.13.062-.13.152v.425c0 1.003-.565 1.223-1.062 1.277-.473.055-.995-.198-1.061-.487-.28-1.568-.743-1.9-1.476-2.48.91-.577 1.856-1.43 1.856-2.57 0-1.232-.844-2.008-1.419-2.389-.808-.532-1.702-.638-1.943-.638h-9.6a9.05 9.05 0 0 1 5.062-2.856l1.133 1.187a.667.667 0 0 0 .946.02l1.267-1.207ZM8.176 12.47a.735.735 0 1 1-.042 1.47.735.735 0 0 1 .042-1.47Zm17.533.033a.735.735 0 1 1-.043 1.47.735.735 0 0 1 .043-1.47ZM9.56 12.62h1.282V18.4H8.256a9.049 9.049 0 0 1-.293-3.455l1.584-.704a.67.67 0 0 0 .34-.884l-.326-.736Zm5.35.062h3.052c.158 0 1.113.182 1.113.898 0 .594-.733.806-1.336.806h-2.832l.002-1.704Zm0 4.152h2.338c.212 0 1.142.061 1.437 1.248.092.364.298 1.551.438 1.932.14.426.704 1.277 1.307 1.277h3.817a9.044 9.044 0 0 1-.838.97l-1.553-.334a.672.672 0 0 0-.797.515l-.369 1.722a9.046 9.046 0 0 1-7.545-.036l-.369-1.721a.67.67 0 0 0-.794-.516l-1.52.327a9.038 9.038 0 0 1-.786-.927h7.394c.083 0 .14-.014.14-.092v-2.616c0-.075-.057-.092-.14-.092h-2.163l.002-1.657Zm-3.413 5.99a.735.735 0 1 1-.042 1.469.735.735 0 0 1 .042-1.47Zm10.889.032a.735.735 0 1 1-.043 1.47.735.735 0 0 1 .043-1.47Z'
      />
      <path
        fill={color || colorCtx || "#000000"}
        fillRule='evenodd'
        stroke={color || colorCtx || "#000000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M27.513 16a10.553 10.553 0 1 1-21.105 0 10.553 10.553 0 0 1 21.105 0Zm-.199-1.02L28.96 16l-1.646 1.02 1.415 1.32-1.812.68 1.13 1.572-1.912.312.803 1.764-1.936-.069.445 1.887-1.887-.444.068 1.936-1.764-.804-.312 1.913-1.572-1.13-.679 1.811-1.322-1.414L16.96 28l-1.019-1.646-1.322 1.414-.678-1.811-1.573 1.13-.312-1.913-1.764.804.069-1.936-1.887.444.444-1.887-1.936.069.804-1.764-1.913-.312 1.13-1.572-1.811-.68 1.414-1.32L4.96 16l1.646-1.02-1.414-1.32 1.811-.68-1.13-1.572 1.913-.312-.804-1.764 1.936.069-.444-1.887 1.887.444-.069-1.936 1.764.804.312-1.913 1.573 1.13.678-1.811 1.322 1.414L16.961 4l1.018 1.646 1.322-1.414.679 1.811 1.572-1.13.312 1.913 1.764-.804-.068 1.936 1.887-.444-.445 1.887 1.937-.069-.804 1.764 1.912.312-1.13 1.572 1.811.68-1.414 1.32Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

RustlogoFill.displayName = "RustlogoFill"

export default RustlogoFill
