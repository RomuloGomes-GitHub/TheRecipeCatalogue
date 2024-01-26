import React, {Component} from 'react'

//<Welcome />  Is a class component - Can have maintain its own data and have more complicated logic and provide hooks - PS. There was an update and the hooks approach is the most recommended
class Welcome extends Component {

    render(){
        const {name, favoriteMeal} = this.props

        return (<h1>Class Component. {name}, Favorite meal: {favoriteMeal}</h1>)
    }
}

export default Welcome