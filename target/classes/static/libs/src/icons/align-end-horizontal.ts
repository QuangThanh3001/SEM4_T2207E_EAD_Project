import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const AlignEndHorizontal: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '6', height: '16', x: '4', y: '2', rx: '2' }],
    ['rect', { width: '6', height: '9', x: '14', y: '9', rx: '2' }],
    ['path', { d: 'M22 22H2' }],
  ],
];

export default AlignEndHorizontal;
