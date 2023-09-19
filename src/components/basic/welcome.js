import Para from "./para"

// syntax of component 
function WelcomeNote (props){
    console.log(props,'props')

    return (
        <div>
            <h1>Hello {props.name}</h1>
            <Para age={props.age}/>
        </div>
    )
}

export default WelcomeNote

