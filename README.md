# shadcn-registry-template

> Easily distribute your own registry for shadcn components.

shadcn 2 and later allow installing components from a custom registry like `npx shadcn-ui@latest add https://raw.githubusercontent.com/vantezzen/auto-form/main/registry/auto-form.json`. This template allows you to easily create your own registry for your components.

- [x] Demo page for developing components
- [x] Automatic registry generation
- [x] Automatic GitHub Pages deployment

## Demo

Install the `cool-text` component from this registry:

```bash
npx shadcn@latest add https://raw.githubusercontent.com/vantezzen/shadcn-registry-template/main/registry/cool-text.json
```

or view the custom components on the [demo page](https://vantezzen.github.io/shadcn-registry-template/).

## Usage

1. Use the template by clicking the green "Use this template" button on the top right of the page.
2. Clone the repository to your local machine.
3. Edit `package.json` to include your own information. Most importantly, change the `repository` field to your own GitHub repository URL.
4. Run `npm run dev` to develop components locally. You can add your components to the `src/components/ui` directory.
5. Edit `registry.ts`. See [Registry Configuration](#registry-configuration) for more information.
6. Run `npm run build` to build the registry and push your changes to GitHub to deploy the registry.

## Registry Configuration

The registry is configured in `registry.ts`. The registry is an array of "registries", each object representing a component. Don't worry, the registry has TypeScript support, so you'll get autocompletion and type checking to make sure your registry is valid.

The syntax of this file uses the same syntax as `shadcn` requires for the final registries. Each object in the array can have the following fields:

- `name`: The name of the component.
- `description` (optional): A description of the component.
- `type`: The type of the component. This can be `registry:ui` (general ui components, in `/src/components/ui`) or `registry:component` (specific components, in `/src/components`).
- `registryDependencies` (optional): An array of shadcn component dependencies for the component. This is an array of strings, each string being the shadcn name of a component that this component depends on.
- `dependencies` and `devDependencies` (optional): An array of npm dependencies for the component. This is an array of strings, each string being the name of an npm package that this component depends on.
- `tailwind` (optional): Tailwind Config that needs to be added when installing
- `cssVars` (optional): CSS Variables that needs to be added when installing
- `files`: An array of file names that should be included when installing the component. This is an array of strings of file names, relative to the component's directory (`/src/components` or `/src/components/ui`, depending on what `type` you added).
  Alternatively, you can provide raw file contents by using an object that conforms to the shadcn registry format.

## Commands

- `npm run dev`: Start the development server. This will simply start a vite server so you can develop your components locally.
- `npm run build`: Build the registry. This will build the registry and output it to the `build` directory. This will also output information on where the registry is located and how users can install it - you should probably copy this information to your README.
- `npm run build:demo`: Build the demo.
- `npm run lint`
- `npm run dev:server`: Starts a server to host your registry locally. This is useful for testing the registry locally and installing in another project.
