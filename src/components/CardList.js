import React from 'react';
import Card from './Card';

const CardList = ({ countries }) => {
	return (
		<div>
			{
				countries.map((user, i) => {
					return (
						<Card 
							key={i} 
							code={countries[i].code} 
							name={countries[i].name} 
							chart1={countries[i].chart1}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;