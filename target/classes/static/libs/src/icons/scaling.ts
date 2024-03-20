import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Scaling: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M21 3 9 15' }],
    ['path', { d: 'M12 3H3v18h18v-9' }],
    ['path', { d: 'M16 3h5v5' }],
    ['path', { d: 'M14 15H9v-5' }],
  ],
];

export default Scaling;
