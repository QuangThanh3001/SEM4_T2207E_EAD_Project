import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const GitCommitVertical: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M12 3v6' }],
    ['circle', { cx: '12', cy: '12', r: '3' }],
    ['path', { d: 'M12 15v6' }],
  ],
];

export default GitCommitVertical;
