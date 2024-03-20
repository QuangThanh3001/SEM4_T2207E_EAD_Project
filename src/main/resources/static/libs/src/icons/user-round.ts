import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const UserRound: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '8', r: '5' }],
    ['path', { d: 'M20 21a8 8 0 0 0-16 0' }],
  ],
];

export default UserRound;
