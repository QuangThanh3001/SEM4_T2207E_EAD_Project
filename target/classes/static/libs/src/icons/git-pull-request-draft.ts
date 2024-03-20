import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const GitPullRequestDraft: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '18', cy: '18', r: '3' }],
    ['circle', { cx: '6', cy: '6', r: '3' }],
    ['path', { d: 'M18 6V5' }],
    ['path', { d: 'M18 11v-1' }],
    ['line', { x1: '6', x2: '6', y1: '9', y2: '21' }],
  ],
];

export default GitPullRequestDraft;
