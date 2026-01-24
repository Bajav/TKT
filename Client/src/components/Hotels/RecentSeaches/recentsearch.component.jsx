import "./recentsearch.styles.scss";
import recentSearches from '../../../data/recents.data.json'

const Recentsearch = () => {
  return (
    <div className="search-items">
      {recentSearches.map((item, index) => (
        <div className="search-item" key={item.id ?? index}>
          <img
            className="search-item-image"
            src={item.imgUrl ?? ""}
            alt={item.placeName ?? "recent search"}
            loading="lazy"
          />
          {/* <h4 className="item-name">{item.placeName}</h4> */}
        </div>
      ))}
    </div>
  );
};

export default Recentsearch;