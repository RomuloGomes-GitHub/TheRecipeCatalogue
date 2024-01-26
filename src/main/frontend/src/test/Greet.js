

//<Greet /> Is a function component - It's the prefered way when you want to create simple components
/*function Greet() {
    return <h1>Welcome to The Recipe Catalogue</h1>
}*/

export const Greet = props => {

    const {name, favoriteMeal} = props

    //console.log(props)
    return (
        <div>
            <h1>Welcome {name} to The Recipe Catalogue. Favorite meal: {favoriteMeal}</h1>
        </div>
    )
}

//export default Greet