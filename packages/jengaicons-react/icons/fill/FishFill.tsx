import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FishFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M18.147 4.652c4.052-1.45 8.38-.721 9.887-.397l.019.005a1.923 1.923 0 0 1 1.43 1.43l.005.02c.324 1.505 1.052 5.834-.397 9.886-.734 2.053-2.032 4.048-4.22 5.546-2.065 1.414-4.853 2.338-8.565 2.516l-2.32 5.513a1 1 0 0 1-1.882-.113l-1.649-5.77-5.77-1.649a1 1 0 0 1-.113-1.883l5.513-2.319c.178-3.712 1.102-6.5 2.515-8.564 1.499-2.19 3.494-3.487 5.547-4.221Zm9.061 10.27c-.501 1.402-1.299 2.736-2.538 3.843a4.404 4.404 0 0 1-4.3-4.402 1 1 0 0 0-1-1 4.403 4.403 0 0 1-4.402-4.279c1.108-1.245 2.447-2.046 3.853-2.55 3.451-1.233 7.254-.648 8.726-.338.31 1.472.895 5.274-.339 8.726Zm-4.237-5.501a1.35 1.35 0 1 1-2.701 0 1.35 1.35 0 0 1 2.701 0Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FishFill.displayName = "FishFill";

export default FishFill;
