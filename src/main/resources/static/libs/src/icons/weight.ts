import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Weight: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '12', cy: '5', r: '3' }],
    [
      'path',
      {
        d: 'M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z',
      },
    ],
  ],
];

export default Weight;
