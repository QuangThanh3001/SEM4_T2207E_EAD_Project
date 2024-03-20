import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MonitorCheck: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'm9 10 2 2 4-4' }],
    ['rect', { width: '20', height: '14', x: '2', y: '3', rx: '2' }],
    ['path', { d: 'M12 17v4' }],
    ['path', { d: 'M8 21h8' }],
  ],
];

export default MonitorCheck;
