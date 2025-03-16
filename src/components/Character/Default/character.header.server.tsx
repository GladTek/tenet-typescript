import { jahiaComponent } from "@jahia/javascript-modules-library";

import type { CharacterProps } from "./types.js";
import HeaderLeftRightComponent from "../../shared/Header/HeaderLeftRightComponent.jsx";



jahiaComponent(
  {
    nodeType: "tenet:character",
    componentType: "view",
    name: "header",
  },
  ({ name, image, "function": role, description }: CharacterProps, { currentNode, currentResource }) => {
    const imageProp = {
      src: image.getUrl(),
      alt: 'Placeholder'
    };

    return (
      <HeaderLeftRightComponent image={imageProp}>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          {name}
        </p>
        <h2 className="dark:text-white mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          {role}
        </h2>

        <div dangerouslySetInnerHTML={{ __html: description }} className="pr-5 mb-5 text-base text-gray-700 md:text-lg" />
      </HeaderLeftRightComponent>
    );
  },
);
