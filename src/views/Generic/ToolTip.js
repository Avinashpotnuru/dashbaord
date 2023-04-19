import Tippy from "tippy.js";

import "tippy.js/dist/tippy.css";

export default function ToolTip({
  title,
  children,
  gradientBackground,
  customStyles,
  tipPlacement,
  backgroundColor,
}) {
  return (
    <Tippy
      interactive={true}
      className={` ${customStyles} bg-${backgroundColor}
        } `}
      // placement={tipPlacementRight ? "right" : "bottom"}
      placement={tipPlacement ? tipPlacement : "bottom"}
      content={title}
    >
      <p className="">{children}</p>
    </Tippy>
  );
}
