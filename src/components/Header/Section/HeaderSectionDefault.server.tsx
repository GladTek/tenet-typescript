import { AddContentButtons, getChildNodes, jahiaComponent, Render, useUrlBuilder } from "@jahia/javascript-modules-library";
import type { JCRNodeWrapper } from "org.jahia.services.content";

interface HeaderSectionProps {
    "jcr:title": string;
    description: string;
    image: JCRNodeWrapper;
}
jahiaComponent(
    {
        nodeType: 'tenet:headerSection',
        name: 'default',
        componentType: 'view'
    }, ({ 'jcr:title': title, description, image }: HeaderSectionProps, { currentNode, currentResource, renderContext }) => {
        const allChildren = getChildNodes(currentNode, -1);



        return (
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            {title}
                        </h1>

                        <div dangerouslySetInnerHTML={{ __html: description }} className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-white" />
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            {allChildren && allChildren.map(child => (
                                <Render key={child.getIdentifier()} path={child.getPath()} view="tenet" />
                            ))}

                            {allChildren.length < 3 && <AddContentButtons />}
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img loading="lazy" src={image.getUrl()} alt="mockup" />
                    </div>
                </div>
            </section>
        );
    });
