import React, { useState } from 'react';
import Modal from '../Modal'

const PortfolioItems = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Woof',
      description: 'Woof connects dog owners with dog walkers who’ll treat your dog like family.',
      tools: 'Built with  MongoDB, Mongoose, JavaScript, Node.js, Express, Sequelize, React.',
      website_1: 'https://woof-2021.herokuapp.com/',
      website_2: 'https://github.com/woof-board/woof'
    },
    {
      name: 'Envoy',
      description: 'A community website designed to help members learn and share information on environmentally sound products and practices.',
      tools: 'Built with  MySQL, JavaScript, Node.js, Express, Sequelize, Bootstrap, Handlebars, Flickity, jQuery Bar Rating and Typed.js.',
      website_1: 'https://envoy-guide.herokuapp.com/',
      website_2: 'https://github.com/Envoy-products/Envoy-Products'
    },
    {
      name: 'Screen Genius',
      description: 'A website designed to help users find movies they may not have seen before.',
      tools: 'Built with  HTML, Bulma CSS, JavaScript, The Movie Database API and the Utelly API.',
      website_1: 'https://screen-genius.github.io/',
      website_2: 'https://github.com/screen-genius/screen-genius.github.io'
    },
    {
      name: '{POST}er',
      description: 'A blog site where users can post their experiences learning how to code and comment on other users posts.',
      tools: 'Built with MySQL, Sequelize, Handlebars, Node.js and Express.',
      website_1: 'https://radiant-peak-23837.herokuapp.com/',
      website_2: 'https://github.com/e-p-n/poster'
    },
    {
      name: '4-caster',
      description: 'A weather forecasting website that allows users to search by city for current weather and 5-day forecasts.',
      tools: 'Built with HTML, CSS, JavaScript, the OpenWeather.com APi, Moment.js Font Awesome, and the Weather Icons CSS package from Erik Flowers.',
      website_1: 'https://e-p-n.github.io/4caster/',
      website_2: 'https://github.com/e-p-n/4caster'
    },
    {
      name: 'Run Buddy',
      description: 'A webpage layout for a fitness centre. It features responsive design.',
      tools: 'Built with HTML and CSS.',
      website_1: 'https://e-p-n.github.io/run-buddy/',
      website_2: 'https://github.com/e-p-n/run-buddy'
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
          <div className="row">
              {currentPhotos.map((image, i)=> (
                <div className="card border-left-0 border-top-0 border-right-0 text-center justify-content-center">
                  <img 
                    src={require(`../../assets/images/small/${i}.png`).default}
                    alt={image.name}
                    className="thumbnail"
                    onClick={() => toggleModal(image, i)}
                    key={image.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{image.name}</h5>
                    <p className="card-text">{image.description}</p>
                    <button onClick={() => toggleModal(image, i)} className="btn btn-info rounded-pill">Learn More</button>
                  </div>
                </div>
                  
              ))} 
          </div>
      </div>
  );
}

export default PortfolioItems;
