import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowDownToLine: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M12 17V3' }],
    ['path', { d: 'm6 11 6 6 6-6' }],
    ['path', { d: 'M19 21H5' }],
  ],
];

export default ArrowDownToLine;
