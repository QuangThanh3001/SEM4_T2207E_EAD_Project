import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const FolderClock: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '16', cy: '16', r: '6' }],
    [
      'path',
      {
        d: 'M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2',
      },
    ],
    ['path', { d: 'M16 14v2l1 1' }],
  ],
];

export default FolderClock;