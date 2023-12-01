
const Filter = ({ handleFetchNewPhotos, toggleGrayscale, grayscale }) => {
	return (
		<section className="bttnSect" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
			<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
				<label className="switch">
					<input
						type="checkbox"
						checked={grayscale}
						onChange={toggleGrayscale}
					/>
					<span className="slider">✖</span>
				</label>
				<p>Make photos grayscale</p>
			</div>
			<button onClick={handleFetchNewPhotos}>
				Fetch New Photos
			</button>
		</section>
	)
}

export default Filter