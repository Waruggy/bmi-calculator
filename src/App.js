import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {fullName: '', weight: '', height: '', bmi: '', message: '', optimalWeight: ''};
        this.handleChange = this.handleChange.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

handleChange(e){
    this.setState({[e.target.name]: e.target.value});
}

calculateBMI(){
    let heightSquared = (this.state.height/100 * this.state.height/100);
    let bmi = this.state.weight / heightSquared;
    let low = Math.round(18.5 * heightSquared);
    let high = Math.round(24.99 * heightSquared);
    let message = "";
    if(bmi >= 18.5 && bmi <= 24.99){
        message = "You are in a healthy weight range";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        message = "You are overweight";
    }
    else if(bmi >= 30){
        message="You are obese";
    }
    else if(bmi < 18.5){
        message="You are under weight";
    }
    this.setState({message: message});
    this.setState({optimalWeight: "Your suggested weight range is between "+low+ " - "+high}, () => console.log(this.state));
    this.setState({bmi: Math.round(bmi * 100) / 100}, () => console.log(this.state));
}


handleSubmit(e){
    this.calculateBMI();
    e.preventDefault();
    console.log(this.state);

}

    render(){
        return(
            <div className="App">
                <div className="App-header">
                    <h2>BMI calculator</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Please enter your name
                    </label>
                    <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
                    <label>
                        Enter your height in cm
                    </label>
                    <input type="number" name="height" value={this.state.height} onChange={this.handleChange} />
                    <label>
                        Enter your weight in kg
                    </label>
                    <input type="number" name="weight" value={this.state.weight} onChange={this.handleChange} />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default App;