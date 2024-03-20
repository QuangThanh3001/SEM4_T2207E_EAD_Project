import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Contrast: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '10' }],
    ['path', { d: 'M12 18a6 6 0 0 0 0-12v12z' }],
  ],
];

export default Contrast;
