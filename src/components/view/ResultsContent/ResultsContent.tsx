import "./ResultsContent.scss";

// Interfaces import
import { ISearchResponse } from "../../../interfaces/interfaces";

// Component interface
interface Props {
  searchResponse: ISearchResponse | null;
}

export const ResultsContent = ({ searchResponse }: Props) => {
  return (
    <div className="results-content">
      <p className="results-content-title">
        {searchResponse?.title || "Title"}
      </p>
      <p className="results-content-subtitle">
        {searchResponse?.type === "standard" // Display error message if search request answer is not standard
          ? searchResponse.description || "SubTitle"
          : searchResponse?.description
          ? "This search term refers to multiple pages, please be more specific."
          : "SubTitle"}
      </p>
      <p className="results-content-content">
        {(searchResponse?.type === "standard" && searchResponse?.extract) || ""}
      </p>
    </div>
  );
};
