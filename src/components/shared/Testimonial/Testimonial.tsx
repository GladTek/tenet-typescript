import type { TestimonialProps } from './types';
import Rating from '../Rating/Rating';
const Testimonial = ({ rating, message, image, fullname, "function": role }: TestimonialProps) => {
    const messageDiv = <div dangerouslySetInnerHTML={{ __html: message }} className="leading-loose text-gray-500 dark:text-gray-400" />;
    return (
        <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
            {messageDiv}
            <div className="mt-6">
                <Rating rating={rating} />
            </div>
            <div className="flex items-center mt-6 -mx-2">
                <img loading="lazy"
                    alt={`Testimonial ${fullname}`}
                    className="mx-2 rounded-full w-14 h-14"
                    src={image}
                />
                <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                        {fullname}
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {role}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

