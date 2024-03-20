import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const GitPullRequestClosed: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '6', cy: '6', r: '3' }],
    ['path', { d: 'M6 9v12' }],
    ['path', { d: 'm21 3-6 6' }],
    ['path', { d: 'm21 9-6-6' }],
    ['path', { d: 'M18 11.5V15' }],
    ['circle', { cx: '18', cy: '18', r: '3' }],
  ],
];

export default GitPullRequestClosed;