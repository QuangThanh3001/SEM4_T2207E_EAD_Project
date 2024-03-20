import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const FileSymlink: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7' }],
    ['polyline', { points: '14 2 14 8 20 8' }],
    ['path', { d: 'm10 18 3-3-3-3' }],
    ['path', { d: 'M4 18v-1a2 2 0 0 1 2-2h6' }],
  ],
];

export default FileSymlink;
