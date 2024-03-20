import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Forward: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['polyline', { points: '15 17 20 12 15 7' }],
    ['path', { d: 'M4 18v-2a4 4 0 0 1 4-4h12' }],
  ],
];

export default Forward;