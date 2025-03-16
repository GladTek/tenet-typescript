import { getNodesByJCRQuery, jahiaComponent, Render } from "@jahia/javascript-modules-library";
import { SimpleHeaderTitle } from "../../shared/Title/SimpleHeaderTitle";
import type { JCRNodeWrapper } from "org.jahia.services.content";

jahiaComponent(
    {
        nodeType: 'tenet:character',
        name: 'scenes',
        componentType: 'view'
    }, ({ }, { currentNode, currentResource }) => {
        const identifier = currentNode.getIdentifier();
        const invertedFlowQuery = 'SELECT * FROM [tenet:scene] as S where invertedCharacters LIKE \'%' + identifier + '%\'';
        const allInvertedFlowScenes = getNodesByJCRQuery(currentNode.getSession(), invertedFlowQuery, -1);
        const normalFlowQuery = 'SELECT * FROM [tenet:scene] as S where characters LIKE \'%' + identifier + '%\'';
        const allNormalFlowScenes = getNodesByJCRQuery(currentNode.getSession(), normalFlowQuery, -1);
        const hasNormalScenes = allNormalFlowScenes.length > 0;
        const hasInvertedScenes = allInvertedFlowScenes.length > 0;
        return (
            <>
                {hasInvertedScenes &&
                    <>
                        <SimpleHeaderTitle translationKey="section.relatedScenes.inInvertedFlow" />
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                                {allInvertedFlowScenes?.map(item => <Render key={(item as JCRNodeWrapper).getIdentifier()} node={item as JCRNodeWrapper} view="location" />)}
                            </div>
                        </div>
                    </>}
                {hasNormalScenes &&
                    <>
                        <SimpleHeaderTitle translationKey="section.relatedScenes.inNormalFlow" />
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                                {allNormalFlowScenes?.map(item => <Render key={(item as JCRNodeWrapper).getIdentifier()} node={item as JCRNodeWrapper} view="location" />)}
                            </div>
                        </div>
                    </>}
            </>
        );
    });