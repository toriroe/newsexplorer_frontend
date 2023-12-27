import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

const SavedNews = ({ onSignOut, onRemoveArticle }) => {
  return (
    <div>
      <SavedNewsHeader onSignOut={onSignOut} />
      <SavedNewsCardList onRemoveArticle={onRemoveArticle} />
    </div>
  );
};

export default SavedNews;
