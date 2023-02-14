import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BookBookmarkFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.97 3.283h3.962a1.013 1.013 0 0 0-.005.11v12.843a1 1 0 0 0 1.598.8l3.441-2.572 3.403 2.57a1 1 0 0 0 1.602-.798V3.393c0-.038-.001-.074-.005-.11h2.985a1 1 0 0 1 1 1v19.965a1 1 0 0 1-1 1H9.97a2 2 0 0 0-2 1.997V27.283h16.99a1 1 0 1 1 0 2H6.97a1 1 0 0 1-1-1v-21a4 4 0 0 1 4-4Zm5.95 0h6.058a.988.988 0 0 0-.006.11v10.835l-2.4-1.812a.999.999 0 0 0-1.201-.003l-2.444 1.827h-.001V3.393c0-.038-.002-.074-.005-.11Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BookBookmarkFill.displayName = "BookBookmarkFill";

export default BookBookmarkFill;
