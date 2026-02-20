import React from 'react';
import './BandipurPage.css';

const BandipurPage = () => {
  return (
    <div className="bandipur-container">
      <h1 className="bandipur-title">🌳 Bandipur Forest</h1>
      <p className="bandipur-description">
      Bandipur Forest, located in the Chamarajanagar district of Karnataka, is one of India's premier tiger reserves and part of the Nilgiri Biosphere Reserve. Established as a national park in 1974 under Project Tiger, it spans over 870 square kilometers and shares its boundaries with Mudumalai Wildlife Sanctuary (Tamil Nadu), Wayanad Wildlife Sanctuary (Kerala), and Nagarhole National Park (Karnataka), forming a vast and contiguous stretch of protected forests. The terrain includes dry deciduous forests, open grassy woodlands, and scrub, making it ideal for herbivores and predators alike. Bandipur is home to Bengal tigers, Asian elephants, Indian gaurs, leopards, chital, and over 200 species of birds. The Moyar River and the Kabini River add to the region's water resources and biodiversity. With a relatively dry climate and distinct seasons, Bandipur is a hotspot for eco-tourism and conservation. It plays a crucial role in maintaining the ecological balance of the Western Ghats.
      </p>

      <div className="bandipur-gallery">
        <img src="https://4.bp.blogspot.com/_npWFFuYus3I/SfgNtDpF_SI/AAAAAAAAC8Y/RBFgMHL51mI/w1200-h630-p-k-no-nu/Bandipurfinal.jpg" alt="Bandipur Forest" />
        <img src="https://onlifeandwildlife.files.wordpress.com/2019/10/img_20180714_170751797_hdr.jpg?w=1024" alt="Wildlife" />
        <img src="https://tse4.mm.bing.net/th?id=OIP.J_SSmsVA0Nqp545Qk7muPwHaDC&pid=Api&P=0&h=180" alt="Elephant" />
        <img src="https://www.toptourguide.com/images/bindipur-images.jpg" alt="Tiger" />
        <img src="https://darter.in/wp-content/uploads/2019/09/Bandipur-3.jpg?is-pending-load=1" alt="National Park" />
      </div>
    </div>
  );
};

export default BandipurPage;
