export const GET_TODOS = `
  query GetTodos {
    todos {
      id
      userId
        title
        completed
    }
  }
`;
