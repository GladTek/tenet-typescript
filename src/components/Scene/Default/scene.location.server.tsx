import { jahiaComponent, Render } from "@jahia/javascript-modules-library";
import type { SceneProps } from "../types";
import SimpleLink from "../../shared/Links/SimpleLink";
import { useTranslation } from 'react-i18next';
import truncate from 'truncate-html';
jahiaComponent(
    {
        nodeType: "tenet:scene",
        componentType: "view",
        name: 'location',
    }, ({ "jcr:title": title, description, image, day }: SceneProps, { currentNode }) => {
        const { t } = useTranslation();
        const truncatedDescription = truncate(description, 200, { stripTags: true }) || '';
        return (
            <div className="group relative hover:scale-[1.05] overflow-hidden border transition-shadow duration-300">
                <SimpleLink link={currentNode.getUrl()} ariaLabel={title}>
                    <img
                        src={image.getUrl()}
                        className="object-cover w-full h-64 rounded"
                        alt={title}
                    />
                </SimpleLink>
                <div className="p-5">
                    <div className="mb-2 text-xs font-semibold uppercase">
                        <span className="inline-flex items-center justify-center gap-1 rounded bg-emerald-500 px-1.5 text-sm text-white">{t('day', { dayNumber: day })}</span>
                    </div>

                    <SimpleLink link={currentNode.getUrl()}
                        ariaLabel={title}
                        className="inline-block mb-3 text-black dark:text-white transition-colors duration-200 dark:hover:text-deep-purple-accent-700 hover:text-deep-purple-accent-700"
                    >
                        <p className="text-2xl font-bold leading-5">{title}</p>
                    </SimpleLink>
                    <Render node={currentNode} view="characters" />
                    <div dangerouslySetInnerHTML={{ __html: truncatedDescription }} className="mb-4 text-gray-700 dark:text-gray-200" />

                </div>
            </div>
        );
    });