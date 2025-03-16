import { AbsoluteArea, Area, jahiaComponent } from "@jahia/javascript-modules-library";
import { Layout } from "./Layout.jsx";

jahiaComponent(
  {
    nodeType: "jnt:page",
    name: "home",
    displayName: "Home",
    componentType: "template",
  },
  ({ "jcr:title": title }) => (
    <Layout title={title}>
      <AbsoluteArea name="navArea" allowedTypes={['tenet:navMenu']} numberOfItems={1} />
      <Area name="main" />
    </Layout>
  ),
);
