import * as React from 'react';
import { Component, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet';
import TextInput from '../../components/TextInput';
import { setNavigation } from '../../components/Navigation/actions';
import styles from './style.scss';

type Props = {
  dispatch: Function
};

type State = {
  username: string,
};

const MainPage = (props: Props) => {

  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  const handleSignIn = (event: any) => {
    event.preventDefault();
  }

  const handlePasswordKeyUp = (event: any) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      handleSignIn(event);
    }
  }

  const handleTextChange = (event: any) => {
    switch (event.target.name) {
      case 'username':
        setLoginForm({ ...loginForm, username: event.target.value });
        break;
      case 'password':
        setLoginForm({ ...loginForm, password: event.target.value });
        break;
    }
  }

  return (
    <div>
      <Helmet>
        <title>Main Page</title>
        <meta
          name="description"
          content="Main page of React.js Boilerplate application"
        />
      </Helmet>

      Main page
    </div>
  );
}

export default MainPage;
