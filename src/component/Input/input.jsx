import React from 'react'
import styles from './Input.module.css';
import WithClass from '../../hoc/WithClass';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const input = () => {
    return (
        <div className={styles.container}>
        <FormControl fullWidth>
        <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
        <Input startAdornment={<InputAdornment position="start">$</InputAdornment>}/>
      </FormControl>
    </div>
    )
}

export default input