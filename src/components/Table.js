import React from 'react';
import ReactDOM from 'react-dom';
import {ExcelRenderer} from 'react-excel-renderer';
import Row from './Row';
import './../App.css';

export default class Table extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
			cols: null,
			rows: null,
			showTable : false,
			empName : '',
			showError : false
	  };	  

	}
	
	compareBy = (key) => {
	  return function (a, b) {
		if (a[key] < b[key]) return -1;
		if (a[key] > b[key]) return 1;
		return 0;
	  };
	}
   
	sortBy = (key) => {
	  let arrayCopy = [...this.state.rows];
	  arrayCopy.sort(this.compareBy(key));
	  this.setState({rows: arrayCopy});
	}

	fileHandler = (event) => {
		let fileObj = event.target.files[0];
			if(fileObj){
				//just pass the fileObj as parameter
				ExcelRenderer(fileObj, (err, resp) => {  
					resp.rows  = resp.rows.map(	
						(item) =>
						{
							return {
								'sr_no' : item[0],
								'title' : item[1],
								'website' : item[2],
								'result' : item[3],
								'gen' : item[4],
								'obc' : item[5]
							};	  
						}				  
					);
					
					if(err){
						console.log(err);            
					}
					else{
						this.setState({
						cols: resp.cols,
						rows: resp.rows,
						showTable : true
						});
					}
				});
		}		
	}

	getEmpData = () => {
		console.log(this.empNameRef.value);
		var temp_Emp = [...this.state.rows];
		if(this.empNameRef.value.length < 1){
			this.setState({
				showError : true
			});
		}else{
			temp_Emp = temp_Emp.filter( emp => emp.title.toLowerCase() === this.empNameRef.value.toLowerCase());
			this.setState({
				empName : temp_Emp[0]
			});
		}
			
	}
	  
	render() {
		console.log('Rendered');
	  const rows = this.state.rows && this.state.rows.map(
		  (rowData) =>
			<Row {...rowData} />	  		
	  );
  
	  return (
		  <div> Please upload details here : 
			<input type="file" onChange={this.fileHandler} style={{"padding":"10px"}} />			
			{this.state.showTable && <div className="table">
				<div className="header">
					<div id="empId" onClick={() => this.sortBy('sr_no')} >empId</div>
					<div id="title" onClick={() => this.sortBy('title')}>empName</div>
					<div id="website" onClick={() => this.sortBy('website')}>salary in $</div>
					<div id="result" onClick={() => this.sortBy('result')}>Age</div>
					<div id="gen" onClick={() => this.sortBy('gen')}>department</div>
					<div id="obc" onClick={() => this.sortBy('obc')}>title</div>
				</div>
				<div className="body">
					{rows}
				</div>
				<div>
				
				<br></br><br></br>	Search Employee : <br></br>{this.state.showError && <span>Please Enter username</span>}
				<br></br><input type="text" name="empname" ref={ (input) => this.empNameRef = input}/>
					
					<input type="submit" onClick={this.getEmpData} value="Search"/>
					<br>
					</br><br></br>
					<div>User Details : {JSON.stringify(this.state.empName)}</div>
						
				</div>
			</div>
			}
		  </div>
		
	  );
	  
	}
}