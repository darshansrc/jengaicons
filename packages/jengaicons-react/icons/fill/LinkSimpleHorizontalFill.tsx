import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LinkSimpleHorizontalFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M10.103 12.14a4.143 4.143 0 0 0 0 8.286h4.285a1 1 0 1 1 0 2h-4.285a6.143 6.143 0 0 1 0-12.286h4.285a1 1 0 1 1 0 2h-4.285Zm.714 4.142a1 1 0 0 1 1-1h10.286a1 1 0 1 1 0 2H11.817a1 1 0 0 1-1-1Zm8.715-6.142a1 1 0 0 0 0 2h4.285a4.143 4.143 0 0 1 0 8.286h-4.285a1 1 0 0 0 0 2h4.285a6.143 6.143 0 0 0 0-12.286h-4.285Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LinkSimpleHorizontalFill.displayName = "LinkSimpleHorizontalFill";

export default LinkSimpleHorizontalFill;
