import type { JCRNodeWrapper } from "org.jahia.services.content";

export interface CharacterProps {
    name: string;
    function: string;
    description: string;
    image: JCRNodeWrapper;
}