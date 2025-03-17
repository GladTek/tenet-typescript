import { jahiaComponent } from "@jahia/javascript-modules-library";

import type { LocationProps } from "./types.js";
import { useTranslation } from "react-i18next";
import SimpleLink from "../shared/Links/SimpleLink.jsx";
import truncate from "truncate-html";
import Flag from 'react-world-flags'
jahiaComponent(
  {
    nodeType: "tenet:location",
    componentType: "view",
    name: "data"
  },
  ({ "jcr:title": title, description, country }: LocationProps, { currentNode }) => {



    const { t } = useTranslation();

    const isLongVersion = false;


    const descriptionStr = isLongVersion ? description : truncate(description, 200, { stripTags: true }) || '';

    return (
      <>
        <div>
          <div className="max-w-6 max-h-4 mb-4"><Flag code={country} /></div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            {t(`countries.${country}`)}
          </p>
        </div>
        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl dark:text-white">
          {title}
        </h5>
        <div dangerouslySetInnerHTML={{ __html: descriptionStr }} className="mb-5 text-gray-800 dark:text-gray-200" />
        {!isLongVersion && <SimpleLink link={currentNode.getUrl()}><button type="button" className="bg-green-700  inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none">{t('learnMore')}</button></SimpleLink>}
      </>
    );
  });
