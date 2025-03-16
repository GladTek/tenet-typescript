import { getNodeProps, jahiaComponent, useUrlBuilder } from "@jahia/javascript-modules-library";

import type { TestimonialProps } from "./types.js";
import Rating from "../../shared/Rating/Rating.jsx";
jahiaComponent(
  {
    nodeType: "tenet:testimonial",
    componentType: "view",
  },
  ({ character, rating, message }: TestimonialProps, { currentNode }) => {
    const testimonialCharacter = getNodeProps(character, ['name', 'image', 'function']);
    return (
      <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
        <div dangerouslySetInnerHTML={{ __html: message }} className="leading-loose text-gray-500 dark:text-gray-400" />
        <div className="mt-6">
          <Rating rating={rating} />
        </div>
        <div className="flex items-center mt-6 -mx-2">
          <img loading="lazy"
            alt={`Testimonial ${testimonialCharacter.name}`}
            className="mx-2 rounded-full w-14 h-14"
            src={testimonialCharacter.image?.getUrl()}
          />
          <div className="mx-2">
            <h1 className="font-semibold text-gray-800 dark:text-white">
              {testimonialCharacter.name}
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {testimonialCharacter.function}
            </span>
          </div>
        </div>
      </div>
    );
  },
);
