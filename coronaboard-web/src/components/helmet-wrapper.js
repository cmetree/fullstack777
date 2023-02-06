import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function HelmetWrapper({ title, description }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );

  const { siteMetadata } = site;
  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },

        {
          property: 'og:type',
          content: 'website',
        },

      ]}
    />
  );
}


HelmetWrapper.defaultProps = {
  description: null,
};

HelmetWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default HelmetWrapper;
