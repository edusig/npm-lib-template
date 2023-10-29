import { describe, expect, test } from '@jest/globals';
import { exampleFunction } from './example';

describe('Example test', () => {
  test('Example function return correctly', () => {
    const resp = exampleFunction();
    expect(resp).toBe('Example return');
  });
});
