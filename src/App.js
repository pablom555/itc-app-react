import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styled/GlobalStyles';
import DivAppContainer from './styled/DivAppContainer';
import AppNavigation from './components/AppNavigation';
import Home from './components/Home';
import FooterContainer from './components/FooterContainer';
import NotFound from './components/NotFound';

function App() {

    return (
        <React.Fragment>
            <GlobalStyles/>
            <DivAppContainer>
                <BrowserRouter>
                    <AppNavigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </DivAppContainer>
            <FooterContainer />
        </React.Fragment>
    );
}

export default App;
