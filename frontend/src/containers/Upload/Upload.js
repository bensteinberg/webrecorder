import React from 'react';
import { connect } from 'react-redux';

import { UploadUI } from 'components/siteComponents';


const mapStateToProps = ({ app }) => {
  return {
    activeCollection: app.getIn(['user', 'activeCollection'])
  };
};


export default connect(
  mapStateToProps
)(UploadUI);