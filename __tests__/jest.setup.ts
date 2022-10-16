import { configure } from '@testing-library/react';
import { useSession } from 'next-auth/react';

configure({ testIdAttribute: 'id' });

jest.mock('next-auth/react');

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

export const getMockSessionData = (loggedIn?: boolean) => {
  const status = loggedIn ? 'authenticated' : 'unauthenticated';
  const data = loggedIn
    ? {
        user: {
          name: loggedIn ? 'testing' : '',
          email: loggedIn ? 'testing@email.com' : '',
        },
      }
    : null;

  return { status, data };
};

export const createMockSession = (loggedIn?: boolean) => {
  return (useSession as jest.Mock).mockReturnValue(getMockSessionData(loggedIn));
};
