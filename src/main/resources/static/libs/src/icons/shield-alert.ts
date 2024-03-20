import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const ShieldAlert: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10' }],
    ['path', { d: 'M12 8v4' }],
    ['path', { d: 'M12 16h.01' }],
  ],
];

export default ShieldAlert;