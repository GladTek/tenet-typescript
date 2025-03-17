
interface FooterMenuProps {
    logo: JCRNodeWrapper;
    resume: string;
    startYear: number;
}
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import type { JCRNodeWrapper } from 'org.jahia.services.content';
import { AddContentButtons, getChildNodes, jahiaComponent, Render, server } from "@jahia/javascript-modules-library";


jahiaComponent(
    {
        nodeType: 'tenet:footerMenu',
        displayName: 'Footer Menu',
        componentType: 'view',
        properties: {
            'cache.mainResource': 'true'
        }
    },
    ({ logo, resume, startYear }: FooterMenuProps, { currentNode, renderContext }) => {
        const dir = i18next.dir(i18next.language);
        const { t } = useTranslation();

        const site = renderContext.getSite();

        const allChildren = getChildNodes(currentNode, -1);
        const allChildrenFiltered = allChildren.filter(child => child.isNodeType('tenet:footerColumnLinks'));


        const socialMediaHolderPath = currentNode.getPath() + '/socialMediaHolder';
        let isLogoPresent = false;
        if (logo) {
            server.render.addCacheDependency({ node: logo }, renderContext);
            isLogoPresent = true;
        }

        return (
            <div className="relative mt-16 bg-deep-purple-400">
                <svg
                    className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 54"
                >
                    <path
                        fill="currentColor"
                        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                    />
                </svg>
                <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                        <div className="md:max-w-md lg:col-span-2">

                            {isLogoPresent ?
                                <img width={200}
                                    height={50}
                                    src={logo.getUrl()}
                                    alt="logo"
                                    className="max-w-full"
                                /> : <h4 className="text-dark dark:text-white">{site.getTitle()}</h4>}
                            <div className="mt-4 lg:max-w-sm">
                                <div dangerouslySetInnerHTML={{ __html: resume }} className="text-sm text-deep-purple-50" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                            {allChildrenFiltered && allChildrenFiltered.map(child =>
                                <Render key={child.getIdentifier()} path={child.getPath()} />
                            )}
                            {allChildren.length < 2 &&
                                <AddContentButtons />}
                        </div>
                    </div>
                    <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                        <p className="text-sm text-gray-100">
                            © {startYear} - {t('section.footer.copyrightMessage')}
                        </p>
                    </div>
                </div>
            </div>
        );
    });