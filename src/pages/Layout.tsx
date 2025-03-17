import { AddResources, useServerContext, useUrlBuilder } from "@jahia/javascript-modules-library";
import type { ReactNode } from "react";
import "./global.css";
import RandomButtonClasses from "../components/shared/RandomButtonClasses";
/** Places `children` in an html page. */
export const Layout = ({ title, children }: { title: string; children: ReactNode }) => {
  const { buildStaticUrl } = useUrlBuilder();
  const { currentResource } = useServerContext();
  const lang = currentResource.getLocale().getLanguage();
  return (
    <html lang={lang}>
      <head>
        <AddResources
          type="css"
          resources={buildStaticUrl({ assetPath: "../dist/server/style.css" })}
        />
        <AddResources
          type="css"
          resources="https://rsms.me/inter/inter.css" />
        <title>{title}</title>
      </head>
      <body>
        {children}</body>
    </html>
  );
};
