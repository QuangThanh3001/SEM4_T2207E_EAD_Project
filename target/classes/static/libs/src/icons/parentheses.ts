import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Parentheses: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M8 21s-4-3-4-9 4-9 4-9' }],
    ['path', { d: 'M16 3s4 3 4 9-4 9-4 9' }],
  ],
];

export default Parentheses;
