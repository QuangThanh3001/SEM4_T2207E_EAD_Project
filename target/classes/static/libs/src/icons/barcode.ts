import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Barcode: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M3 5v14' }],
    ['path', { d: 'M8 5v14' }],
    ['path', { d: 'M12 5v14' }],
    ['path', { d: 'M17 5v14' }],
    ['path', { d: 'M21 5v14' }],
  ],
];

export default Barcode;
