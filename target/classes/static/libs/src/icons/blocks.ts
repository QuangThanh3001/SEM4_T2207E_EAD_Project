import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Blocks: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '7', height: '7', x: '14', y: '3', rx: '1' }],
    [
      'path',
      {
        d: 'M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3',
      },
    ],
  ],
];

export default Blocks;
