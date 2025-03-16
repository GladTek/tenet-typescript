import type { ReactNode } from "react";

export interface LinkProps {
    link: string;
    label?: string;
    title?: string;
    ariaLabel?: string;
    target?: string;
    className?: string;
    children?: ReactNode;
}