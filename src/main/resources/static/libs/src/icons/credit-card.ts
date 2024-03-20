import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const CreditCard: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '20', height: '14', x: '2', y: '5', rx: '2' }],
    ['line', { x1: '2', x2: '22', y1: '10', y2: '10' }],
  ],
];

export default CreditCard;
