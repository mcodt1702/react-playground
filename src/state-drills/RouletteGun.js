import React from "react"


export default class RouletteGun extends React.Component{
    static defaultProps = {
        bulletInChamber: 8
      };
    
    
    state = {

            chamber: null,
            spinningTheChamber: false  

        }
    }

    
renderBang(){
return (
"bang")
}


spin(){
if( chamber )

}



render(){
return (

    <div>
<p>{this.renderBang()}</p>
<button onlcick = {() => spin()}>PULL THE TRIGGER</button>

    </div>
)




}





}