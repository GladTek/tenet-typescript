import { AbsoluteArea, Area, jahiaComponent } from "@jahia/javascript-modules-library";
import { Layout } from "./Layout.jsx";

jahiaComponent(
  {
    nodeType: "jnt:page",
    name: "basic",
    displayName: "Basic page",
    componentType: "template",
  },
  ({ "jcr:title": title }) => (
    <Layout title={title}>
      <AbsoluteArea name="navArea" allowedTypes={['tenet:navMenu']} numberOfItems={1} />
      <Area name="main" />
      <AbsoluteArea name="footerArea" allowedTypes={['tenet:footerMenu']} numberOfItems={1} />
    </Layout>
  ),
);
