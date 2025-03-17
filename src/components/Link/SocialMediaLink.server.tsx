import { jahiaComponent } from '@jahia/javascript-modules-library';
import GithubSvg from '../shared/Social/GithubSvg';
import FacebookSvg from '../shared/Social/FacebookSvg';
import LinkedInSvg from '../shared/Social/LinkedInSvg';
import SimpleLink from '../shared/Links/SimpleLink';

interface SocialMediaLinkProps {
    socialMediaType: string;
    'j:url': string;
    'j:target'?: string;
}
jahiaComponent(
    {
        nodeType: 'tenet:socialMediaLink',
        displayName: 'External Link',
        name: 'default',
        componentType: 'view',
        properties: {
            'cache.mainResource': 'true'
        }
    }
    , ({ socialMediaType, 'j:url': url, 'j:target': target, }: SocialMediaLinkProps) => {
        let svgNode = null;
        let ariaLabel = null;
        switch (socialMediaType) {
            case 'github':
                svgNode = <GithubSvg />;
                ariaLabel = 'Github';
                break;
            case 'facebook':
                svgNode = <FacebookSvg />;
                ariaLabel = 'Facebook';
                break;
            case 'linkedin':
                svgNode = <LinkedInSvg />;
                ariaLabel = 'LinkedIn';
                break;
            default:
                ariaLabel = 'Github';
                svgNode = <GithubSvg />;
        }

        return (
            <SimpleLink ariaLabel={ariaLabel} link={url} target={target} className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400">{svgNode}</SimpleLink>
        );
    });
