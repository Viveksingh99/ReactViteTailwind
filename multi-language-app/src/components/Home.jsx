import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (  
    <div>
      <h1>{t('home')}</h1>
      <p>{t('language')}</p>
    </div>
  );
}

export default Home;
