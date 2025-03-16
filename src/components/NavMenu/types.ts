import type { JCRNodeWrapper } from "org.jahia.services.content";

export interface NavMenuProps {
    base: string;
    maxDepth: number;
    startLevel: number;
    menuItemView: string;
    logo: JCRNodeWrapper;
}