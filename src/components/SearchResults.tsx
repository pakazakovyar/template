import React from 'react';






const cardData = {
  title: "7000$",
  listeners: "54,533 listeners",
  image: "https://lastfm.freetls.fastly.net/i/u/300x300/e3ff122663948793faef79db6cabba18.jpg"
};

const albumData = {
  title: "Blue Chips 7000",
  artist: "Action Bronson",
  image: "https://lastfm.freetls.fastly.net/i/u/300x300/950cd041e9a46230788b63c4e75ef77f.jpg"
};

const trackData = {
  title: "7000 (Reprise)",
  artist: "Neon Indian",
  image: "https://lastfm.freetls.fastly.net/i/u/64s/c2fb8d2a017e4f00a267cb6bad7b96ca.jpg",
  duration: "0:58"
};


interface SearchResultsProps {
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  return (
    <div className="search-results">
      <h1>Search results for "{query}"</h1>

      <nav className="secondary-nav" aria-label="Secondary navigation">
        <ul>
          <li><a href="">Top Results</a></li>
          <li><a href="">Artists</a></li>
          <li><a href="">Albums</a></li>
          <li><a href="">Tracks</a></li>
        </ul>
      </nav>

      <section className="search-wrapper">
        <input type="text" placeholder="Search..." value="7000" className="search-input" />
        <button className="clear-btn">&times;</button>
        <div className="divider"></div>
        <button className="search-btn">
          <img
            src="https://img.icons8.com/?size=100&id=132&format=png&color=1A1A1A"
            alt="Search"
            className="search-icon"
          />
        </button>
      </section>

      <section className="artists-sq">
        <h2>Artists</h2>
        <div className="artists-sq-list">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="card" key={item}>
              <img src={cardData.image} alt="Background" className="card-bg" />
              <div className="card-content">
                <div className="card-price"><a href="">{cardData.title}</a></div>
                <div className="card-listeners">{cardData.listeners}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="more-tracks">More artists &gt;</div>
      </section>

      <section className="albums-sq">
        <h2>Albums</h2>
        <div className="albums-sq-list">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="card" key={item}>
              <img src={albumData.image} alt="Background" className="card-bg" />
              <div className="card-content">
                <div className="card-price"><a href="">{albumData.title}</a></div>
                <div className="card-listeners"><a href="">{albumData.artist}</a></div>
              </div>
            </div>
          ))}
        </div>
        <div className="more-tracks">More albums &gt;</div>
      </section>

      <section className="tracks-container">
        <h2>Tracks</h2>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div className="track" key={item}>
            <button className="play-btn">▶</button>
            <img src={trackData.image} className="cover" alt={trackData.title} />
            <div className="info">
              <div className="title">{trackData.title}</div>
              <div className="artist">{trackData.artist}</div>
            </div>
            <div className="duration">{trackData.duration}</div>
          </div>
        ))}
        <div className="more-tracks">More tracks &gt;</div>
      </section>
    </div>
  );
};

export default SearchResults;
