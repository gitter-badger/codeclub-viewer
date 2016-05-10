import React, {PropTypes} from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
//import { TypographyStyle } from 'utils/typography'


const Html = React.createClass({
  render () {
    const title = DocumentTitle.rewind();

    // let cssLink;
    // if (process.env.NODE_ENV === 'production') {
    //   cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    // }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon} />
          {/*<TypographyStyle />*/}
          {/*cssLink*/}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink('/bundle.js')} />
        </body>
      </html>
    )
  },
});

Html.propTypes = {
  title: PropTypes.string
};

module.exports = Html;