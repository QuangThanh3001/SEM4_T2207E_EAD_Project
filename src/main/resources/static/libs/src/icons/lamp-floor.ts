import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const LampFloor: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M9 2h6l3 7H6l3-7Z' }],
    ['path', { d: 'M12 9v13' }],
    ['path', { d: 'M9 22h6' }],
  ],
];

export default LampFloor;
