/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'doc',
      label: 'About Stately and XState',
      id: 'about',
    },
    {
      type: 'category',
      label: 'Get started',
      link: {
        type: 'generated-index',
        title: 'Get started',
        description: 'Get started quickly with XState and Stately Studio.',
        slug: '/category/get-started',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: [
        'quick-start',
        {
          type: 'doc',
          label: 'Install XState',
          id: 'installation',
        },
        {
          type: 'doc',
          label: 'Migrate to XState v5',
          id: 'migration',
        },
        {
          type: 'doc',
          label: 'Examples',
          id: 'examples',
        },
        'templates',
        'cheatsheet',
        'typescript',
        {
          type: 'link',
          label: 'API',
          // href: 'https://tsdocs.dev/docs/xstate',
          href: 'https://www.jsdocs.io/package/xstate',
        },
      ],
    },
    {
      type: 'category',
      label: 'Core concepts',
      link: {
        type: 'generated-index',
        title: 'Core concepts',
        description: 'Learn the core concepts for XState and Stately Studio.',
        slug: '/category/core-concepts',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: 'doc',
          label: 'State machines',
          id: 'state-machines-and-statecharts',
        },
        {
          type: 'doc',
          label: 'Actor model',
          id: 'actor-model',
        },
        {
          type: 'doc',
          label: 'What is XState?',
          id: 'xstate',
        },
      ],
    },
    {
      type: 'category',
      label: 'Stately Studio',
      link: {
        type: 'generated-index',
        title: 'Stately Studio',
        description: 'Learn how to use Stately Studio’s editor.',
        slug: '/category/studio',
        keywords: ['guides'],
      },
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'doc',
          label: 'Introducing Stately Studio',
          id: 'studio',
        },
        {
          type: 'doc',
          label: 'Stately Studio Pro',
          id: 'studio-pro-plan',
        },
        {
          type: 'doc',
          label: 'Stately Studio Team',
          id: 'studio-team-plan',
        },
        {
          type: 'doc',
          label: 'Stately Studio Enterprise',
          id: 'studio-enterprise-plan',
        },
        {
          type: 'doc',
          label: 'Stately Studio Community',
          id: 'studio-community-plan',
        },
        {
          type: 'doc',
          label: 'States and transitions',
          id: 'editor-states-and-transitions',
        },
        {
          type: 'doc',
          label: 'Actions and actors',
          id: 'editor-actions-and-actors',
        },
        {
          type: 'category',
          label: 'Design mode',
          link: {
            type: 'doc',
            id: 'design-mode',
          },
          items: [
            {
              type: 'doc',
              label: 'Generate with AI',
              id: 'generate-flow',
            },
            {
              type: 'doc',
              label: 'Generate React app',
              id: 'generate-react',
            },
            {
              type: 'doc',
              label: 'Colors',
              id: 'colors',
            },
            {
              type: 'doc',
              label: 'Notes',
              id: 'annotations',
            },
            'descriptions',
            {
              type: 'doc',
              label: 'Embed Figma',
              id: 'figma',
            },
            {
              type: 'doc',
              label: 'Assets',
              id: 'assets',
            },
            {
              type: 'doc',
              label: 'Tags',
              id: 'editor-tags',
            },
            'machine-restore',
            'autolayout',
          ],
        },
        {
          type: 'category',
          label: 'Simulate mode',
          link: {
            type: 'doc',
            id: 'simulate-mode',
          },
          items: [
            {
              type: 'doc',
              label: 'Live simulation',
              id: 'live-simulation',
            },
          ],
        },
        {
          type: 'category',
          label: 'Code',
          link: {
            type: 'generated-index',
            title: 'Code',
            description: 'Learn how to use Stately Studio’s code.',
            slug: '/category/code',
            keywords: ['guides'],
          },
          collapsed: true,
          collapsible: true,
          items: [
            'import-from-code',
            'import-from-github',
            'generate-test-paths',
            'sources',
            'export-as-code',
          ],
        },
        'projects',
        {
          type: 'category',
          label: 'Stately Sky',
          link: {
            type: 'doc',
            id: 'stately-sky-getting-started',
          },
          items: [
            {
              type: 'doc',
              label: 'Getting started',
              id: 'stately-sky-getting-started',
            },
          ],
        },
        {
          type: 'doc',
          label: 'Teams',
          id: 'teams',
        },
        'discover',
        {
          type: 'category',
          label: 'Share',
          link: {
            type: 'generated-index',
            title: 'Share',
            description:
              'Learn how to share machines created in Stately Studio.',
            slug: '/category/share',
            keywords: ['guides'],
          },
          items: [
            {
              type: 'doc',
              label: 'Embed URL',
              id: 'embed',
            },
            {
              type: 'doc',
              label: 'Image URL',
              id: 'image',
            },
            {
              type: 'doc',
              label: 'Share URL',
              id: 'url',
            },
          ],
        },
        {
          type: 'category',
          label: 'Accounts',
          link: {
            type: 'generated-index',
            title: 'Stately Studio accounts',
            description:
              'Learn about Stately Studio plans and how to manage your account.',
            slug: '/category/accounts',
            keywords: ['guides'],
          },
          items: [
            {
              type: 'doc',
              label: 'Sign up',
              id: 'sign-up',
            },
            {
              type: 'doc',
              label: 'Upgrade',
              id: 'upgrade',
            },
          ],
        },
        {
          type: 'doc',
          label: 'Version history',
          id: 'versions',
        },
        {
          type: 'doc',
          label: 'Lock machines',
          id: 'lock-machines',
        },
        'keyboard-shortcuts',
        'canvas-view-controls',
        'user-preferences',
        'studio-api',
      ],
    },
    {
      type: 'category',
      label: 'Actors',
      link: {
        type: 'generated-index',
        title: 'Actors',
        description:
          'Learn how to use actors and the actor model in XState and Stately Studio.',
        slug: '/category/actors',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: [
        'actors',
        'state-machine-actors',
        'promise-actors',
        'transition-actors',
        'callback-actors',
        'observable-actors',
        'invoke',
        'spawn',
        'system',
        'inspection',
      ],
    },
    {
      type: 'category',
      label: 'State machines',
      link: {
        type: 'generated-index',
        title: 'State machines',
        description:
          'Learn how to use state machines in XState and Stately Studio.',
        slug: '/category/state-machines',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: [
        'machines',
        'setup',
        'states',
        'context',
        'input',
        'output',
        'transitions',
        'eventless-transitions',
        'delayed-transitions',
        'actions',
        'guards',
        'initial-states',
        'finite-states',
        'parent-states',
        'parallel-states',
        'final-states',
        'history-states',
        'persistence',
        'tags',
        'event-emitter',
      ],
    },
    {
      type: 'category',
      label: 'Agents',
      link: {
        type: 'generated-index',
        title: 'Agents',
        description:
          'Learn how to use AI agents with XState and Stately Studio.',
        slug: '/category/agents',
        keywords: ['agents'],
      },
      collapsed: true,
      collapsible: true,
      items: ['agents'],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
        title: 'Guides',
        description:
          'These guides cover different aspects such as using XState with immer, testing strategies, and other upcoming guides that will be added in the future. The purpose of these guides is to provide users with in-depth knowledge and practical examples to effectively utilize XState in their projects.',
        slug: '/category/guides',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: ['testing', 'immer'],
    },
    {
      type: 'category',
      label: 'Packages',
      link: {
        type: 'generated-index',
        title: 'Packages',
        description: 'Find all the packages in XState.',
        slug: '/category/xstate-packages',
        keywords: ['guides'],
      },
      collapsed: true,
      collapsible: true,
      items: [
        'xstate-react',
        'xstate-vue',
        'xstate-svelte',
        'xstate-graph',
        'xstate-test',
      ],
    },
    {
      type: 'category',
      label: 'Developer tools',
      collapsed: false,
      collapsible: true,
      link: {
        type: 'generated-index',
        title: 'Stately developer tools',
        description:
          'Find all the developer tools you can use with XState and Stately Studio’s editor.',
        slug: '/category/developer-tools',
        keywords: ['guides'],
      },
      items: [
        'xstate-vscode-extension',
        'visualizer',
        'inspector',
        {
          type: 'doc',
          label: 'Other tools',
          id: 'developer-tools',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Glossary',
      id: 'glossary',
    },
  ],
};

module.exports = sidebars;
