import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const KanbanSquare: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M8 7v7' }],
    ['path', { d: 'M12 7v4' }],
    ['path', { d: 'M16 7v9' }],
  ],
];

export default KanbanSquare;