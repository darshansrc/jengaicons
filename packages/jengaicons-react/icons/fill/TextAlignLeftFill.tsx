import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TextAlignLeftFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.73 8.99a1 1 0 1 0 0 2h18.46a1 1 0 0 0 0-2H7.73Zm0 4.195a1 1 0 1 0 0 2h13.426a1 1 0 1 0 0-2H7.729Zm-1 5.196a1 1 0 0 1 1-1h18.461a1 1 0 1 1 0 2H7.731a1 1 0 0 1-1-1Zm1 3.196a1 1 0 1 0 0 2h13.426a1 1 0 1 0 0-2H7.73Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TextAlignLeftFill.displayName = "TextAlignLeftFill";

export default TextAlignLeftFill;
