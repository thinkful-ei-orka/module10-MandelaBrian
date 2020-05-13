import React from 'react';

class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = { count: 0 };
        }

    tickTock = 'tick'

    divTwo = (props) => {
        return (this.state.count % 2 === 0)
    }
    atNine = (props) => {
        return (this.state.count === 9)
    }

    componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             count: this.state.count + 1
    //     })
    // }, 8000)
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
                
            })
        }, 1000)   
    };

    TickOrTock = (props) => {
        if (this.atNine(props)) {
            clearInterval();
            this.setState({
                count: 0
            })
            return 'BOOM!!!'
        }
        
        else if (this.divTwo(props)) {
            return 'tick'
        } else if (!this.divTwo(props)) {
            return 'tock'
        } else {
            return 'Waiting to start'
        }
        

    }

    render() {
        console.log(this.state.count)
        if (this.state.count === 8) {
            return (<div>
                <p>BOOM!!!</p>
            </div>) 
        }
        return (<div>
                <p>{this.TickOrTock(this.state.count)}</p>
            </div>)
    }
}



export default Bomb