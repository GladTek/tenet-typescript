import { jahiaComponent, useUrlBuilder } from "@jahia/javascript-modules-library";

import type { CharacterProps } from "./types.ts";
import { CharacterImageCard } from "../../shared/Cards/CharacterImageCard.jsx";

jahiaComponent(
  {
    nodeType: "tenet:character",
    componentType: "view",
  },
  ({ name, "function": role, image }: CharacterProps, { currentNode }) => {
    const { buildNodeUrl } = useUrlBuilder();
    return (
      <>
        <CharacterImageCard name={name} role={role} image={image} url={buildNodeUrl({ nodePath: currentNode.getPath() })} ></CharacterImageCard >
      </>
    );
  },
);
