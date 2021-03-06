import React from 'react';
import Cardlist from '../components/Cardlist';
import {robots} from '../robots'; //must destructure robots since robots.js does not export any default class
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends React.Component { //App class declared here (child of React.Component class) has a state variable
                                    //with props robots and searchfield accessible by all children
    constructor() {
        super()
        this.state = {          //we use state here for user input to affect state of the app
            robots: robots,
            searchfield: ''
        }
    }

    //this function is similar to Start or Awake in Unity.  it is called after the component is spawned
    componentDidMount() {
        //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    //this function updates the state of the searchbox
    onSearchChange = (event) => { //we use the = (event) => in order to keep the this keyword used below pointing to the state object
        console.log(event.target.value); //print the actual input rather than the signal being sent with .target.value
        this.setState({ searchfield: event.target.value }) //need to use this.setState React method when we want to affect state props 
    }

    //render function is always called when components have mounted and whenever a change in state is detected
    render () {
        const {robots, searchfield} = this.state; //destructure to use shorthand to access this.state.variables

        //create array of robots that are filtered with the search field text and changed dynamically.
        //it is created inside scope of render function to be accessed in return below
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        console.log(filteredRobots);
        //show loading text while fetching robots.  the ! denotes null
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                
                <SearchBox searchChange={this.onSearchChange}/> 
                <Scroll>
                    {/* construct an object of class Cardlist called robots with argument filteredRobots */}
                    <Cardlist robots={filteredRobots}/>
                </Scroll>
            </div>
           );
        }
    };
}

export default App;