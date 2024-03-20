import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ListEnd: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M16 12H3' }],
    ['path', { d: 'M16 6H3' }],
    ['path', { d: 'M10 18H3' }],
    ['path', { d: 'M21 6v10a2 2 0 0 1-2 2h-5' }],
    ['path', { d: 'm16 16-2 2 2 2' }],
  ],
];

export default ListEnd;
