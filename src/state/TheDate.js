import React from 'react';

class TheDate extends React.Component {
  constructor( ){

    super( )
      this.state={ datetime: new Date() };
      console.log('constructor')
  }
  componentDidMount() {
    setInterval(
      () => {
      
      this.setState({datetime: new Date()})
    },
    
    1000)
  }

  componentWillUnmount() {
  clearInterval(this.interval)
 }
  render() {
    console.log('render')
    return <div>{this.state.datetime.toLocaleString()}</div>
  }
}

export default TheDate