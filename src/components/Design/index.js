import React, { useState } from 'react';
import Modal from '../Modal/design.js'

const Design = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Global ETF Outlook',
      description: 'A semi-annual document that talks about upcoming trends in the ETF market. Created as a PDF and posted on the BMO GAM website.',
      tools: 'Created with Adobe Indesign and Photoshop. Made AODA compliant using Adobe Acrobat',
      website_1: '/links/bmo1.pdf',
    },
    {
      name: 'True Tactical Brochure',
      description: 'A brochure that markets an investment startegy created in partnership with BMO Global Asset Management and SIA Wealth.',
      tools: 'Created using Adobe InDesign, Photshop and Illustrator. Made AODA compliant using Adobe Acrobat',
      website_1: '/links/bmo1.pdf',
    },
    {
      name: 'ETF 10 year anniversary email',
      description: 'An email designed in HTML and then converted to an Outlook template.',
      tools: 'Created with Adobe Illustrator, Photoshop, Dreamweaver and Microsoft Outlook.',
      website_1: '/links/html/ETF-10-years.html',
    },
    {
      name: 'Mosaic Press Logo',
      description: 'Redesign of Mosaic Press’s logo.',
      tools: 'Created with Adobe Illustrator',
      website_1: 'http://www.mosaic-press.com',
    },
    {
      name: 'The Cook’s Temptation',
      description: 'Cover and page layout for period novel by author Joyce Wayne.',
      tools: 'Designed using Adobe InDesign and Photoshop.',
      website_1: 'http://www.mosaic-press.com/product/the-cooks-temptation/',
    },
    {
      name: 'Mino Che t-shirt design',
      description: 'Personal t-shirt design based on reimagining mythological creatures in modern environments. In this case the mintaur as Che Guevara. Sold on Zazzle wesbsite.',
      tools: 'Designed using Adobe Illustrator and Photoshop.',
      website_1: 'https://www.zazzle.ca/store/gobsmact/',
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
                    src={require(`../../assets/images/small/design/${i}.jpg`).default}
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

export default Design;