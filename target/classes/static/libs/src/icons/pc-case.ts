import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PcCase: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '14', height: '20', x: '5', y: '2', rx: '2' }],
    ['path', { d: 'M15 14h.01' }],
    ['path', { d: 'M9 6h6' }],
    ['path', { d: 'M9 10h6' }],
  ],
];

export default PcCase;
