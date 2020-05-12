import React from "react"

class HelloWorld extends React.Component{
constructor(){

    super()
    this.state = { who:"world"}
}


    render(){
return (
        <div>
            <h1>Hello {this.state.who}</h1>
            <button onClick= {()=> this.setState({who:"React"})}>React</button><br></br>
            <button onClick= {()=> this.setState({who:"World"})}>World</button><br></br>
            <button onClick= {()=> this.setState({who:"Friend"})}>Friend</button>
        </div>
)
    }



}





export default HelloWorld