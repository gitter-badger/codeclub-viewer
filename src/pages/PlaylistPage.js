import React, {PropTypes} from 'react';
import NavLink from '../components/NavLink';

// Get all lessonSrc/*/*/*.md, e.g. lessonSrc/scratch/straffespark/straffespark.md
const lessonContext = require.context('lessonSrc/', true, /^\.\/[^\/]*\/[^\/]*\/[^\/]*\.md/);

const PlaylistPage = React.createClass({
  getLessonPath(path) {
    const lessonPath = /^\.(\/[^\/]*\/[^\/]*)/.exec(path);
    return lessonPath ? lessonPath[1] : null;
  },
  render() {
    const keys = lessonContext.keys().filter(path =>{
      return path.startsWith('./' + this.props.params.course);
    });
    //console.log(keys);
    return (
      <div>
        PlaylistPage for {this.props.params.course}
        {
          keys.map((path, idx) => {
            const lesson = lessonContext(path);
            const fm = lesson.frontmatter;
            const lessonPath = this.getLessonPath(path);
            const lessonStr = fm.title + (fm.level ? ` (Level ${fm.level})` : '');
            return (
              <div key={idx}>
                {lessonPath ? <NavLink to={lessonPath}>{lessonStr}</NavLink> : lessonStr }
              </div>
            );
          })
        }
      </div>
    );
  }
});

PlaylistPage.propTypes = {
  params: PropTypes.shape({
    course: PropTypes.string.isRequired
  })
};

export default PlaylistPage;