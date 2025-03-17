import React from 'react';
import SimpleLink from '../Links/SimpleLink';
import type { JCRNodeWrapper } from 'org.jahia.services.content';
import { useUrlBuilder } from '@jahia/javascript-modules-library';

interface Props {
    name: string;
    description?: string;
    role: string;
    image: JCRNodeWrapper;
    url: string;
}
export const CharacterImageCard = ({ name, description, role, image, url }: Props) => {
    const { buildNodeUrl } = useUrlBuilder();
    return (
        <SimpleLink link={url} title={name} ariaLabel={name} className={''}>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={buildNodeUrl({ nodePath: image.getPath() })} alt={image.getPropertyAsString("alt")}
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                        {name}
                    </p>
                    <p className="mb-4 text-xs text-gray-100">{role}</p>
                    {description && <div dangerouslySetInnerHTML={{ __html: description }} className="mb-4 text-xs tracking-wide text-gray-400" />}
                </div>
            </div>
        </SimpleLink>
    );
};
