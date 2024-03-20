import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Mouse: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { x: '5', y: '2', width: '14', height: '20', rx: '7' }],
    ['path', { d: 'M12 6v4' }],
  ],
];

export default Mouse;
