import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FolderSimpleDottedFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.46 6.821a1.5 1.5 0 0 0-1.5 1.5v5.039a1 1 0 1 0 2 0V8.82h6.609l3.713 3.428a.996.996 0 0 0 .678.265h3a1 1 0 1 0 0-2h-2.61l-3.568-3.295a1.5 1.5 0 0 0-1.018-.398H5.46Zm20.5 3.693a1 1 0 0 0 0 2h2v.862a1 1 0 0 0 2 0v-1.862a1 1 0 0 0-1-1h-3Zm-20 6.538a1 1 0 1 0-2 0v3.692a1 1 0 1 0 2 0v-3.692Zm24 .048a1 1 0 1 0-2 0v3.692a1 1 0 0 0 2 0V17.1Zm-24 7.337a1 1 0 0 0-2 0v1.846a1 1 0 0 0 1 1h1.912a1 1 0 1 0 0-2H5.96v-.846Zm24 .016a1 1 0 1 0-2 0v.83h-1.175a1 1 0 1 0 0 2h2.175a1 1 0 0 0 1-1v-1.83Zm-19.263.83a1 1 0 1 0 0 2h3.824a1 1 0 0 0 0-2h-3.824Zm7.649 0a1 1 0 1 0 0 2h4.088a1 1 0 1 0 0-2h-4.088Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FolderSimpleDottedFill.displayName = "FolderSimpleDottedFill";

export default FolderSimpleDottedFill;
