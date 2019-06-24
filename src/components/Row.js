import React from 'react';

const Row = (props) => (
	<div className="row" key={props.sr_no} >
	  <div>{props.sr_no}</div>
	  <div>{props.title}</div>
	  <div>{props.website}</div>
	  <div>{props.result}</div>    
	  <div>{props.gen}</div> 
	  <div>{props.obc}</div> 
	</div>
  );

export default Row;