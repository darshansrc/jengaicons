import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Bandaids = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M16 16.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
          opacity=".5"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M16 17.455a1.455 1.455 0 1 0 0-2.91 1.455 1.455 0 0 0 0 2.91Z"
        />
        <rect
          width="7.758"
          height="26.183"
          x="4"
          y="9.486"
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          rx="3.879"
          transform="rotate(-45 4 9.486)"
        />
        <rect
          width="7.758"
          height="26.183"
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          rx="3.879"
          transform="scale(-1 1) rotate(-45 -2.55 38.542)"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Bandaids.displayName = "Bandaids";

export default Bandaids;
