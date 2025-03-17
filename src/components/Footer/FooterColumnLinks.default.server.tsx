import React from 'react';
import { AddContentButtons, getChildNodes, jahiaComponent, Render } from '@jahia/javascript-modules-library';
import { LinkGroup } from '../shared/Links/LinkGroup';
interface FooterColumnLinksProps {
    "jcr:title": string;
}
jahiaComponent(
    {
        nodeType: 'tenet:footerColumnLinks',
        displayName: 'Footer Column Menu Links',
        componentType: 'view',
        name: 'default',
        properties: {
            'cache.mainResource': 'true'
        }
    },
    ({ "jcr:title": title }: FooterColumnLinksProps, { currentNode }) => {
        const allChildren = getChildNodes(currentNode, -1);

        return (
            <>
                <LinkGroup header={title}>
                    {allChildren && allChildren.map(child =>
                        <li key={child.getIdentifier()}><Render path={child.getPath()} view="tenet" /></li>
                    )}
                </LinkGroup>
                <AddContentButtons />

            </>
        );
    });