import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Heading: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M6 12h12' }],
    ['path', { d: 'M6 20V4' }],
    ['path', { d: 'M18 20V4' }],
  ],
];

export default Heading;
