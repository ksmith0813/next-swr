export const useSWRReady = (condition: boolean, query: string, variables: object) => {
  return condition ? [query, variables] : null;
};

export const exists = (value: string) => value !== '' && value !== undefined;
