import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CircleUserRound: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M18 20a6 6 0 0 0-12 0' }],
    ['circle', { cx: '12', cy: '10', r: '4' }],
    ['circle', { cx: '12', cy: '12', r: '10' }],
  ],
];

export default CircleUserRound;
