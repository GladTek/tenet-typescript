import { jahiaComponent } from "@jahia/javascript-modules-library";
import type { SceneProps } from "../types";

jahiaComponent(
    {
        nodeType: "tenet:scene",
        componentType: "view",
    }, ({ "jcr:title": title, description, image, day }: SceneProps) => {

        return (
            <>
                <div>{title}</div>
                <section className="bg-white py-[10px] dark:bg-dark">
                    <div className="grid gap-8 grid-cols-2 mx-auto px-4 sm:container">
                    </div>
                </section>
            </>
        );
    });