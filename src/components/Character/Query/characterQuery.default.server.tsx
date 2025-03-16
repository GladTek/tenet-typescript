import { AddContentButtons, getChildNodes, getNodesByJCRQuery, HydrateInBrowser, jahiaComponent, Render } from "@jahia/javascript-modules-library";
import { SimpleHeaderTitle } from "../../shared/Title/SimpleHeaderTitle";
import type { JCRNodeWrapper } from "org.jahia.services.content";
interface CharacterQueryProps {
    numberOfCharacters?: number;
}
jahiaComponent(
    {
        nodeType: 'tenet:charactersQuery',
        name: 'default',
        componentType: 'view'
    }, ({ numberOfCharacters }: CharacterQueryProps, { currentNode, currentResource, renderContext }) => {
        const home = renderContext.getSite().getHome();

        const numberToGet = numberOfCharacters ? Number(numberOfCharacters) : 3;
        const charactersQuery = 'SELECT * FROM [tenet:character] WHERE ISDESCENDANTNODE(\'' + home.getPath() + '\') order by [jcr:lastModified] desc';
        const allCharacters = getNodesByJCRQuery(currentNode.getSession(), charactersQuery, numberToGet);
        return (
            <div className="mt-8" >
                <SimpleHeaderTitle translationKey="section.characters.some" />
                <div className=" px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                        {allCharacters?.map(item => <Render key={(item as JCRNodeWrapper).getIdentifier()} node={item as JCRNodeWrapper} view="default" />)}
                    </div>
                </div>
            </div>
        );
    });