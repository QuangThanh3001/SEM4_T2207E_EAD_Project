import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const TimerReset: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M10 2h4' }],
    ['path', { d: 'M12 14v-4' }],
    ['path', { d: 'M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6' }],
    ['path', { d: 'M9 17H4v5' }],
  ],
];

export default TimerReset;