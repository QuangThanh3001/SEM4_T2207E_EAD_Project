import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Plus: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M5 12h14' }],
    ['path', { d: 'M12 5v14' }],
  ],
];

export default Plus;
