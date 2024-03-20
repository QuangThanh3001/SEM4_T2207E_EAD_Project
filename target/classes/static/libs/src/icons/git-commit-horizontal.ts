import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const GitCommitHorizontal: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '3' }],
    ['line', { x1: '3', x2: '9', y1: '12', y2: '12' }],
    ['line', { x1: '15', x2: '21', y1: '12', y2: '12' }],
  ],
];

export default GitCommitHorizontal;