import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PlayCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['polygon', { points: '10 8 16 12 10 16 10 8' }],
  ],
];

export default PlayCircle;
