import "./card.css"

const Card = ({ title, img, description }) => {
	return (
		<article className="card">
			{img ? <img className="img" src={img} alt={title} /> : null}
			<h2 className="title">{title}</h2>
			<p className="description">{description}</p>
			<button className="btn" type="button">View</button>
		</article>
	)
}

export default Card
