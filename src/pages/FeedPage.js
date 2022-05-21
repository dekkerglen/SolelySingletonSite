import React from 'react';
import PropTypes from 'prop-types';

import MainLayout from 'layouts/MainLayout';
import RenderToRoot from 'utils/RenderToRoot';
import EpisodePreview from 'components/EpisodePreview';
import EpisodePropType from 'proptypes/EpisodePropType';
import PagedList from 'components/PagedList';
import PoorHammerBio from 'content/PoorhammerBio';
import SolelySingletonBio from 'content/SolelySingletonBio';

const FeedPage = ({ podcasts, feed }) => {
  return (
    <MainLayout>
      {feed === 'solelysingleton' && <SolelySingletonBio />}
      {feed === 'poorhammer' && <PoorHammerBio />}
      <PagedList
        pageSize={20}
        showBottom
        rows={podcasts[feed].episodes.map((podcast) => (
          <div key={`podcast-${podcast.guid}`} className="pb-2">
            <EpisodePreview key={podcast.guid} episode={podcast} />
          </div>
        ))}
      />
    </MainLayout>
  );
};

FeedPage.propTypes = {
  podcasts: PropTypes.shape({
    master: PropTypes.shape({
      episodes: PropTypes.arrayOf(EpisodePropType),
    }),
    poorhammer: PropTypes.shape({
      episodes: PropTypes.arrayOf(EpisodePropType),
    }),
    solelysingleton: PropTypes.shape({
      episodes: PropTypes.arrayOf(EpisodePropType),
    }),
  }).isRequired,
  feed: PropTypes.string.isRequired,
};

export default RenderToRoot(FeedPage);
