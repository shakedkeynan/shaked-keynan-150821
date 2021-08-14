import Button from '@material-ui/core/Button';
import { Div } from './MyRouterElements'
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Main from '../main/index';
import Favorites from '../favorites';
function MyRouter() {
    return (
        <div >
            <Router>
                <Div>
                    <Link to="/">
                        <Button variant="outlined" style={{ border: 'splid 1px #0D3FFF', color: '#0D3FFF' }}>
                            main
                        </Button>
                    </Link>
                    <Link to="/favorites">
                        <Button variant="outlined" color="#0D3FFF">
                            favorites
                        </Button>
                    </Link>

                </Div>
                <Switch>
                    <Route exact path="/">
                        <Main first="tel aviv"/>
                        ‫‫​‫​‫​‫​‫​‫​‫​‫​‫​‫​‫‫​‫​‫‫​‫​‫‫​‫​‫‫​‫​‫‫​‫​‫‫​‫‫‫‫​‫​‫‫​‫​‫​‫​‫‫​‫​‫​‫‫​‫‫‫​‫​‫​‫‫​‫​‫‫‫​‫​‫​‫‫​‫​‫‫‫​‫‫​‫‫​‫‫​‫​‫​‫​‫‫‫​‫‫‫​‫​‫‫​‫​‫‫​‫​‫‫​‫​‫​‫​‫‫​‫‫‫​‫‫‫​‫‫​‫‫​‫‫​‫​‫​‫‫​‫‫​‫​‫​‫​‫‫‫​‫‫‫​‫‫‫​‫​‫‫​‫​‫​‫‫‫​‫​‫​‫‫‫​‫​‫​‫‫​‫‫‫‫​‫​‫‫​‫​‫​‫​‫​‫‫​‫‫​‫‫​‫​‫‫​‫‫​‫‫​‫​‫​‫​‫​‫​‫‫‫‫​‫​‫‫‫‫‫​‫​‫‫‫​‫‫​‫​‫​‫‫​‫‫‫‫​‫‫‫​‫​‫​‫‫​‫‫​‫​‫‫​‫​‫​‫​‫‫‫​‫‫​‫‫​‫‫‫​‫​‫​‫‫​‫‫​‫‫‫​‫‫​‫‫​‫‫​‫‫‫​‫‫‫‫​‫​‫‫​‫​‫‫​‫​‫​‫​‫​‫‫​‫​‫‫‫‫​‫‫‫​‫​‫​‫​‫​‫‫‫‫​‫​‫‫‫‫
                    </Route>
                    <Route path="/favorites">
                        <Favorites />
                    </Route>

                </Switch>
            </Router >
        </div>
    );
}

export default MyRouter;
