import React from 'react';
import CourseList from '../components/CourseList';
import LessonFilter from '../components/filter/LessonFilter';
import styles from './FrontPage.scss';

import {getCourses, getTags, addTagToFilter, filterCourses, removeTagFromFilter} from '../util';

const iconContext = require.context('lessonSrc/', true, /^\.\/[^\/]*\/logo-black\.png/);
const lessonContext = require.context('onlyFrontmatter!lessonSrc/', true,
  /^\.\/[^\/]*\/[^\/]*\/(?!README\.md$)[^\/]*\.md/);
const allCourses = getCourses(lessonContext, iconContext);

const FrontPage = React.createClass({
  getInitialState() {
    return {
      filter: {},
      courses: allCourses
    };
  },
  handleOnCheck(tag, checked) {
    const filter = checked ? addTagToFilter(tag, this.state.filter) : removeTagFromFilter(tag, this.state.filter);
    const filteredCourses = filterCourses(allCourses, filter);
    // Update state
    this.setState({
      filter,
      courses: filteredCourses
    });
  },
  render() {
    const tags = getTags(lessonContext);
    return (
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <LessonFilter onCheck={this.handleOnCheck} tags={tags}/>
        </div>
        <div className={styles.rightColumn}>
          <CourseList courses={this.state.courses}/>
        </div>
      </div>
    );
  }
});

export default FrontPage;
