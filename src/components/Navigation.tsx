import { RootState, PathItem } from 'MyTypes';
import React from 'react';
import { connect } from 'react-redux';

import './Navigation.css';

type OwnProps = {
  path: Array<PathItem>;
};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  path: ownProps.path
});

type Props = ReturnType<typeof mapStateToProps>;

const Navigation = ({ path }: Props) => {
  return (
    <div className="navigation-container">
        {path.map(pathItem => pathItem.path ?
            <a href={pathItem.path} key={pathItem.name}>{pathItem.name}</a>
            : <div key={pathItem.name}>{pathItem.name}</div>)}
    </div>
  );
};

export default connect(mapStateToProps)(Navigation);