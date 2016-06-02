import React, {PropTypes} from 'react';
import NavLink from '../components/NavLink';

// Get all ./*/*/*.md under lessonSrc, e.g. ./scratch/straffespark/straffespark.md
const lessonContext = require.context('onlyFrontmatter!lessonSrc/', true, /^\.\/[^\/]*\/[^\/]*\/[^\/]*\.md/);

const PlaylistPage = React.createClass({
  getLessonPath(path) {
    const lessonPath = /^\.(.*)\.md/.exec(path); // get the '/course/lesson/file' part of the path
    return lessonPath ? lessonPath[1] : null;
  },
  render() {
    const keys = lessonContext.keys().filter(path =>{
      return path.startsWith('./' + this.props.params.course);
    });
    const courseNodes = keys.map((path, idx) => {
      const lesson = lessonContext(path);
      const fm = lesson.frontmatter;
      const lessonPath = this.getLessonPath(path);
      const lessonStr = fm.title + (fm.level ? ` (Level ${fm.level})` : '');
      return (
        <div key={idx}>
          {lessonPath ? <NavLink to={lessonPath}>{lessonStr}</NavLink> : lessonStr }
        </div>
      );
    });
    //console.log(keys);
    return (
      <div>
        PlaylistPage for {this.props.params.course}
        {courseNodes}
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