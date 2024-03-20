import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Globe2: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M21.54 15H17a2 2 0 0 0-2 2v4.54' }],
    [
      'path',
      {
        d: 'M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17',
      },
    ],
    ['path', { d: 'M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05' }],
    ['circle', { cx: '12', cy: '12', r: '10' }],
  ],
];

export default Globe2;
