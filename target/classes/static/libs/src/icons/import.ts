import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const Import: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['path', { d: 'M12 3v12' }],
    ['path', { d: 'm8 11 4 4 4-4' }],
    ['path', { d: 'M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4' }],
  ],
];

export default Import;
