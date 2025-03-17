import { jahiaComponent } from '@jahia/javascript-modules-library';
import SimpleLink from '../shared/Links/SimpleLink';


interface ExternalLinkProps {
    children?: React.ReactNode;
    className?: string;
    hasNoLabel?: boolean;
    ariaLabel?: string;
    'jcr:title': string;
    'j:url': string;
    'j:target'?: string;
    linkBackgroundColor: string;
}

jahiaComponent(
    {
        nodeType: 'jnt:externalLink',
        displayName: 'External Link',
        name: 'tenet',
        componentType: 'view',
        properties: {
            'cache.mainResource': 'true'
        }
    }, ({ children, className, hasNoLabel, ariaLabel, 'j:url': url, 'j:target': target, "jcr:title": title, linkBackgroundColor }: ExternalLinkProps, { currentNode }) => {

        const hasItsOwnStyle = currentNode.isNodeType('tenetmix:styleForLink');

        const cssOverride = 'px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#' + linkBackgroundColor + '] rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80';
        let calculatedClassName = hasItsOwnStyle ? cssOverride : 'transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400';
        if (className) {
            calculatedClassName = className;
        }

        return (
            <>
                {hasNoLabel && <SimpleLink ariaLabel={ariaLabel} link={url} target={target} className={calculatedClassName}>{children}</SimpleLink>}
                {!hasNoLabel && <SimpleLink ariaLabel={ariaLabel} link={url} label={title} target={target} className={calculatedClassName}>{children}</SimpleLink>}
            </>
        );
    });