import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PercentCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'm15 9-6 6' }],
    ['path', { d: 'M9 9h.01' }],
    ['path', { d: 'M15 15h.01' }],
  ],
];

export default PercentCircle;
