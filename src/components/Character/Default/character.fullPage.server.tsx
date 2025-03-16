import { HydrateInBrowser, jahiaComponent, Render } from "@jahia/javascript-modules-library";

import type { CharacterProps } from "./types.js";



jahiaComponent(
  {
    nodeType: "tenet:character",
    componentType: "view",
    name: "fullPage",
  },
  ({ }, { currentNode, currentResource }) => {
    const hasGallery = currentNode.isNodeType('tenetmix:hasGallery');
    const hasSkills = currentNode.isNodeType('tenetmix:hasSkills');
    const hasYoutubeSoundtrack = currentNode.isNodeType('tenetmix:hasYoutubeSoundtrack');
    let skillsHolderPath: string | undefined = undefined;
    if (hasSkills) {
      skillsHolderPath = currentNode.getPath() + '/skillsHolder';
    }
    return (
      <>
        <Render node={currentNode} view="header" />
        {hasGallery &&
          <Render node={currentNode} view="gallery" />}

        {hasYoutubeSoundtrack && <Render node={currentNode} view="hasYoutubeSoundtrack" />}

        {hasSkills && <Render path={skillsHolderPath} view="character" />}

        <Render node={currentNode} view="scenes" />

      </>

    );
  },
);
