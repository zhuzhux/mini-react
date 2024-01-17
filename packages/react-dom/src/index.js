import React from "mini-react";

const ReactDom = {
  createRoot(container) {
    return {
      render(App) {
        return React.render(App, container);
      },
    };
  },
};

export default ReactDom;
