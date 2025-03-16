import { jahiaComponent, Render } from "@jahia/javascript-modules-library";



jahiaComponent(
    {
        nodeType: "tenet:scene",
        componentType: "view",
        name: "fullPage",
    },
    ({ }, { currentNode, currentResource }) => {
        return (
            <>
                <Render node={currentNode} view="location" />
                <div>To be implemented and changed (no need to update full view)</div>
            </>

        );
    },
);
