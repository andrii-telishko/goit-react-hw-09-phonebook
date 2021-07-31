import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Container from './components/Container'
import AppBar from './components/AppBar'
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import { authOperations } from './redux/auth'

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch])

  return (<Container>
    <AppBar />
    <Suspense fallback={<h3>Loading...</h3>}>
      <Switch>
        <PublicRoute exact path="/" component={HomeView} />
        <PublicRoute
          path="/register"
          restricted
          redirectTo="/contacts"
          component={RegisterView}
        />
        <PublicRoute
          path="/login"
          restricted
          redirectTo="/contacts"
          component={LoginView}
        />
        <PrivateRoute
          path="/contacts"
          redirectTo="/login"
          component={ContactsView}
        />
      </Switch>
    </Suspense>
  </Container >)
};

