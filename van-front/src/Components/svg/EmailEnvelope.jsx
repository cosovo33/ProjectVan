// icon:email-newsletter | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";

function EmailEnvelope(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="orange"
      height="8em"
      width="8em"
      {...props}
    >
      <path d="M12 .64L8.23 3H5v2L2.97 6.29C2.39 6.64 2 7.27 2 8v10a2 2 0 002 2h16c1.11 0 2-.89 2-2V8c0-.73-.39-1.36-.97-1.71L19 5V3h-3.23M7 5h10v4.88L12 13 7 9.88M8 6v1.5h8V6M5 7.38v1.25L4 8m15-.62L20 8l-1 .63M8 8.5V10h8V8.5z" />
    </svg>
  );
}

export default EmailEnvelope;