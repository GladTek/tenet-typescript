import { getNodesByJCRQuery, jahiaComponent, Render } from "@jahia/javascript-modules-library";
import { SimpleHeaderTitle } from "../../shared/Title/SimpleHeaderTitle";
import type { JCRNodeWrapper } from "org.jahia.services.content";

jahiaComponent(
    {
        nodeType: 'tenet:scenesQuery',
        name: 'default',
        componentType: 'view'
    }, ({ }, { currentNode, renderContext }) => {
        const home = renderContext.getSite().getHome();
        const scenesQuery = 'SELECT * FROM [tenet:scene] WHERE ISDESCENDANTNODE(\'' + home.getPath() + '\') order by day asc';
        const allScenes = getNodesByJCRQuery(currentNode.getSession(), scenesQuery, -1);
        return (
            <>

                <SimpleHeaderTitle translationKey="section.relatedScenes.title" />
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full md:max-w-full">
                        {allScenes?.map(item => <Render key={(item as JCRNodeWrapper).getIdentifier()} node={item as JCRNodeWrapper} view="location" />)}
                    </div>
                </div>
            </>
        );
    });