import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const BadgePercent: IconNode = [
  'svg',
  defaultAttributes,
  [
    [
      'path',
      {
        d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z',
      },
    ],
    ['path', { d: 'm15 9-6 6' }],
    ['path', { d: 'M9 9h.01' }],
    ['path', { d: 'M15 15h.01' }],
  ],
];

export default BadgePercent;