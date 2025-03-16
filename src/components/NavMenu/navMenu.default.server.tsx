import { jahiaComponent, server, buildNavMenu } from "@jahia/javascript-modules-library";
import clsx from 'clsx';
import SimpleLink from '../shared/Links/SimpleLink';
import type { NavMenuProps } from "./types";
jahiaComponent(
    {
        nodeType: 'tenet:navMenu',
        displayName: 'Navbar Nav Menu',
        componentType: 'view',
        properties: {
            'cache.mainResource': 'true'
        }
    },
    ({ base, maxDepth, startLevel, menuItemView, logo }: NavMenuProps, { renderContext, currentResource }) => {

        const menu = buildNavMenu(
            maxDepth,
            base,
            menuItemView,
            startLevel,
            renderContext,
            currentResource
        );

        const mainPath = renderContext.getMainResource().getPath();
        const home = renderContext.getSite().getHome();
        let isLogoPresent = false;
        if (logo) {
            server.render.addCacheDependency({ node: logo }, renderContext);
            isLogoPresent = true;
        }


        return (
            <div className="dark:bg-gray-900">
                <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16 rtl:space-x-reverse">
                        <div className="items-center hidden space-x-8 lg:flex rtl:space-x-reverse">
                            {menu?.map(({ node, selected }) => (
                                <SimpleLink key={node.getIdentifier()}
                                    link={node.getUrl()}
                                    ariaLabel={node.getDisplayableName()}
                                    title={node.getDisplayableName()}
                                    label={node.getDisplayableName()}
                                    className={clsx('rounded-md px-3 py-2 text-sm font-medium', {
                                        'bg-red-900 text-white': selected || mainPath.includes(node.getPath())
                                    }, {
                                        'text-secondary hover:bg-red-700 hover:text-white dark:text-white': !selected && !mainPath.includes(node.getPath())
                                    })} />

                            ))}
                        </div>

                        <SimpleLink link={home.getUrl()}
                            ariaLabel={home.getDisplayableName()}
                            title={home.getDisplayableName()}
                            className="inline-flex items-center"
                        >{isLogoPresent ?
                            <img width={200}
                                height={50}
                                src={logo.getUrl()}
                                alt="logo"
                                className="max-w-full  dark:invert"
                            /> : <h2 className="text-dark dark:text-white">{home.getDisplayableName()}</h2>}
                        </SimpleLink>
                        <div className="items-center space-x-8 rtl:space-x-reverse flex">
                            {menu?.reverse().map(({ node, selected }) => (
                                <SimpleLink key={node.getIdentifier()}
                                    link={node.getUrl()}
                                    ariaLabel={node.getDisplayableName()}
                                    title={node.getDisplayableName()}
                                    label={node.getDisplayableName()}
                                    className={clsx('lg:-scale-x-100 rounded-md px-3 py-2 text-sm font-medium', {
                                        'bg-blue-900 text-white': selected || mainPath.includes(node.getPath())
                                    }, {
                                        'text-secondary hover:bg-blue-700 hover:text-white dark:text-white': !selected && !mainPath.includes(node.getPath())
                                    })}
                                />

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
