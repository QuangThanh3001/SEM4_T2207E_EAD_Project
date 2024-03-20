import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ToggleRight: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '20', height: '12', x: '2', y: '6', rx: '6', ry: '6' }],
    ['circle', { cx: '16', cy: '12', r: '2' }],
  ],
];

export default ToggleRight;
