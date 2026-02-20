import React from 'react';
import './BannerghattaPage.css';

const BannerghattaPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">🌿 Bannerghatta Forests</h1>

      <p className="page-description">
        Bannerghatta Forest, located near Bangalore in Karnataka, is known for its rich biodiversity and conservation efforts. 
        Established as a national park in 1974, it later expanded to include the famous Bannerghatta Biological Park. The forest 
        is home to a wide variety of animals, including Bengal tigers, lions, elephants, and several species of deer and bears. 
        Bannerghatta is unique because it also houses a butterfly park, one of the first in India. Historically, the forest served 
        as a natural habitat close to human settlements, leading to early efforts at conservation. The terrain here is a mix of hilly 
        areas, dense scrub, and deciduous forests. It plays an important role in wildlife education, research, and eco-tourism. Being 
        so close to Bangalore, it offers a rare chance to experience wildlife without traveling far into the wilderness.
      </p>

      <div className="photo-gallery">
        <img
          src="https://www.researchgate.net/profile/Thomas-Sharp-4/publication/350423875/figure/fig1/AS:1006023313743874@1616866057927/Bannerghatta-National-Park-location-within-India-and-the-northeast-most-section-of-the.png"
          alt="Bannerghatta Forest"
        />
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.tzYqHekYtLBdggWQ1J9wRQHaEK&pid=Api&P=0&h=180"
          alt="Wildlife Sanctuary"
        />
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.pTcsJEbE9NaOGOYcsQUHSwHaEK&pid=Api&P=0&h=180"
          alt="River Rafting"
        />
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.71NYUT19FbXmwVgLi72D8AAAAA&pid=Api&P=0&h=180"
          alt="Jungle"
        />
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.dswGWtOCHGdg_GmOGkOkhQHaD4&pid=Api&P=0&h=180"
          alt="Bird Watching"
        />
        <img
          src="https://static2.tripoto.com/media/filter/nxl/img/296522/TripDocument/1486802541_bannerghatta_national_park_prateek_rungta_flickr_creative_commons.jpg"
          alt="Black Panther"
        />
      </div>
    </div>
  );
};

export default BannerghattaPage;
