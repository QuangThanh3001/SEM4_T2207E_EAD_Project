import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Pipette: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'm2 22 1-1h3l9-9' }],
    ['path', { d: 'M3 21v-3l9-9' }],
    [
      'path',
      {
        d: 'm15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z',
      },
    ],
  ],
];

export default Pipette;
