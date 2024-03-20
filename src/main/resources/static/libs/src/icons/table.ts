import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Table: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M12 3v18' }],
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
    ['path', { d: 'M3 9h18' }],
    ['path', { d: 'M3 15h18' }],
  ],
];

export default Table;
