import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const GitPullRequestCreateArrow: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '5', cy: '6', r: '3' }],
    ['path', { d: 'M5 9v12' }],
    ['path', { d: 'm15 9-3-3 3-3' }],
    ['path', { d: 'M12 6h5a2 2 0 0 1 2 2v3' }],
    ['path', { d: 'M19 15v6' }],
    ['path', { d: 'M22 18h-6' }],
  ],
];

export default GitPullRequestCreateArrow;
