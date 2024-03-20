import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Pilcrow: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M13 4v16' }],
    ['path', { d: 'M17 4v16' }],
    ['path', { d: 'M19 4H9.5a4.5 4.5 0 0 0 0 9H13' }],
  ],
];

export default Pilcrow;
