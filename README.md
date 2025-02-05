# Migrate Figjam Colors

A simple utility plugin to update colors on your older FigJam files to the new FigJam colors launced on Feb 4.

## Getting Started

This plugin is written using [TypeScript][ts] to take advantage of Figma's typed plugin API. If you want to build this locally, you'll need to compile the code using the TypeScript compiler. Typescript can also watch your code for changes as you're developing, making it easy to test new changes to your code in Figma.

To install TypeScript, first [install Node.js][node]. Then:

    $ npm install -g typescript

Next install the packages that the plugin depends on. Currently, this will only install the latest version of the Figma typings file. Most of the samples will reference this shared typings file in their `tsconfig.json`.

    $ npm install

Now, to compile the Update Colors plugin (for example):

    $ tsc

Now you can import the Update Figma UI3 Colors plugin from within the Figma desktop app (`Plugins > Development > Import plugin from manifest...` from the right-click menu)!

The code for each plugin is in `code.ts` in that plugin's subdirectory.
