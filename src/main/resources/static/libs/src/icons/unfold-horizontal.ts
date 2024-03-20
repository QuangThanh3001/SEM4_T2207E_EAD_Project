import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const UnfoldHorizontal: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M16 12h6' }],
    ['path', { d: 'M8 12H2' }],
    ['path', { d: 'M12 2v2' }],
    ['path', { d: 'M12 8v2' }],
    ['path', { d: 'M12 14v2' }],
    ['path', { d: 'M12 20v2' }],
    ['path', { d: 'm19 15 3-3-3-3' }],
    ['path', { d: 'm5 9-3 3 3 3' }],
  ],
];

export default UnfoldHorizontal;
