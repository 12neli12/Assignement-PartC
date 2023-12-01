

const Gallery = ({ images, grayscale }) => {

	return (
		<section className="imgContainer">
			{images.map((image) => (
				<article>
					<img
						src={grayscale ? `${image.download_url}?grayscale` : image.download_url}
						alt={image.author}
					/>
					<figcaption>
						<h4>{image.author}</h4>
						<p>{image.download_url}</p>
					</figcaption>
				</article>
			))}
		</section>
	)
}

export default Gallery