import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const MessageSquarePlus: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' }],
    ['line', { x1: '9', x2: '15', y1: '10', y2: '10' }],
    ['line', { x1: '12', x2: '12', y1: '7', y2: '13' }],
  ],
];

export default MessageSquarePlus;
