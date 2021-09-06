// Clean user search input to match wikipedia search rules
export const cleanSearchInput = (searchInput: string): string => {
  return searchInput.trim().replaceAll(" ", "_");
};
