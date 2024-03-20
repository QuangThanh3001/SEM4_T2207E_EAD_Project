import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MoveDownLeft: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M11 19H5V13' }],
    ['path', { d: 'M19 5L5 19' }],
  ],
];

export default MoveDownLeft;
