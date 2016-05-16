import React, {PropTypes} from 'react';

const Lesson = React.createClass({
  getFooter() {
    return this.props.doc.frontmatter.footer;
  },
  createMarkup(){
    return {
      __html: this.props.doc.content
    };
  },
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.createMarkup()}/>
      </div>
    );
  }
});

Lesson.PropTypes = {
  doc: PropTypes.shape({
    frontmatter: PropTypes.object,
    content: PropTypes.string
  })
};

export default Lesson;
