import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import '../App.css';

class AppBare extends React.Component {

    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h5" color="inherit">
                            ShopApp
                        </Typography>
                        <div className="AppBareSpaces">
                        <Typography variant="h6" color="inherit">
                            <Link to ="/" className="link">To data entry</Link>
                        </Typography>
                        </div>
                        <div className="AppBareSpaces">
                        <Typography variant="h6" color="inherit">
                            <Link to ="/viewdata" className="link">View data</Link>
                        </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


export default AppBare;