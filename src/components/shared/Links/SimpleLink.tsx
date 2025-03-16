import React from 'react';
import type { LinkProps } from './types';

const SimpleLink = ({ link, label, title, ariaLabel, target, className, children }: LinkProps) => {
    return (
        <a
            href={link}
            className={className}
            target={target}
            title={title}
            aria-label={ariaLabel}
        >
            {label}
            {children}
        </a>
    );
};
export default SimpleLink;
