import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

export default {
  docs: {
    'The Basics': ['getting-started'],
  },
  specification: {
    Specification: ['specification'],
  },
  api: {
    APIs: [
      'camel-toolformer',
      {
        type: 'category',
        label: 'Toolformers',
        collapsed: false,
        items: ['camel-toolformer'],
      },
    ],
  },
} satisfies SidebarsConfig;
