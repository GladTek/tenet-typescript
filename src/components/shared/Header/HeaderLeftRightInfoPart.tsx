import React from 'react';
type HeaderLeftRightInfoPartProps = {

    children: React.ReactNode;
}
export const HeaderLeftRightInfoPart = ({ children }: HeaderLeftRightInfoPartProps) => {
    return (
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                {children}
            </div>
        </div>
    );
};


export default HeaderLeftRightInfoPart;
