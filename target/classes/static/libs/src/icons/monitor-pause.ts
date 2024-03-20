import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MonitorPause: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M10 13V7' }],
    ['path', { d: 'M14 13V7' }],
    ['rect', { width: '20', height: '14', x: '2', y: '3', rx: '2' }],
    ['path', { d: 'M12 17v4' }],
    ['path', { d: 'M8 21h8' }],
  ],
];

export default MonitorPause;
