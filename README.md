# TENET for Jahia in Typescript

> [!CAUTION]
> Deprecated with the release of **@jahia/javascript-modules-library 0.6.0**.
> The module with 0.6.0+ will be updated in a separate **private module**.
> 
> Version is still in early stage (Need more Client Side complex cases to fully adopt it)

Client Library Targets for client usecases: 
- https://headlessui.com/
- https://motion.dev/

(Code isn't that perfect, I am just a Backend guy)

- This should be compatible with the website created in https://hub.docker.com/repository/docker/achaabni/jahia-tenet
- Vite instead of Webpack
- Tailwind became easier to install with Vite and straight forward with V4 + Vite (done need tweak for colors and options).
- Hydration is still in process (meanwhile convert most to server)
- Ask about multiple integration of third party client react librairies (HeadlessUI, Mantine, Carrousel, Swipers, Sliders ) and how to tweak every case (most of librairies are still incompatible or I did not configure it well (mjs, EsNext, ...) ?)
- Previous Website Export need to work with less change to the definitions.
- Update screens in iterations (Priority to characters, scenes, locations)

## Development

1. To compile and package the project:

```
yarn build
```

2. To deploy the generated package to your Jahia instance (configured in your [`.env`](.env)):

```
yarn deploy
```

3. Alternatively, to deploy during development using watch mode:

```
yarn watch
```
