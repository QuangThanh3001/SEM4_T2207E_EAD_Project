import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const BarChartBig: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M3 3v18h18' }],
    ['rect', { width: '4', height: '7', x: '7', y: '10', rx: '1' }],
    ['rect', { width: '4', height: '12', x: '15', y: '5', rx: '1' }],
  ],
];

export default BarChartBig;
