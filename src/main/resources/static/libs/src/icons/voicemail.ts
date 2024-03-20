import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Voicemail: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '6', cy: '12', r: '4' }],
    ['circle', { cx: '18', cy: '12', r: '4' }],
    ['line', { x1: '6', x2: '18', y1: '16', y2: '16' }],
  ],
];

export default Voicemail;
