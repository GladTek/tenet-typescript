import type { JCRNodeWrapper } from "org.jahia.services.content";

export interface LocationProps {
    "jcr:title": string;
    description: string;
    image: JCRNodeWrapper;
    country: string
}