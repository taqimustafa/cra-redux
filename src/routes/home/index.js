import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Home Page: Redux
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(Home);