import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Diff: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M12 3v14' }],
    ['path', { d: 'M5 10h14' }],
    ['path', { d: 'M5 21h14' }],
  ],
];

export default Diff;
