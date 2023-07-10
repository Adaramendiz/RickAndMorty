const LocationInfo = ({ location }) => {
  return (
    <article className="article__location">
      <h2 className="article__title">{location?.name}</h2>
      <ul className="article__ul">
        <li className="article__li">
          <span className="article__type">Type: </span>
          <span >{location?.type}</span>
        </li>
        <li className="article__li">
          <span className="article__dimension">Dimension: </span>
          <span >{location?.dimension}</span>
        </li>
        <li className="article__li">
          <span className="article__population" >Population: </span>
          <span >{location?.residents?.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
