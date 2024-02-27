// dateUtils.test.js

import { formatDate } from '../formatDate.js';

describe('setDate', () => {
  it('should format a valid date', () => {
    const result = formatDate({ date: '2024-02-19' });
    expect(result).toBe('19/02/2024');
  });

  it('should return an empty string for an invalid date', () => {
    const result = formatDate({ date: 'invalid-date' });
    expect(result).toBe('');
  });

  it('should return an empty string for an empty input', () => {
    const result = formatDate({ date: '' });
    expect(result).toBe('');
  });
});
