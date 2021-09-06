import "./Results.scss";

// Component import
import { LikedButton } from "../../display/LikedButton/LikedButton";
import { SubHeader } from "../../display/SubHeader/SubHeader";
import { ResultsContent } from "../../view/ResultsContent/ResultsContent";

// Service import
import { savePageInLocalStorage } from "../../../services/savePageInLocalStorage";

// Interfaces import
import { ISearchResponse } from "../../../interfaces/interfaces";

// Component interface
interface Props {
  searchResponse: ISearchResponse | null;
  setSearchResponse: React.Dispatch<
    React.SetStateAction<ISearchResponse | null>
  >;
}

export const Results = ({ searchResponse, setSearchResponse }: Props) => {
  /*Events handler*/
  // Save page in local storage and update isliked search reponse key to true
  const handleOnClickLiked = () => {
    if (searchResponse?.title) {
      savePageInLocalStorage(searchResponse?.title);
      setSearchResponse((prevState) => {
        return { ...prevState, isliked: true };
      });
    }
  };

  return (
    <div className="results">
      <SubHeader title="Results" />
      <ResultsContent searchResponse={searchResponse} />
      <LikedButton
        onClick={handleOnClickLiked}
        isLiked={searchResponse?.isliked}
      />
    </div>
  );
};
