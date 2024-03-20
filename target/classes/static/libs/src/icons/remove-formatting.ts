import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const RemoveFormatting: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M4 7V4h16v3' }],
    ['path', { d: 'M5 20h6' }],
    ['path', { d: 'M13 4 8 20' }],
    ['path', { d: 'm15 15 5 5' }],
    ['path', { d: 'm20 15-5 5' }],
  ],
];

export default RemoveFormatting;