import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MapPin: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' }],
    ['circle', { cx: '12', cy: '10', r: '3' }],
  ],
];

export default MapPin;
