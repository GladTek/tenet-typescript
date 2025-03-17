import React, { type ReactNode } from 'react';
interface LinkGroupProps {
    header: string;
    children?: ReactNode;
}
export const LinkGroup = ({ children, header }: LinkGroupProps) => {
    return (
        <div>
            <p className="font-semibold tracking-wide text-teal-accent-400">
                {header}
            </p>
            <ul className="mt-2 space-y-2">
                {children}
            </ul>
        </div>
    );
};

