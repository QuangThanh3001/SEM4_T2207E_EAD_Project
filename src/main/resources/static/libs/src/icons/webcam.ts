import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Webcam: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '10', r: '8' }],
    ['circle', { cx: '12', cy: '10', r: '3' }],
    ['path', { d: 'M7 22h10' }],
    ['path', { d: 'M12 22v-4' }],
  ],
];

export default Webcam;
