import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutimg1 from '../assets/aboutimg1.jpg';
import aboutimg2 from '../assets/aboutimg2.jpg';
import aboutimg3 from '../assets/aboutimg3.jpg';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">{t('aboutCrzTitle')}</h2>
        <p className="mb-6">{t('aboutCrzDescription')}</p>

        <h2 className="text-xl font-bold mb-4 text-center">{t('whyCrzTitle')}</h2>
        <p className="mb-6">{t('whyCrzDescription')}</p>

        <h2 className="text-xl font-bold mb-4 text-center">{t('crzJurisdictionTitle')}</h2>
        <p className="mb-6">{t('crzJurisdictionDescription')}</p>

        <h2 className="text-xl font-bold mb-4 text-center">{t('crzLengthsCoverageTitle')}</h2>
        <p className="mb-6">{t('crzLengthsCoverageDescription')}</p>

        <h2 className="text-xl font-bold mb-4 text-center">{t('crzMapTitle')}</h2>
        <p className="mb-2">{t('crzAreaSea')}</p>
        <img src={aboutimg1} alt="crz area wrt sea and sea coast" className="mb-6 w-full h-auto rounded-lg shadow-md" />
        <p className="mb-6">{t('crzAreaTidal')}</p>
        <img src={aboutimg2} alt="crz area w.r.t tidal influenced water bodies" className="mb-6 w-full h-auto rounded-lg shadow-md" />

        <h2 className="text-xl font-bold mb-4 text-center">{t('crzCategoriesTitle')}</h2>
        <p className="mb-2">{t('crzICategory')}</p>
        <p className="mb-2 pl-4">{t('crzIA')}</p>
        <p className="mb-2 pl-4">{t('crzIB')}</p>
        <p className="mb-2">{t('crzII')}</p>
        <p className="mb-2">{t('crzIII')}</p>
        <p className="mb-2">{t('crzIVCategory')}</p>
        <p className="mb-2 pl-4">{t('crzIVA')}</p>
        <p className="mb-6 pl-4">{t('crzIVB')}</p>
        <p className="mb-6">{t('cvca')}</p>
        <img src={aboutimg3} alt="crz categories" className="mb-6 w-full h-auto rounded-lg shadow-md" />

        <h2 className="text-xl font-bold mb-4 text-center">{t('typesApplicationsTitle')}</h2>
        <p className="mb-2">{t('conversions')}</p>
        <p className="mb-2 pl-4">{t('residentialConversion')}</p>
        <p className="mb-2 pl-4">{t('commercialConversion')}</p>
        <p className="mb-2">{t('constructions')}</p>
        <p className="mb-2 pl-4">{t('residentialConstruction')}</p>
        <p className="mb-2 pl-4">{t('commercialConstruction')}</p>
        <p className="mb-6 pl-4">{t('governmentProjects')}</p>
      </div>
    </div>
  );
}
