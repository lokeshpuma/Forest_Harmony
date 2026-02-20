import React from 'react';
import './NagarholePage.css';

const NagarholePage = () => {
  return (
    <div className="nagarhole-container">
      <h1 className="nagarhole-title">🌿 Nagarhole Forest</h1>

      <p className="nagarhole-description">
      Nagarhole Forest, also known as Nagarahole National Park, is a premier wildlife destination in Karnataka, located across the Kodagu and Mysore districts. Spanning over 640 square kilometers, it forms a crucial part of the Nilgiri Biosphere Reserve and shares its borders with Bandipur National Park and Wayanad Wildlife Sanctuary. The name “Nagarhole” comes from the Kannada words 'naga' (snake) and 'hole' (stream), referring to the winding streams that traverse the forest. Its geography is marked by gentle hills, lush valleys, and dense moist deciduous and tropical forests. Nagarhole is known for its healthy populations of tigers, leopards, elephants, wild dogs, and gaurs, making it a major site under Project Tiger. The park also supports over 270 bird species, including crested serpent eagles and Malabar trogons. With its rich biodiversity and scenic backwaters of the Kabini River, Nagarhole offers exceptional opportunities for wildlife safaris and nature photography. Its successful conservation efforts make it one of India's best-managed national parks.
      </p>

      <div className="nagarhole-gallery">
        <img
          src="http://coorg.xyz/wp-content/uploads/2014/07/Nagarhole-Route-Map1.png"
          alt="Nagarhole Forest Map"
        />
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.rPXmIs83TBXLUs-5_PUxUgHaEr&pid=Api&P=0&h=180"
          alt="Wildlife Sanctuary"
        />
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.wvSWIFCAYp9tj3QuiZvFugHaE8&pid=Api&P=0&h=180"
          alt="River Rafting"
        />
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.aZ9QcGyFvFCqYgjU1YUEIAHaDt&pid=Api&P=0&h=180"
          alt="Jungle"
        />
        <img
          src="https://images.ixigo.com/image/upload/t_thumb,f_auto/nagarhole-national-park-images-photos-5134c06a831478369ab3c6ba.jpg"
          alt="Bird Watching"
        />
        <img
          src="https://bigcatsindia.com/wp-content/uploads/2019/04/NagarholeNationalPark-768x485.jpg"
          alt="Black Panther"
        />
      </div>
    </div>
  );
};

export default NagarholePage;