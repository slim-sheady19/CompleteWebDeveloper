import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const cardsArray = robots.map((user, i)=> {
        return (
        <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}/>
        );
    })
    return (
    <div>
        {cardsArray};
    </div>
    );
}

export default Cardlist;