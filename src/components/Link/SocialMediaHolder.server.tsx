import { AddContentButtons, getChildNodes, jahiaComponent, Render } from '@jahia/javascript-modules-library';


jahiaComponent(
    {
        nodeType: 'tenet:socialMediaHolder',
        displayName: 'Social Media Holder',
        name: 'default',
        componentType: 'view',
        properties: {
            'cache.mainResource': 'true'
        }
    }
    , ({ }, { currentNode }) => {

        const allChildren = getChildNodes(currentNode, -1);

        return (
            <>
                <div className="flex items-center mt-4 space-x-4 rtl:space-x-reverse sm:mt-0">
                    {allChildren.map(child =>
                        <Render key={child.getIdentifier()} path={child.getPath()} />
                    )}
                </div>
                <AddContentButtons />
            </>
        );
    });
