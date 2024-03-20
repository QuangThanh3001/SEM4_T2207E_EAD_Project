import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const BadgeJapaneseYen: IconNode = [
  'svg',
  defaultAttributes,
  [
    [
      'path',
      {
        d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z',
      },
    ],
    ['path', { d: 'm9 8 3 3v7' }],
    ['path', { d: 'm12 11 3-3' }],
    ['path', { d: 'M9 12h6' }],
    ['path', { d: 'M9 16h6' }],
  ],
];

export default BadgeJapaneseYen;