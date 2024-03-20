import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const School2: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '10', r: '1' }],
    ['path', { d: 'M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z' }],
    ['path', { d: 'M6 17v.01' }],
    ['path', { d: 'M6 13v.01' }],
    ['path', { d: 'M18 17v.01' }],
    ['path', { d: 'M18 13v.01' }],
    ['path', { d: 'M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5' }],
  ],
];

export default School2;