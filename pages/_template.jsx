import React, {PropTypes} from 'react';

const Template = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {this.props.children}
      </div>
    );
  }
});

Template.propTypes = {
  children: PropTypes.any
};

//export default Template;
module.exports = Template;
