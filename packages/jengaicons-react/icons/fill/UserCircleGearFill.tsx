import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UserCircleGearFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26.96 4.283a1 1 0 1 0-2 0v.67a2.997 2.997 0 0 0-.95.55l-.581-.336a1 1 0 1 0-1 1.732l.581.335a3.013 3.013 0 0 0 0 1.097l-.581.336a1 1 0 1 0 1 1.732l.581-.336c.278.238.599.425.95.55v.67a1 1 0 0 0 2 0v-.67c.351-.125.672-.313.95-.55l.581.336a1 1 0 1 0 1-1.732l-.581-.336a3.012 3.012 0 0 0 0-1.096l.581-.336a1 1 0 1 0-1-1.732l-.581.336a2.997 2.997 0 0 0-.95-.55v-.67Zm-1 2.5a1 1 0 0 1 .86.49l.006.01.006.01a.996.996 0 0 1 0 .98l-.006.01-.005.01a1 1 0 0 1-1.72.001l-.007-.011-.007-.012a.995.995 0 0 1 0-.976l.007-.012.006-.011a1 1 0 0 1 .86-.489Zm-20 10c0-6.075 4.925-11 11-11a1 1 0 0 0 0-2c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13a1 1 0 0 0-2 0c0 3.71-1.837 6.992-4.651 8.984a6.39 6.39 0 0 0-12.698 0 10.987 10.987 0 0 1-4.651-8.984Zm11 3.318a4.784 4.784 0 1 0 0-9.568 4.784 4.784 0 0 0 0 9.568Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

UserCircleGearFill.displayName = "UserCircleGearFill";

export default UserCircleGearFill;
