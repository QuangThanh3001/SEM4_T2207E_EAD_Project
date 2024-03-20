import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Split: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M16 3h5v5' }],
    ['path', { d: 'M8 3H3v5' }],
    ['path', { d: 'M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3' }],
    ['path', { d: 'm15 9 6-6' }],
  ],
];

export default Split;
