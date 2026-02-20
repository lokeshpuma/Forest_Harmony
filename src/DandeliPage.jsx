import React from 'react';
import './DandeliPage.css';

const DandeliPage = () => {
  return (
    <div className="dandeli-container">
      <h1 className="dandeli-title">🌿 Dandeli Wildlife Sanctuary</h1>

      <p className="dandeli-description">
      Dandeli Forest, located in the Uttara Kannada district of Karnataka, is one of the richest biodiversity hotspots in the Western Ghats. Spread across over 866 square kilometers, Dandeli Wildlife Sanctuary is known for its dense deciduous forests, evergreen patches, and riverine ecosystems. The Kali River, which flows through the region, is central to the forest’s ecosystem and supports a wide range of aquatic and terrestrial life. Dandeli is home to black panthers, elephants, Indian bison (gaur), sloth bears, barking deer, and over 300 species of birds, including the Malabar pied hornbill. The forest is a haven for birdwatchers, photographers, and adventure seekers. Dandeli also offers thrilling activities like white-water rafting, kayaking, and jungle safaris. Its landscape features steep slopes, deep valleys, and thick canopies, contributing to a unique microclimate. The forest plays a vital role in conservation and sustainable tourism in Karnataka.
      </p>

      <div className="dandeli-gallery">
        <img src="https://i.ytimg.com/vi/TBwNNGXjKVM/maxresdefault.jpg" alt="Dandeli Forest" />
        <img src="https://i1.wp.com/kaziranganationalparkassam.in/wp-content/uploads/2021/07/IMG-20210711-WA0007.jpg?resize=1024%2C768&ssl=1" alt="Wildlife Sanctuary" />
        <img src="https://cdn.pixabay.com/photo/2020/03/27/04/16/dandeli-4972457_1280.jpg" alt="River Rafting" />
        <img src="https://dandelikaliadventure.com/wp-content/uploads/2021/11/sykes-point-dandeli-header.jpg" alt="Jungle" />
        <img src="https://www.holidify.com/images/cmsuploads/compressed/Sathodi_Falls_20200406142637.JPG" alt="Bird Watching" />
        <img src="https://tse4.mm.bing.net/th?id=OIP.Y5DxIcMupG_SU--RU6UkaAAAAA&pid=Api&P=0&h=180" alt="Black Panther" />
      </div>
    </div>
  );
};

export default DandeliPage;
