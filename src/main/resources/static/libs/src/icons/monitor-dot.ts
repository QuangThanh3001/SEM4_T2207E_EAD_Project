import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MonitorDot: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '19', cy: '6', r: '3' }],
    ['path', { d: 'M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9' }],
    ['path', { d: 'M12 17v4' }],
    ['path', { d: 'M8 21h8' }],
  ],
];

export default MonitorDot;
