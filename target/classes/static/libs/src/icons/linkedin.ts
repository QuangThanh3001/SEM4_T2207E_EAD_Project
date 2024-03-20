import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Linkedin: IconNode = [
  'svg',
  defaultAttributes,
  [
    [
      'path',
      { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' },
    ],
    ['rect', { width: '4', height: '12', x: '2', y: '9' }],
    ['circle', { cx: '4', cy: '4', r: '2' }],
  ],
];

export default Linkedin;