import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Computer: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '14', height: '8', x: '5', y: '2', rx: '2' }],
    ['rect', { width: '20', height: '8', x: '2', y: '14', rx: '2' }],
    ['path', { d: 'M6 18h2' }],
    ['path', { d: 'M12 18h6' }],
  ],
];

export default Computer;
