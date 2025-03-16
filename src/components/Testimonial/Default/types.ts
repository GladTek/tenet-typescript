import type { JCRNodeWrapper } from "org.jahia.services.content";

export interface TestimonialProps {
    "character": JCRNodeWrapper;
    "rating": number;
    'message': string;
}