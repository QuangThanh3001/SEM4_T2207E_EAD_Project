import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const StopCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['rect', { width: '6', height: '6', x: '9', y: '9' }],
  ],
];

export default StopCircle;
