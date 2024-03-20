import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const SquareDot: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['circle', { cx: '12', cy: '12', r: '1' }],
  ],
];

export default SquareDot;
