import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const RailSymbol: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M5 15h14' }],
    ['path', { d: 'M5 9h14' }],
    ['path', { d: 'm14 20-5-5 6-6-5-5' }],
  ],
];

export default RailSymbol;
