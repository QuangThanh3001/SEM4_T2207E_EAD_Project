import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const GitGraph: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['circle', { cx: '5', cy: '6', r: '3' }],
    ['path', { d: 'M5 9v6' }],
    ['circle', { cx: '5', cy: '18', r: '3' }],
    ['path', { d: 'M12 3v18' }],
    ['circle', { cx: '19', cy: '6', r: '3' }],
    ['path', { d: 'M16 15.7A9 9 0 0 0 19 9' }],
  ],
];

export default GitGraph;
