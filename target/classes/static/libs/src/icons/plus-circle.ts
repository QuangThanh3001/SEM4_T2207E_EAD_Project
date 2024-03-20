import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PlusCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'M8 12h8' }],
    ['path', { d: 'M12 8v8' }],
  ],
];

export default PlusCircle;
