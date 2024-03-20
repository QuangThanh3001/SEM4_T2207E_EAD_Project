import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const GitPullRequestCreate: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '6', cy: '6', r: '3' }],
    ['path', { d: 'M6 9v12' }],
    ['path', { d: 'M13 6h3a2 2 0 0 1 2 2v3' }],
    ['path', { d: 'M18 15v6' }],
    ['path', { d: 'M21 18h-6' }],
  ],
];

export default GitPullRequestCreate;