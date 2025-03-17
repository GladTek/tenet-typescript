import { jahiaComponent } from '@jahia/javascript-modules-library';
import SimpleLink from '../shared/Links/SimpleLink';

import type { JCRNodeWrapper } from 'org.jahia.services.content';

interface NodeLinkProps {
    children: React.ReactNode;
    className?: string;
    hasNoLabel?: boolean;
    ariaLabel?: string;
    'jcr:title': string;
    'j:url': string;
    'j:target'?: string;
    'j:node': JCRNodeWrapper;
    linkBackgroundColor: string;
}
jahiaComponent(
    {
        nodeType: 'jnt:nodeLink',
        displayName: 'Node Link',
        name: 'tenet',
        componentType: 'view',
        properties: {
            'cache.mainResource': 'true'
        }
    }
    , ({ 'j:node': node, 'j:target': target, "jcr:title": title, linkBackgroundColor }: NodeLinkProps, { currentNode }) => {


        const url = node !== undefined ? node.getUrl() : '';

        const hasItsOwnStyle = currentNode.isNodeType('tenetmix:styleForLink');
        const cssOverride = 'px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#' + linkBackgroundColor + '] rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80';
        const calculatedClassName = hasItsOwnStyle ? cssOverride : 'transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400';

        return (
            <SimpleLink link={url} label={title} target={target} className={calculatedClassName} />
        );
    });
