import React from 'react';
import PropTypes from 'prop-types';

import MainLayout from 'layouts/MainLayout';
import RenderToRoot from 'utils/RenderToRoot';
import EpisodePreview from 'components/EpisodePreview';
import EpisodePropType from 'proptypes/EpisodePropType';

import SolelySingletonBio from 'content/SolelySingletonBio';
import PoorHammerBio from 'content/PoorhammerBio';

const LandingPage = ({ episodes }) => {
  return (
    <MainLayout>
      <h2 className="pt-4 centered">Solely Singleton — A Magic: the Gathering Podcast</h2>
      <hr />
      <SolelySingletonBio />
      <hr />
      <PoorHammerBio />
      <hr />
      <h3 className="centered">Latest Episodes</h3>
      {episodes.map((podcast) => (
        <div key={`podcast-${podcast.guid}`} className="pb-2">
          <EpisodePreview key={podcast.guid} episode={podcast} />
        </div>
      ))}
    </MainLayout>
  );
};

LandingPage.propTypes = {
  episodes: PropTypes.arrayOf(EpisodePropType).isRequired,
};

export default RenderToRoot(LandingPage);
