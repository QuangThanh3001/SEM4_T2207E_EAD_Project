import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Cylinder: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }],
    ['path', { d: 'M3 5v14a9 3 0 0 0 18 0V5' }],
  ],
];

export default Cylinder;
