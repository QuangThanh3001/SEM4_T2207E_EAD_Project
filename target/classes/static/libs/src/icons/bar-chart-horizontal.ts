import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const BarChartHorizontal: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M3 3v18h18' }],
    ['path', { d: 'M7 16h8' }],
    ['path', { d: 'M7 11h12' }],
    ['path', { d: 'M7 6h3' }],
  ],
];

export default BarChartHorizontal;