import React from 'react';
import './BhadraPage.css';

const BhadraPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">🌿 Bhadra Wildlife Sanctuary</h1>

      <p className="page-description">
        Bhadra Forest, located in the Chikkamagaluru district of Karnataka, is famous for its scenic beauty and rich wildlife. It was declared a wildlife sanctuary in 1974 and later upgraded to a tiger reserve under Project Tiger in 1998. Nestled around the Bhadra River and the Bhadra Reservoir, the forest features a mix of dry deciduous, moist deciduous, and semi-evergreen trees. It is home to Bengal tigers, leopards, elephants, gaur (Indian bison), and over 250 species of birds. Bhadra is especially known for successful tiger conservation efforts and eco-tourism initiatives. The surrounding hills, lush valleys, and coffee plantations add to its natural charm. Historically, it was an important region for timber but shifted focus towards wildlife protection. Today, Bhadra is celebrated for its peaceful environment and thriving biodiversity.
      </p>

      <div className="photo-gallery">
        <img
          src="https://www.wpsi-india.org/images/bhadra.jpg"
          alt="Bhadra Forest"
        />
        <img
          src="https://res.cloudinary.com/roundglass/image/upload/f_auto/q_auto/f_auto/c_limit,w_auto:breakpoints_200_2560_100_5:1265/v1605101123/roundglass/sustain/bhadra-darter-shreeram-mv_vrf7b5.jpg"
          alt="Wildlife Sanctuary"
        />
        <img
          src="https://i.ytimg.com/vi/6fLZatIdeNw/maxresdefault.jpg"
          alt="River Rafting"
        />
        <img
          src="https://www.indianholiday.com/photo-gallery/karnataka/tourist-attractions/wildlife/kabini-wildlife-sanctuary/Leopards-3922.jpg"
          alt="Jungle"
        />
        <img
          src="https://imgmedia.lbb.in/media/2019/02/5c75211aa35de830eeb2823d_1551180058613.jpg"
          alt="Bird Watching"
        />
        <img
          src="https://1.bp.blogspot.com/-VMFYj1gmae0/WgVr-uJ9veI/AAAAAAAAedQ/ioUN6Dantn0ShNsxhg8SkTiTV8H0FFuIgCKgBGAs/s1600/Crested%2BHawk%2BEagle.JPG"
          alt="Black Panther"
        />
      </div>
    </div>
  );
};

export default BhadraPage;
