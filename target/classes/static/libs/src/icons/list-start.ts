import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ListStart: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M16 12H3' }],
    ['path', { d: 'M16 18H3' }],
    ['path', { d: 'M10 6H3' }],
    ['path', { d: 'M21 18V8a2 2 0 0 0-2-2h-5' }],
    ['path', { d: 'm16 8-2-2 2-2' }],
  ],
];

export default ListStart;
