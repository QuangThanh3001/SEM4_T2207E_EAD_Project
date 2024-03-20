import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const FolderOpenDot: IconNode = [
  'svg',
  defaultAttributes,
  [
    [
      'path',
      {
        d: 'm6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2',
      },
    ],
    ['circle', { cx: '14', cy: '15', r: '1' }],
  ],
];

export default FolderOpenDot;
