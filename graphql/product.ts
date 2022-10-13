export const GET_PRODUCTS = `
  query GetProducts($category: String) {
    products(category:$category){
      id
      title
      price
      category
      description
      image
    }
  }
`;

export const GET_CATEGORIES = `
  query GetCategories {
    categories
  }
`;
