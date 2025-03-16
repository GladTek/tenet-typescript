

import { getChildNodes, jahiaComponent, AddContentButtons, Render } from "@jahia/javascript-modules-library";
import type { TestimonialSectionProps } from "./types";

jahiaComponent(
    {
        nodeType: 'tenet:testimonialSection',
        displayName: 'Testimonial Section',
        componentType: 'view',
        properties: {
            'cache.mainResource': 'true'
        }
    },
    ({ title, subtitle }: TestimonialSectionProps, { currentNode, renderContext, currentResource }) => {

        const currentLocale = currentResource.getLocale();
        const currentLocaleCode = currentLocale.getLanguage();
        const direction = currentLocaleCode === 'ar' ? 'rtl' : 'ltr';
        const allChildren = getChildNodes(currentNode, -1);


        return (
            <div className="bg-red-400 mr-20 ml-20 p-10">
                <div className="mb-8 px-4">
                    <h3 className="text-4xl font-semibold text-center">
                        {title}
                    </h3>
                    <p className="text-center text-sm mt-2 max-w-lg mx-auto">
                        {subtitle}
                    </p>
                </div>
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {allChildren.map(child =>
                        <Render key={child.getIdentifier()} path={child.getPath()} />
                    )}
                </div>
                <AddContentButtons />
            </div>
        );
    });
