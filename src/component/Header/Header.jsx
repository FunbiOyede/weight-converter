import React from 'react';
import styles from './Header.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Header = () => {
    return(
        <div className={styles.title}>
         <AppBar>
            <Toolbar>
                    <Typography>
                        Weight Converter
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;