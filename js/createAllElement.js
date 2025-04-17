import { createMenu } from './createMenu.js';
import { createKeyboards } from './createKeyboards.js';

export function createAllElement(par, createBtn) {
  createMenu(par);
  createBtn();
  createKeyboards(par);
}
