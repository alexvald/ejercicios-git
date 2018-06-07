import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Body extends Component {
  static propTypes ={
    contenido: PropTypes.object.isRequired
  }
  render() {
    const { contenido } = this.props;
    return (
     <div>
       { contenido }
     </div>
       
    );
  }
}

export default Body;
