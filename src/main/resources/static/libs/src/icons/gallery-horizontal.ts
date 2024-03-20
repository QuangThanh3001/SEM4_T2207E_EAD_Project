import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const GalleryHorizontal: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M2 3v18' }],
    ['rect', { width: '12', height: '18', x: '6', y: '3', rx: '2' }],
    ['path', { d: 'M22 3v18' }],
  ],
];

export default GalleryHorizontal;
