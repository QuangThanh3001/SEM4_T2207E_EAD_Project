import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const DoorClosed: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14' }],
    ['path', { d: 'M2 20h20' }],
    ['path', { d: 'M14 12v.01' }],
  ],
];

export default DoorClosed;
