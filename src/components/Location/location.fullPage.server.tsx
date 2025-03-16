import { jahiaComponent, Render } from "@jahia/javascript-modules-library";



jahiaComponent(
  {
    nodeType: "tenet:location",
    componentType: "view",
    name: "fullPage",
  },
  ({ }, { currentNode, currentResource }) => {
    return (
      <>
        <Render node={currentNode} view="data" />
        <div>To be implemented and changed (no need to update full view)</div>
      </>

    );
  },
);
