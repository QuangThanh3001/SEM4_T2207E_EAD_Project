import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const TextCursor: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1' }],
    ['path', { d: 'M7 22h1a4 4 0 0 0 4-4v-1' }],
    ['path', { d: 'M7 2h1a4 4 0 0 1 4 4v1' }],
  ],
];

export default TextCursor;
