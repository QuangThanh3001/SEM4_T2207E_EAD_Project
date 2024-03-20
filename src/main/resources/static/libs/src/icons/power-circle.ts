import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const PowerCircle: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'M12 12V6' }],
    ['path', { d: 'M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5' }],
  ],
];

export default PowerCircle;
