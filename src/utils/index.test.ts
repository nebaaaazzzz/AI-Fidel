import { getLevelWords } from '.';
import { expect, test } from '@jest/globals';
import { fourLetterWords } from '../data/english/level-1';
test('check fourds for each level', () => {
  expect(getLevelWords(fourLetterWords, 2)).toContain;
});
