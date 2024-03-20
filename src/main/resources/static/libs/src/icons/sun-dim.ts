import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const SunDim: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '12', r: '4' }],
    ['path', { d: 'M12 4h.01' }],
    ['path', { d: 'M20 12h.01' }],
    ['path', { d: 'M12 20h.01' }],
    ['path', { d: 'M4 12h.01' }],
    ['path', { d: 'M17.657 6.343h.01' }],
    ['path', { d: 'M17.657 17.657h.01' }],
    ['path', { d: 'M6.343 17.657h.01' }],
    ['path', { d: 'M6.343 6.343h.01' }],
  ],
];

export default SunDim;
