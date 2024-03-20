import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const TextQuote: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M17 6H3' }],
    ['path', { d: 'M21 12H8' }],
    ['path', { d: 'M21 18H8' }],
    ['path', { d: 'M3 12v6' }],
  ],
];

export default TextQuote;
