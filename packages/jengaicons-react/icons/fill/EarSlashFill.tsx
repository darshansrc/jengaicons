import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const EarSlashFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.868 5.783a8.233 8.233 0 0 1 8.323 8.231 1 1 0 1 0 2 0 10.233 10.233 0 0 0-15.477-8.785 1 1 0 0 0 1.025 1.717 8.233 8.233 0 0 1 4.13-1.163ZM8.233 8.671 6.99 7.3a1 1 0 1 1 1.48-1.345l1.758 1.934.026.029 3.211 3.532.03.034 5.757 6.332.032.035 2.886 3.175a.96.96 0 0 1 .036.04l4.726 5.197a1 1 0 0 1-1.48 1.346l-4.346-4.781a3.313 3.313 0 0 1-3.385-1.748 3.31 3.31 0 0 1-.376-1.523 3.883 3.883 0 0 1 .073-.786l-4.103-4.513a1 1 0 0 1-1.97-.244c0-.56.083-1.117.247-1.651l-1.942-2.136a8.19 8.19 0 0 0-.92 3.784v.002c0 1.507.242 2.47.556 3.145.313.673.73 1.133 1.22 1.614l.212.204c.436.42.964.927 1.367 1.577.5.807.799 1.795.799 3.152a4.076 4.076 0 0 0 7.222 2.595 1 1 0 1 1 1.542 1.273 6.077 6.077 0 0 1-10.764-3.868c0-1.037-.22-1.65-.5-2.098-.26-.42-.584-.735-1.023-1.16l-.254-.246c-.547-.536-1.169-1.197-1.635-2.2-.465-1-.742-2.264-.742-3.987l1-.001h-1a10.19 10.19 0 0 1 1.504-5.343Zm6.906.03a5.618 5.618 0 0 1 7.436 5.303 3.757 3.757 0 0 1-.775 2.35 1 1 0 1 1-1.587-1.217c.242-.316.37-.705.362-1.103v-.02a3.618 3.618 0 0 0-4.79-3.421A1 1 0 1 1 15.14 8.7Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

EarSlashFill.displayName = "EarSlashFill";

export default EarSlashFill;
