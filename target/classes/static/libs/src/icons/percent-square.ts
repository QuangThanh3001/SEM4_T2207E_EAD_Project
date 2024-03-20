import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PercentSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'm15 9-6 6' }],
    ['path', { d: 'M9 9h.01' }],
    ['path', { d: 'M15 15h.01' }],
  ],
];

export default PercentSquare;
