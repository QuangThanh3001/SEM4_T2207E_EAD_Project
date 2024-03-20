import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const SquareDashedBottomCode: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'm10 10-2 2 2 2' }],
    ['path', { d: 'm14 14 2-2-2-2' }],
    ['path', { d: 'M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2' }],
    ['path', { d: 'M9 21h1' }],
    ['path', { d: 'M14 21h1' }],
  ],
];

export default SquareDashedBottomCode;
