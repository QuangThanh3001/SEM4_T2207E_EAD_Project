import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Flashlight: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z' }],
    ['line', { x1: '6', x2: '18', y1: '6', y2: '6' }],
    ['line', { x1: '12', x2: '12', y1: '12', y2: '12' }],
  ],
];

export default Flashlight;
