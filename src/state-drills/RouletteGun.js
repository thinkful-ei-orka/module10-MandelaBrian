import React from 'react'

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false
    };

    trigger = () => {

        this.setState({
            chamber: Math.ceil(Math.random()*8),
            spinningTheChamber: false
        })
    }

    handleButton = () => {
        this.setState(
            {spinningTheChamber: true} 
            );
        setTimeout(this.trigger,2000);
    } 

    changeP = () => {
        if (this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!'
        }
        else if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!!'
        }
        else {return "you're safe!"}

    }

    render () {
        return (<div>
                <button onClick={this.handleButton}>Pull the Trigger</button>
                    <p>{this.changeP()}</p>
                </div>)
    }

}

export default RouletteGun