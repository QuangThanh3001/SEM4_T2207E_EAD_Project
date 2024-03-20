import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PilcrowSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M12 12H9.5a2.5 2.5 0 0 1 0-5H17' }],
    ['path', { d: 'M12 7v10' }],
    ['path', { d: 'M16 7v10' }],
  ],
];

export default PilcrowSquare;
