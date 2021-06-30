import { BulletPointList } from './BulletPointList';
import { ErrorBar } from './ErrorBar';
import { FeaturesContainer } from '../wrappers/FeaturesContainer';
import { FeaturesDescription } from '../wrappers/FeaturesDescription';
import FeatureImg from '../assets/images/featureBanner.jpeg';
import { Loader } from './Loader';
import { useHarperDB } from 'use-harperdb';
import React from 'react';

/* Features / points about the app.  */
export const Features = () => {
  const [data, loading, error] = useHarperDB({
    query: { operation: 'sql', sql: 'select * from author.details' },
  });

  if (loading && !error) {
    return <Loader />;
  }

  if (!loading && error) {
    return <ErrorBar message="Download failed! Please try later" />;
  }
  return (
    <FeaturesContainer>
      <div className="feature-wrapper">
        <FeaturesDescription />
        <p className="feature-header">Few points</p>
        {data && <BulletPointList data={data} />}
      </div>
      <div>
        <img className="feature-image" src={FeatureImg} alt="feature banner" />
      </div>
    </FeaturesContainer>
  );
};
