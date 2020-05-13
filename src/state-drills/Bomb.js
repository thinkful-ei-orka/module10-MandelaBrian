import React from 'react';

class Bomb extends React.Component {
    state {
        count: 0
    };

    tickTock = 'tick'

    function divTwo = () {e => return e % 2 === 0}
    function equalEight = () { e => return e >= 8}

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                count: ++count
            })
        }, 1000)

    function tickOrTock = () {
        if (equalEight) {
            
            return 'BOOM!!!'}
        
        else if (divTwo) {
            return 'tick'
        }
        
        else if (!divTwo) {return 'tock'}
        

    }

    render() {
        return <div>
                <p>{tickTock}</p>
            </div>
    }
}



export default Bomb