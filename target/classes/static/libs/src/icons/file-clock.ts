import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const FileClock: IconNode = [
  'svg',
  defaultAttributes,
  [
    [
      'path',
      {
        d: 'M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3',
      },
    ],
    ['polyline', { points: '14 2 14 8 20 8' }],
    ['circle', { cx: '8', cy: '16', r: '6' }],
    ['path', { d: 'M9.5 17.5 8 16.25V14' }],
  ],
];

export default FileClock;