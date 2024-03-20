import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CaseLower: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '7', cy: '12', r: '3' }],
    ['path', { d: 'M10 9v6' }],
    ['circle', { cx: '17', cy: '12', r: '3' }],
    ['path', { d: 'M14 7v8' }],
  ],
];

export default CaseLower;
