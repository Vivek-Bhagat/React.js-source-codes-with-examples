import React from "react";
import { createPortal } from "react-dom";
function PortalDemo() {
  return (
    <div>

      <h1>Portal Demo</h1>
     {createPortal(
          <p>This child is placed in the document body.</p>,
          document.getElementById('portal-root')
        )}
    </div>
    );
}

export default PortalDemo;
