import type { JCRNodeWrapper } from "org.jahia.services.content";

export interface SceneProps {
    "jcr:title": string;
    description: string;
    day: number;
    image: JCRNodeWrapper;
}