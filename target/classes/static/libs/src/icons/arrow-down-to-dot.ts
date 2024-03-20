import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ArrowDownToDot: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M12 2v14' }],
    ['path', { d: 'm19 9-7 7-7-7' }],
    ['circle', { cx: '12', cy: '21', r: '1' }],
  ],
];

export default ArrowDownToDot;
