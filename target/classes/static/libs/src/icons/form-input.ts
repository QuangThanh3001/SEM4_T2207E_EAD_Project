import defaultAttributes from '../defaultAttributes';
import type { IconNode } from '../types';

const FormInput: IconNode = [
  'svg',
  defaultAttributes,
  [
    ['rect', { width: '20', height: '12', x: '2', y: '6', rx: '2' }],
    ['path', { d: 'M12 12h.01' }],
    ['path', { d: 'M17 12h.01' }],
    ['path', { d: 'M7 12h.01' }],
  ],
];

export default FormInput;
