import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Signpost: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M12 3v3' }],
    ['path', { d: 'M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z' }],
    ['path', { d: 'M12 13v8' }],
  ],
];

export default Signpost;
