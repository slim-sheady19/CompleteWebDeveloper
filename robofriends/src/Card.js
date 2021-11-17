import React from 'react'; //need to import React to use JSX for the pseudo HTML code below

const Card = (props) => {           //we can also destructure here by inserting name, email, id instead of props
    //const {name, email, id } = props; //destructuring: this allows us to use the shorter variables name, email, id below instead of props.name etc
    return (
        //below is classes and syntax from tachyons
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* IMPORTANT: ADDING VARIABLE INSIDE JSX STRING */}
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/>
            <div>
                {/* add the properties dynamically */}
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;