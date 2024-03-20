import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Blinds: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M3 3h18' }],
    ['path', { d: 'M20 7H8' }],
    ['path', { d: 'M20 11H8' }],
    ['path', { d: 'M10 19h10' }],
    ['path', { d: 'M8 15h12' }],
    ['path', { d: 'M4 3v14' }],
    ['circle', { cx: '4', cy: '19', r: '2' }],
  ],
];

export default Blinds;
