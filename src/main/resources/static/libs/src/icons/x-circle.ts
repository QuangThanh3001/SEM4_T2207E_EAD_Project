import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const XCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'm15 9-6 6' }],
    ['path', { d: 'm9 9 6 6' }],
  ],
];

export default XCircle;
