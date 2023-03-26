import React from 'react'
import './Recipe.scss'
import IMG1 from "../../assets/images/recipe-1.jpg";
import IMG2 from "../../assets/images/recipe-2.jpg";
import IMG3 from "../../assets/images/recipe-3.jpg";
import IMG4 from "../../assets/images/recipe-4.jpg";

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Emi's Kitchen",
		description: "Chicken and rice",
	},
	{
		id: 1,
		image: IMG2,
		title: "Lordie's Kitchen",
		description: "Pizza pepperoni",
	},
	{
		id: 1,
		image: IMG3,
		title: "Jay's Kitchen",
		description: "chicken and chips",
	},
	{
		id: 1,
		image: IMG4,
		title: "Gem's Kitchen",
		description: "noodles and peppered beef",
	},
];

export default function Recipe() {
	return (
		<div className='recipe'>
			{data.map(({ id, image, title, description }) => {
				return (
					<div key={id} className='recipe__item'>
						<img src={image} alt={title} />
						<h2>{title}</h2>
						<p>{description}</p>
					</div>
				)
			})}
		</div>
    
	)
}