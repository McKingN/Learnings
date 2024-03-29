import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import '../styles/PlantItem.css'
import CareScale from './CareScale'

function promotion(isBestSale){
	if(isBestSale){
		return <div className='lmj-sales'>Soldes</div>
	}
}

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

		

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}
						{promotion(plant.isSpecialOffer)}
						<CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />	
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList