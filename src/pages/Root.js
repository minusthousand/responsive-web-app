import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GlobalStyle from '../theme/globalStyle'

import Header from '../components/Header/Header'
import Home from './Home/Home'

function Root() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </>
    )
}

export default Root
