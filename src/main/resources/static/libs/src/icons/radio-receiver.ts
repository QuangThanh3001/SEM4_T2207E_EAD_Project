import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const RadioReceiver: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M5 16v2' }],
    ['path', { d: 'M19 16v2' }],
    ['rect', { width: '20', height: '8', x: '2', y: '8', rx: '2' }],
    ['path', { d: 'M18 12h0' }],
  ],
];

export default RadioReceiver;
