import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const FileLineChart: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' }],
    ['polyline', { points: '14 2 14 8 20 8' }],
    ['path', { d: 'm16 13-3.5 3.5-2-2L8 17' }],
  ],
];

export default FileLineChart;
