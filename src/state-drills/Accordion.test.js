import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Accordion from './Accordion'

describe(`Accordion Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI empty', () => {
    expect(
      renderer.create(<Accordion sections ={[]}/>).toJSON()
    ).toMatchSnapshot()
  })
  it('renders the UI no sections active', () => {
    expect(
      renderer.create(<Accordion />).toJSON()
    ).toMatchSnapshot()
  })
  it('renders the UI opens a clicked section', () => {
    expect(
      renderer.create(<Accordion sections ={[]}/>).toJSON()
    ).toMatchSnapshot()
  })
  it('renders the UI only opens last when mutliple have been clicked', () => {
    expect(
      renderer.create(<Accordion sections ={[]}/>).toJSON()
    ).toMatchSnapshot()
  })
})