import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const GalleryVertical: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M3 2h18' }],
    ['rect', { width: '18', height: '12', x: '3', y: '6', rx: '2' }],
    ['path', { d: 'M3 22h18' }],
  ],
];

export default GalleryVertical;
