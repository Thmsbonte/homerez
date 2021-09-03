export const cleanSearchInput = (searchInput: string): string => {
  return searchInput.trim().replaceAll(" ", "_");
};
