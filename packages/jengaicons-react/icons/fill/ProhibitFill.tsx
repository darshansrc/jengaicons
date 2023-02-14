import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ProhibitFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M24.709 25.446a11.952 11.952 0 0 1-7.749 2.837c-6.628 0-12-5.373-12-12 0-2.954 1.067-5.658 2.837-7.749l16.912 16.912Zm1.414-1.414L9.211 7.12a11.952 11.952 0 0 1 7.749-2.837c6.627 0 12 5.373 12 12 0 2.954-1.067 5.658-2.837 7.749Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

ProhibitFill.displayName = "ProhibitFill";

export default ProhibitFill;
