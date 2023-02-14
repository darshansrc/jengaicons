import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FootballFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M9.643 8.966c2.63-2.63 5.762-3.87 8.694-4.38l10.32 10.32c-.51 2.932-1.75 6.063-4.38 8.694-2.63 2.63-5.762 3.87-8.694 4.38L5.263 17.66c.51-2.932 1.749-6.063 4.38-8.694ZM4.986 20.21c-.098 2.046.1 3.866.32 5.172a3.114 3.114 0 0 0 2.554 2.553c1.306.222 3.126.42 5.172.321l-8.046-8.046ZM28.613 7.183a24.38 24.38 0 0 1 .321 5.173l-8.047-8.047c2.046-.098 3.867.1 5.173.32a3.114 3.114 0 0 1 2.553 2.554Zm-6.807 5.668a1 1 0 0 0-1.414-1.414l-1.969 1.968-1.185-1.185a1 1 0 0 0-1.414 1.415l1.185 1.185-1.512 1.512-1.185-1.185a1 1 0 0 0-1.415 1.414l1.185 1.185-1.968 1.97a1 1 0 0 0 1.414 1.413l1.969-1.968 1.184 1.184a1 1 0 0 0 1.415-1.414l-1.185-1.185 1.512-1.512 1.185 1.185a1 1 0 1 0 1.415-1.415l-1.185-1.184 1.968-1.97Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FootballFill.displayName = "FootballFill";

export default FootballFill;
