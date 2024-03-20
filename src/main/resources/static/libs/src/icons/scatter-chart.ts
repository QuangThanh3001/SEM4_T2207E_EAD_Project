import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ScatterChart: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '7.5', cy: '7.5', r: '.5' }],
    ['circle', { cx: '18.5', cy: '5.5', r: '.5' }],
    ['circle', { cx: '11.5', cy: '11.5', r: '.5' }],
    ['circle', { cx: '7.5', cy: '16.5', r: '.5' }],
    ['circle', { cx: '17.5', cy: '14.5', r: '.5' }],
    ['path', { d: 'M3 3v18h18' }],
  ],
];

export default ScatterChart;
