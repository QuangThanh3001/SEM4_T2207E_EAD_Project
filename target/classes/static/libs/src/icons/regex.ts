import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Regex: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M17 3v10' }],
    ['path', { d: 'm12.67 5.5 8.66 5' }],
    ['path', { d: 'm12.67 10.5 8.66-5' }],
    ['path', { d: 'M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z' }],
  ],
];

export default Regex;
