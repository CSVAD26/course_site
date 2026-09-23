import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MAT 236',
  tagline: 'Computational Systems for Visual Art and Design',
  favicon: 'img/stepdance-ico.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://csvad26.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/course_site/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pixelmaid', // Usually your GitHub org/user name.
  projectName: 'csvad26', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  staticDirectories: ['static'],

  markdown: {
    preprocessor: ({fileContent}) =>
      fileContent.replace(/!\[([^\]]*)\]\(\/doc\/images\//g, '![$1](/images/'),
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: false,
          editUrl: 'https://github.com/CSVAD26/course_site/tree/main/doc/',
        },
        
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/CSVAD26/course_site/tree/main/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/stepdance-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      items: [
        {
          to: '/',
          position: 'left',
          label: 'Computational Systems for Visual Art and Design',
        },
        {
          type: 'dropdown',
          label: 'Schedule',
          position: 'left',
          items: [
            {to: '/schedule', label: 'Schedule Overview'},
            {to: '/schedule/week-1-hello-world', label: 'Week 1: Hello World'},
            {to: '/schedule/week-2-composition', label: 'Week 2: Composition'},
            {to: '/schedule/week-3-motion', label: 'Week 3: Motion'},
            {to: '/schedule/week-4-project-1-review-user-interface', label: 'Week 4: Project 1 Review / User Interface'},
            {to: '/schedule/week-5-creative-data-viz', label: 'Week 5: Creative Data Viz'},
            {to: '/schedule/week-8-generativity', label: 'Week 7: Generativity'},
            {to: '/schedule/week-7-abstraction', label: 'Week 8: Abstraction'},
            {to: '/schedule/week-9-final-project-proposals', label: 'Week 9: Final Project Proposals'},
            {to: '/schedule/week-10-final-project-presentations', label: 'Week 10: Final Project Presentations'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Assignments',
          position: 'left',
          items: [
            {to: '/assignments', label: 'Assignments Overview'},
            {to: '/assignments/mini-assignment-1', label: 'Mini Assignment 1'},
            {to: '/assignments/mini-assignment-2', label: 'Mini Assignment 2'},
            {to: '/assignments/mini-assignment-3', label: 'Mini Assignment 3'},
            {to: '/assignments/mini-assignment-4', label: 'Mini Assignment 4'},
            {to: '/assignments/mini-assignment-5', label: 'Mini Assignment 5'},
            {to: '/assignments/project-1', label: 'Project 1'},
            {to: '/assignments/project-2', label: 'Project 2'},
            {to: '/assignments/final-project', label: 'Final Project'},
          ],
        },
        {
          to: '/code-of-conduct',
          label: 'Code of Conduct',
          position: 'left',
        },
        {
          href: 'https://drive.google.com/drive/folders/1D8l-u9do5R-WJO3_2hyC6LD6qD5RYk-F?usp=drive_link',
          label: 'Class Drive',
          position: 'right',
        },
        {
          href: 'https://github.com/CSVAD26',
          label: 'Class GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/CSVAD26'
              ,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jennifer Jacobs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
