/* INTERFACES USED THROUGH THE APP */

// Interface of the wikipedia search reponse saved in Local Storage
export interface ISearchResponse {
  type?: string;
  title?: string;
  description?: string;
  extract?: string;
  isliked?: boolean;
}

// Interface of the wikipedia search request custom hook
export interface ISearchRequestHook {
  searchRequest: (search: string) => Promise<void>;
  searchResponse: ISearchResponse | null;
  setSearchResponse: React.Dispatch<
    React.SetStateAction<ISearchResponse | null>
  >;
  isLoading: boolean;
  errorMessage: string;
}
