import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? sun : water

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
                <img src={scaleType} alt='emoji' key={rangeElem.toString()} />
				) : null
			)}
		</div>
	)
}

export default CareScale