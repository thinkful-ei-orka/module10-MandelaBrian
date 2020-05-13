import React from 'react';

class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = { count: 0 };
        }

    tickTock = 'tick'

    divTwo = () => {
        return (this.state.count % 2 === 0)
    }
    equalEight = () => {
        return (this.state.count >= 8)
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
        })
    }, 1000)
        // this.interval = setInterval(() => {
        //     this.setState({
        //         count: this.state.count + 1
                
        //     })
        // }, 1000)   
    };

    TickOrTock = () => {
        if (this.equalEight) {
            clearInterval()
            this.setState({
                count: 0
            })
            return 'BOOM!!!'
        } else if (this.divTwo) {
            return 'tick'
        } else if (!this.divTwo) {
            return 'tock'
        } else {
            return 'Waiting to start'
        }
        

    }

    render() {
        console.log(this.state.count)
        return (<div>
                <p>{<TickOrTock/>}</p>
            </div>)
    }
}



export default Bomb