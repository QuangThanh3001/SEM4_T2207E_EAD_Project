import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const SquareUserRound: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M18 21a6 6 0 0 0-12 0' }],
    ['circle', { cx: '12', cy: '11', r: '4' }],
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
  ],
];

export default SquareUserRound;
