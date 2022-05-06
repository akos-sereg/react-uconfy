import * as React from 'react';
import { useState } from 'react';
import { Component } from 'react';
import { Author } from '../../model/Author';
import { NavigationPathItem } from './model';
import styles from './style.scss';

type Props = {
  navigationPath: NavigationPathItem[]
};

type State = {
  navigationPath: NavigationPathItem[]
}

class Navigation extends Component<Props, State> {

  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    const { navigationPath } = this.props;
    return (
          <nav className={styles.navigation}>
            {navigationPath && navigationPath.map((navigationPathItem: NavigationPathItem) =>
              (
                <span
                  key={navigationPathItem.name}
                  aria-current="page">
                  {navigationPathItem.uri ? (
                    <span>
                      <a href={navigationPathItem.uri}>{navigationPathItem.name}</a>
                      &nbsp;/&nbsp;
                    </span>
                  ) : navigationPathItem.name }
                </span>
              ))
            }
          </nav>
       );
   }
}

export default Navigation;

