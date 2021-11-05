import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@styles/global.scss';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Layout from '@containers/Layout';
import Login from '@containers/Login';
import CreateAccount from '@containers/CreateAccount';
import RecoveryPassword from '@containers/RecoveryPassword';
import MyAccount from '@containers/MyAccount';
import MobileMenu from '@containers/MobileMenu';
import MyOrder from '@containers/MyOrder';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={CreateAccount} />
                    <Route exact path="/recovery-password" component={RecoveryPassword} />
                    <Route exact path="/my-account" component={MyAccount} />
                    <Route exact path="/my-order" component={MyOrder} />
                    <Route exact path="/test" component={MobileMenu} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
