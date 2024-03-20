import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Keyboard: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '20', height: '16', x: '2', y: '4', rx: '2', ry: '2' }],
    ['path', { d: 'M6 8h.001' }],
    ['path', { d: 'M10 8h.001' }],
    ['path', { d: 'M14 8h.001' }],
    ['path', { d: 'M18 8h.001' }],
    ['path', { d: 'M8 12h.001' }],
    ['path', { d: 'M12 12h.001' }],
    ['path', { d: 'M16 12h.001' }],
    ['path', { d: 'M7 16h10' }],
  ],
];

export default Keyboard;
