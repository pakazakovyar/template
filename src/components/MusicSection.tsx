import React from 'react';

const artistData = {
  name: "Jin",
  image: "https://lastfm.freetls.fastly.net/i/u/770x0/d0bc80236d618fc55b2912717ac6925a.jpg",
  genres: ["RAP", "BTS", "HIP HOP"],
  bio: "There are several artists with this name. 1) Kim Seok-jin (Hangul: 김석진; born on December 4, 1992), also known by his stage name Jin, is a South Korean singer-songwriter. He is a member and voca…",
  releases: [
    {
      type: "Latest RELEASE",
      title: "Kgerou",
      detail: "20 May 2025",
      image: "https://lastfm.freetls.fastly.net/i/u/300x300/c6f59c1e5e7240a4c0d427abd71f3dbb.jpg"
    },
    {
      type: "Popular this week",
      title: "Don't Say You Love Me",
      detail: "72,060 listeners",
      image: "https://lastfm.freetls.fastly.net/i/u/300x300/c6f59c1e5e7240a4c0d427abd71f3dbb.jpg"
    }
  ]
};

const smallArtistData = {
  name: "Tyler, The Creator",
  image: "https://lastfm.freetls.fastly.net/i/u/300x300/2b580be01bbb456d8deaf89f545e7b39.jpg",
  genres: ["hip-hop", "rap", "ofwgkta"]
};

const trackData = {
  title: "Don't Say You Love Me",
  artist: "Jin",
  image: "https://lastfm.freetls.fastly.net/i/u/300x300/f19c148dc2502de161e9835f140a8114.jpg",
  genres: ["hip-hop", "rap", "ofwgkta"]
};

const MusicSection = () => {
  return (
    <section className="music-section">
      <div className="heading"><h2>Hot Right now</h2><hr /></div>

      <div className="tag-layout">
        {[1, 2].map((item) => (
          <div className="tag-main" key={item}>
            <img src={artistData.image} alt={artistData.name} />
            <div className="tag-info">
              <h3>{artistData.name}</h3>
              <div className="genres">
                <ul>
                  {artistData.genres.map((genre, index) => (
                    <li key={index}><a href="">{genre}</a></li>
                  ))}
                </ul>
              </div>
              <p>
                {artistData.bio}
                <a href="#">read more</a>
              </p>
              <span className="releases">
                {artistData.releases.map((release, index) => (
                  <div className="releas" key={index}>
                    <img src={release.image} alt={release.title} />
                    <div className="content">
                      <span className="Blure">{release.type}</span>
                      <h4>{release.title}</h4>
                      <p>{release.detail}</p>
                    </div>
                  </div>
                ))}
              </span>
            </div>
          </div>
        ))}
      </div>

      {[1, 2].map((row) => (
        <div className="guys" key={row}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="guy" key={item}>
              <img src={smallArtistData.image} alt={smallArtistData.name} />
              <h4>{smallArtistData.name}</h4>
              <div className="mini-genres">
                <ul>
                  {smallArtistData.genres.map((genre, index) => (
                    <li key={index}><a href="">{genre}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="heading"><h2>Popular tracks</h2><hr /></div>

      <section className="popular-tracks">
        {[1, 2, 3].map((col) => (
          <div className={`${col === 1 ? 'first' : col === 2 ? 'second' : 'third'}-col`} key={col}>
            <div className="tracks">
              {[1, 2, 3].map((item) => (
                <div className="track" key={item}>
                  <img src={trackData.image} alt={trackData.title} />
                  <div className="info">
                    <h4>{trackData.title}</h4>
                    <p>{trackData.artist}</p>
                    <div className="mini-genres">
                      <ul>
                        {trackData.genres.map((genre, index) => (
                          <li key={index}><a href="">{genre}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default MusicSection;
