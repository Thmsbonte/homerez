// Application interfaces
export interface ISearchResponse {
  type?: string;
  title?: string;
  description?: string;
  extract?: string;
  isliked?: boolean;
}

export interface ISearchRequestHook {
  searchRequest: (search: string) => Promise<void>;
  searchResponse: ISearchResponse | null;
  setSearchResponse: React.Dispatch<
    React.SetStateAction<ISearchResponse | null>
  >;
  isLoading: boolean;
  errorMessage: string;
}
