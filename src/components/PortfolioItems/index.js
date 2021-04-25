import React, { useState } from 'react';
import Modal from '../Modal'

const PortfolioItems = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Envoy',
      description: 'A website for ',
      website_1: 'https://envoy-guide.herokuapp.com/',
      website_2: 'https://github.com/Envoy-products/Envoy-Products'
    },
    {
      name: 'Screen Genius',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      website_1: 'https://screen-genius.github.io/',
      website_2: 'https://github.com/Envoy-products/Envoy-Products'
    },
    {
      name: '{POST}er',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      website_1: 'https://radiant-peak-23837.herokuapp.com/',
      website_2: 'https://github.com/e-p-n/poster'
    },
    {
      name: 'Gobsmact',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      website_1: 'https://www.zazzle.ca/store/gobsmact',
      website_2: 'https://www.facebook.com/Gobsmact/'
    },
    {
      name: '4-caster',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      website_1: 'https://radiant-peak-23837.herokuapp.com/',
      website_2: 'https://github.com/e-p-n/poster'
    },
    {
      name: 'Run Buddy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      website_1: 'https://radiant-peak-23837.herokuapp.com/',
      website_2: 'https://github.com/e-p-n/poster'
    }
  ]);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [isModalOpen, setIsModalOpen] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i})
    setIsModalOpen(!isModalOpen);
  }

  const currentPhotos = photos.filter((photo) => photo.category === category);



  return (
      <div>
        {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} /> }
          <div className="flex-row">
              {currentPhotos.map((image, i)=> (
                  <img 
                      src={require(`../../assets/small/${i}.png`).default}
                      alt={image.name}
                      className="img-thumbnail mx-1"
                      onClick={() => toggleModal(image, i)}
                      key={image.name}
                  />
              ))} 
          </div>
      </div>
  );
}

export default PortfolioItems;