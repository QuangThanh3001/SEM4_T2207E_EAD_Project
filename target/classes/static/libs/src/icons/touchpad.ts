import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Touchpad: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '20', height: '16', x: '2', y: '4', rx: '2' }],
    ['path', { d: 'M2 14h20' }],
    ['path', { d: 'M12 20v-6' }],
  ],
];

export default Touchpad;
