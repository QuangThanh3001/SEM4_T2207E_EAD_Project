import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Microwave: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '20', height: '15', x: '2', y: '4', rx: '2' }],
    ['rect', { width: '8', height: '7', x: '6', y: '8', rx: '1' }],
    ['path', { d: 'M18 8v7' }],
    ['path', { d: 'M6 19v2' }],
    ['path', { d: 'M18 19v2' }],
  ],
];

export default Microwave;
