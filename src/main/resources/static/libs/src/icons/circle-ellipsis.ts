import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CircleEllipsis: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'M17 12h.01' }],
    ['path', { d: 'M12 12h.01' }],
    ['path', { d: 'M7 12h.01' }],
  ],
];

export default CircleEllipsis;
