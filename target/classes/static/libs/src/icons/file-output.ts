import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const FileOutput: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4' }],
    ['polyline', { points: '14 2 14 8 20 8' }],
    ['path', { d: 'M2 15h10' }],
    ['path', { d: 'm5 12-3 3 3 3' }],
  ],
];

export default FileOutput;
