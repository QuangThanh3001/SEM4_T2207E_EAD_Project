import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Scale3d: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '19', cy: '19', r: '2' }],
    ['circle', { cx: '5', cy: '5', r: '2' }],
    ['path', { d: 'M5 7v12h12' }],
    ['path', { d: 'm5 19 6-6' }],
  ],
];

export default Scale3d;
