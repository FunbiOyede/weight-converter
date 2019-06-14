import React, {Component} from 'react'
import styles from './Input.module.css';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import {ConvertKiloToTonne , ConvertTonneToKilo}  from '../../Helpers/Convert';

class Inputs extends Component{

    state= {
        tonneValue:'',
        kiloGram:'',
        valueClicked:0
    }

    GetTonneValue = (e) =>{

    let kiloValue = ConvertTonneToKilo(e.target.value)
    if(kiloValue !== ""){
        this.setState({
            tonneValue:e.target.value,
            kiloGram:kiloValue
            })
    }else{
        this.setState({
            kiloGram:0
        })
    }
       
    }

    GetKiloValue = (e) =>{
        let TonneVal = ConvertKiloToTonne(e.target.value);
        this.setState({
            tonneValue:TonneVal,
            kiloGram:e.target.value
            })
    }

    Increment = () =>{
     this.setState( (prevState,props) => {
         return{
            valueClicked:prevState.valueClicked + 1
         }
      
     })
    }
    render(){
            return (
            <div className={styles.container}>
                <div className={styles.tonne}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                    <Input value={this.state.tonneValue}  type="number" startAdornment={<InputAdornment position="start">Tonne</InputAdornment>} onChange={this.GetTonneValue}/>
                    </FormControl> 
                    <span onClick={this.Increment}>plus</span> 
                </div>
                    
                <div className={styles.kilo}>
                    <FormControl fullWidth>
                    <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                    <Input value={this.state.kiloGram} startAdornment={<InputAdornment position="start">Kilo</InputAdornment>} onChange={this.GetKiloValue}/>
                    </FormControl>
                    <span>+</span> <span>-</span>
                </div>
                    
            </div>
        )
    }
 
}

export default Inputs