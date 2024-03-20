import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const AtSign: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '4' }],
    ['path', { d: 'M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8' }],
  ],
];

export default AtSign;
