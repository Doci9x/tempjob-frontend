import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/vue';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

afterEach(() => {
  cleanup();
});
