import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

const SavedNews = ({ onSignOut }) => {
  return (
    <div>
      <SavedNewsHeader onSignOut={onSignOut} />
      <SavedNewsCardList />
    </div>
  );
};

export default SavedNews;
