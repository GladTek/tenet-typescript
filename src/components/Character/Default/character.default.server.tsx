import { jahiaComponent, useUrlBuilder } from "@jahia/javascript-modules-library";

import type { CharacterProps } from "./types.ts";
import { CharacterImageCard } from "../../shared/Cards/CharacterImageCard.jsx";
jahiaComponent(
  {
    nodeType: "tenet:character",
    componentType: "view",
  },
  ({ name, "function": role, description, image }: CharacterProps, { currentNode }) => {
    const { buildNodeUrl } = useUrlBuilder();
    return (
      <>
        <CharacterImageCard name={name} description={description} role={role} image={image} url={buildNodeUrl({ nodePath: currentNode.getPath() })} ></CharacterImageCard >
      </>
    );
  },
);
