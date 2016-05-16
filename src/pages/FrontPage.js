import React from 'react';
import CourseList from '../components/CourseList';
import MainIndex from '../components/MainIndex';

const FrontPage = React.createClass({
  render() {
    //const scratchPage = lessonContext('./scratch/straffespark/straffespark.md');
    return (
      <div>
        <MainIndex doc={require('lessonSrc/index.md')}/>
        <CourseList/>
        {/*<LessonPage lesson={scratchPage}/>*/}
      </div>
    );
  }
});

export default FrontPage;
