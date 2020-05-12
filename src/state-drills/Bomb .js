import React from "react"
import "./Bomb.css"


class Bomb extends React.Component{
constructor (){

    super()
    this.state = {
        sound: "tik",
        counter: 0

    }
}


componentDidMount() {
    setInterval(
      () => {
      
      this.setState({counter: this.state.counter + 1})
    },   
    1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }


renderTikTok(){
if (this.state.counter >=8){

    clearInterval(this.interval)
    return 'BOOM!!!!!'
}


    else if (this.state.counter%2===0 ){

        return 'tick'
    
    
    } else {
        return 'tok'
    } 







}

render(){

    return(
            <div className="tiktok">
                   {this.renderTikTok()}<br/>
                   {this.state.counter}
            </div>
            )
}

}


export default Bomb