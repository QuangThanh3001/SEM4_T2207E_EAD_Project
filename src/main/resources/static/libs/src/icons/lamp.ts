import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Lamp: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M8 2h8l4 10H4L8 2Z' }],
    ['path', { d: 'M12 12v6' }],
    ['path', { d: 'M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z' }],
  ],
];

export default Lamp;