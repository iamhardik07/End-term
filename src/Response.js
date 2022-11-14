import './Response.css';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const getData=()=>{
    
	const Data = localStorage.getItem('items');
    if(Data){
        return JSON.parse(localStorage.getItem('items'));
    }

}

export default function Response() {
	
    const [dt, setD] = useState(getData());

	return (
		<div className="container2">
			<header className="resHead">
				<h2>Your response we recieved :</h2>
			</header>
			<table className="styled-table">
				<thead>
					<tr>
						<th>FIRST NAME</th>
						<th>LAST NAME</th>
						<th>CONTACT</th>
						<th>QUERY</th>
					</tr>
				</thead>
                <tbody>

				{dt.map((item) => {
					return (
						<tr>
							<td>{item.firstname}</td>
							<td>{item.secondname}</td>
							<td>{item.contact}</td>
							<td>{item.query}</td>
						</tr>
					);
				})}

                </tbody>
			</table>
			{/* <Form

				head="Contact us form"
				firstname={Submitted[Submitted.length - 1].firstname}
				secondname={Submitted[Submitted.length - 1].secondname}
				contact={Submitted[Submitted.length - 1].contact}
				query={Submitted[Submitted.length - 1].query}
				isDisabled={true}
				show={false}
			/> */}
		</div>
	);
}