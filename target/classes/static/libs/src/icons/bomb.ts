import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Bomb: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '11', cy: '13', r: '9' }],
    [
      'path',
      { d: 'M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95' },
    ],
    ['path', { d: 'm22 2-1.5 1.5' }],
  ],
];

export default Bomb;
