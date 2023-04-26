// icon:star-four-points | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";

function IconStar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" />
    </svg>
  );
}

export default IconStar;
