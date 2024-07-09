import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import dcpic from '../assets/dcpicture.jpg';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-page text-black">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        dynamicHeight={true}
      >
        <div>
          <img src="https://www.karnataka.gov.in/storage/slids/1638784483.jpg" alt="Carousel Image 1" />
        </div>
        <div>
          <img src="https://www.karnataka.gov.in/storage/slids/1638784182.jpg" alt="Carousel Image 2" />
        </div>
        <div>
          <img src="https://www.karnataka.gov.in/storage/slids/1638783245.jpg" alt="Carousel Image 3" />
        </div>
        <div>
          <img src="https://www.karnataka.gov.in/storage/slids/1638784672.jpg" alt="Carousel Image 4" />
        </div>
        <div>
          <img src="https://www.karnataka.gov.in/storage/slids/1630648890.png" alt="Carousel Image 5" />
        </div>
        <div>
          <img src="https://www.karnataka.gov.in/storage/slids/1656590446.jpg" alt="Carousel Image 6" />
        </div>
      </Carousel>

      <div className="content-section bg-gray-100 p-6">
        <div className="flex flex-wrap justify-between">
          <div className="bg-blue-500 text-white p-4 w-full lg:w-1/5 mb-4 lg:mb-0 lg:block hidden">
            <h2 className="text-lg font-bold mb-2">{t('importantNotice')}</h2>
            {/* Add your notice content here */}
          </div>
          <div className="bg-gray-300 p-4 w-full lg:w-3/5 mb-4 lg:mb-0">
            <h2 className="text-lg font-bold mb-2">{t('aboutCrzTitle')}</h2>
            <p>
              {t('aboutCrzHomeDescription')}
            </p>
          </div>
          <div className="bg-blue-200 p-4 w-full lg:w-1/5">
            <h2 className="text-lg font-bold mb-2">{t('contactTitle')}</h2>
            <img src={dcpic} alt="dc" className="mb-2" />
            <p>{t('contactName')}</p>
            <p>{t('contactPosition')}</p>
            <button className="bg-white text-black p-2 mt-2">{t('contactButton')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
