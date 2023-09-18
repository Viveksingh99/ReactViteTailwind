import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('about')}</h1>
      <p>{t('language')}</p>
    </div>
  );
}

export default About;
