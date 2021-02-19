import React, {Component} from "react";
import './Card.css';

const Card = ({name, email, id}) =>{
	return (
    	<div className="container  tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer">
    		<img src={`https://robohash.org/${id}`} alt="robot" />
    		<div>
    			<h2>{name}</h2>
    			<p>{email}</p>
    		</div>
    	</div>
    	);
}
 

export default Card;