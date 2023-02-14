import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FolderSimpleStarFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M3.96 6.668a1 1 0 0 1 1-1h8a1 1 0 0 1 .678.265l3.713 3.427H28.96a1 1 0 0 1 1 1V13.2a1 1 0 0 1-2 0V11.36h-11c-.262 0-.5-.1-.678-.265l-3.713-3.427H5.96v17.23h8.57a1 1 0 1 1 0 2H4.96a1 1 0 0 1-1-1V6.668Zm18.554 9.31-1.157 2.49a.5.5 0 0 1-.425.29l-2.767.155a.5.5 0 0 0-.305.872l2.255 2.016a.5.5 0 0 1 .143.528l-.76 2.33a.5.5 0 0 0 .726.588l2.521-1.454a.5.5 0 0 1 .515.009l2.295 1.434a.5.5 0 0 0 .75-.547l-.609-2.38a.5.5 0 0 1 .148-.493l2.232-2.03a.5.5 0 0 0-.31-.87l-2.936-.158a.5.5 0 0 1-.439-.316l-.959-2.436a.5.5 0 0 0-.918-.027Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FolderSimpleStarFill.displayName = "FolderSimpleStarFill";

export default FolderSimpleStarFill;
