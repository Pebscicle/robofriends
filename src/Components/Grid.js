import React, {Component} from "react";

const Grid = (props) =>{
	return (
		<div style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
			{props.children}
		</div>
    	);
}
 

export default Grid;