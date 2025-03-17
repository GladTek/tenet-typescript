import { AddContentButtons, jahiaComponent, Render } from "@jahia/javascript-modules-library";

import type { LocationProps } from "./types.js";
jahiaComponent(
  {
    nodeType: "tenet:location",
    componentType: "view",
  },
  //({ "jcr:title": title, description, image, country }: LocationProps, { currentNode, renderContext, currentResource }) => {
  ({ image }: LocationProps, { currentNode }) => {

    const imageProp = {
      src: image.getUrl(),
      alt: 'Placeholder'
    };

    return (
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-8">
        <div className="flex rtl:flex-row-reverse flex-col max-w-screen-lg overflow-hidden border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={imageProp.src}
              alt={imageProp.alt}
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 rtl:left-0 hidden h-full text-white dark:text-slate-800 lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-16 lg:pl-10 lg:w-1/2">
            <Render node={currentNode} view="data" editable={false} />
          </div>
        </div>
        <Render node={currentNode} view="scenes" editable={false} />
        <AddContentButtons />

      </div>
    );
  });
