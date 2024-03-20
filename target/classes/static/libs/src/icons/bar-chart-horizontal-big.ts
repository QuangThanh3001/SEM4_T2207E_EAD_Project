import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const BarChartHorizontalBig: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M3 3v18h18' }],
    ['rect', { width: '12', height: '4', x: '7', y: '5', rx: '1' }],
    ['rect', { width: '7', height: '4', x: '7', y: '13', rx: '1' }],
  ],
];

export default BarChartHorizontalBig;
