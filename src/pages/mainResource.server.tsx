import { AbsoluteArea, jahiaComponent, Render } from "@jahia/javascript-modules-library";
import { Layout } from "./Layout.jsx";

jahiaComponent(
    {
        componentType: "template",
        nodeType: "jmix:mainResource",
    },
    ({ "jcr:title": title }, { currentNode }) => (
        <Layout title={title}>
            <AbsoluteArea name="navArea" allowedTypes={['tenet:navMenu']} numberOfItems={1} />
            <Render node={currentNode} view="fullPage" />
            <AbsoluteArea name="footerArea" allowedTypes={['tenet:footerMenu']} numberOfItems={1} />
        </Layout>
    ),
);