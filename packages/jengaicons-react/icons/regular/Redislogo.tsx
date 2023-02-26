import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Redislogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          d="M15.666 7.33c0 .01.113.22.253.483.14.258.24.478.225.492-.014.01-.408.16-.872.324-.468.168-.839.309-.834.314.005.004.534.06 1.172.121.769.07 1.172.122 1.2.155.023.024.201.31.394.628l.346.582.061-.146c.033-.075.141-.333.235-.562l.173-.417.924-.099c.506-.056.956-.098 1.003-.098l.08-.033c0-.014-.343-.155-.765-.314-.417-.155-.764-.29-.764-.296 0-.004.09-.225.202-.492.108-.267.192-.492.187-.497-.009-.009-.365.099-.787.235l-.764.253-.82-.324c-.807-.318-.849-.332-.849-.309Zm5.09 2.77c-.979.39-1.785.713-1.79.722-.01.01.722.305 1.622.661l1.631.642.174-.07c1.818-.708 3.468-1.364 3.464-1.373l-3.277-1.29a62.02 62.02 0 0 0-1.823.708Zm-9.402-.38c-.942.1-1.73.371-2.063.718-.23.234-.267.436-.122.68.211.365.905.67 1.861.825.431.075 1.692.06 2.128-.014 1.022-.179 1.688-.507 1.843-.92.056-.154.056-.173 0-.323-.155-.398-.807-.73-1.772-.9a9.324 9.324 0 0 0-1.875-.065Zm17.498 1.135c-.047.061-.22.202-.39.314-.496.319-1.134.61-5.113 2.325-2.799 1.2-3.511 1.519-4.477 1.983-1.073.51-1.518.656-2.058.656-.482 0-.773-.084-1.673-.483-.36-.16-1.837-.778-3.276-1.378-6.305-2.62-6.422-2.676-6.76-3.042l-.14-.155v2.47l.16.155c.154.15.674.464.857.516.051.014.394.155.764.314.37.16 2.18.919 4.022 1.688 3.047 1.27 3.74 1.56 4.78 2.015.55.244.854.305 1.374.286.38-.014.492-.037.825-.15.216-.07.586-.23.825-.352.793-.398 1.749-.82 5.56-2.46 3.585-1.547 4.054-1.763 4.443-2.03.399-.286.385-.216.385-1.594 0-.66-.005-1.2-.01-1.2l-.098.122Zm-12.553 1.612c-1.467.226-2.681.418-2.705.427-.033.01 3.656 1.561 3.811 1.603l1.688-2.423c-.005-.033 0-.038-2.794.393Zm12.576 2.457c-.032.056-.187.187-.332.295-.479.328-1.196.656-5.555 2.531-2.508 1.083-3.295 1.43-4.04 1.79-1.21.587-1.5.68-2.148.68-.501-.004-.81-.084-1.476-.384-.642-.295-1.36-.595-4.238-1.79-5.02-2.082-5.596-2.344-5.953-2.686l-.173-.164v2.437l.197.188c.319.3.286.28 5.667 2.521a336.93 336.93 0 0 1 4.134 1.74c.793.356 1.022.44 1.336.506.732.15 1.275.028 2.461-.549.774-.375 1.716-.792 3.998-1.776 4.341-1.87 5.41-2.353 5.729-2.564.112-.08.267-.207.342-.29l.136-.15v-1.22c0-.67-.005-1.218-.01-1.218l-.075.103Zm-.042 3.993c-.286.361-.862.638-5.339 2.564-2.92 1.261-3.81 1.655-4.772 2.11-1.008.478-1.34.581-1.922.581-.398 0-.801-.094-1.246-.29-1.046-.46-1.735-.75-4.786-2.02-3.469-1.445-4.58-1.918-4.95-2.1-.347-.174-.699-.423-.778-.55l-.08-.116v1.242c0 1.425-.023 1.317.356 1.575.422.28 1.05.562 5.217 2.292 2.911 1.21 3.961 1.65 4.477 1.884 1.054.474 1.336.549 1.926.516.54-.024.891-.14 1.824-.586.97-.464 1.687-.788 4.86-2.152 4.407-1.898 4.885-2.128 5.218-2.512l.117-.131V20.01c0-.67-.005-1.22-.01-1.22l-.112.127Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Redislogo.displayName = "Redislogo";

export default Redislogo;