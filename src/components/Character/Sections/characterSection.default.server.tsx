import { AddContentButtons, getChildNodes, HydrateInBrowser, jahiaComponent, Render } from "@jahia/javascript-modules-library";

import type { CharacterSectionProps } from "./types.js";
jahiaComponent(
    {
        nodeType: "tenet:characterSection",
        componentType: "view",
    },
    ({ title, subtitle }: CharacterSectionProps, { currentNode }) => {
        return (
            <>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="dark:text-white max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            {title}
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            {subtitle}
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {getChildNodes(currentNode, -1, 0, (node) => node.isNodeType("jnt:content")).map((node) => (
                            // @ts-expect-error Fix the types
                            <Render key={node.getIdentifier()} node={node} />
                        ))}
                        <AddContentButtons />
                    </div>
                </div>

                <AddContentButtons />
            </>
        );
    },
);
