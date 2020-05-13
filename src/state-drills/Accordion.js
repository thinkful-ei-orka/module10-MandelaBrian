import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {

     sections: [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]
    }

    state = {
        expandedIndex: -1
    };

    handleButtonClick = (index) => {
        
        this.setState({
            expandedIndex: index
        })
        // this.buildButtons(event.currentTarget.id)
    }

    hasP = (index) => {
        if (index === this.state.expandedIndex){
            return <p></p>
        } else {
            return ""
        }    
    }

    renderButtons() {

        return this.props.sections.map((sections, index) => ( 
          <li><button id = {index} key={index} onClick={() => this.handleButtonClick(index)}>
            {sections.title}
        </button>{this.hasP(index)}</li>  )) 
      }

    render() {
        
        return (
            <ul>
                {this.renderButtons()}
                
            </ul>
        )
      }
    }
    
export default Accordion
