import React from 'react';
import HeaderLeftRightImagePart from './HeaderLeftRightImagePart';
import HeaderLeftRightInfoPart from './HeaderLeftRightInfoPart';
type HeaderLeftRightComponentProps = {
    image: {
        src: string;
        alt: string;
    };
    children: React.ReactNode;
}
export const HeaderLeftRightComponent = ({ image, children }: HeaderLeftRightComponentProps) => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">

            <HeaderLeftRightImagePart image={image} />
            <HeaderLeftRightInfoPart>
                {children}
            </HeaderLeftRightInfoPart>
        </div>
    );
};

export default HeaderLeftRightComponent;
