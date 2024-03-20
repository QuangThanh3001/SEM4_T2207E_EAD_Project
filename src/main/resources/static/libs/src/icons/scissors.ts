import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Scissors: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '6', cy: '6', r: '3' }],
    ['path', { d: 'M8.12 8.12 12 12' }],
    ['path', { d: 'M20 4 8.12 15.88' }],
    ['circle', { cx: '6', cy: '18', r: '3' }],
    ['path', { d: 'M14.8 14.8 20 20' }],
  ],
];

export default Scissors;
