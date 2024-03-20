import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const TestTubes: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2' }],
    ['path', { d: 'M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2' }],
    ['path', { d: 'M3 2h7' }],
    ['path', { d: 'M14 2h7' }],
    ['path', { d: 'M9 16H4' }],
    ['path', { d: 'M20 16h-5' }],
  ],
];

export default TestTubes;