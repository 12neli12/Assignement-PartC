import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "../components/Filter";
import Gallery from "../components/Gallery";
import SkeletonGrid from "../components/SkeletonGrid";

export default function GalleryPage() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false)
	const [grayscale, setGrayscale] = useState(false);

	const loadMore = async () => {
		try {
			setIsLoading(true)
			const response = await axios.get(`https://picsum.photos/v2/list?page=2&limit=100`);
			const newRandomImages = getRandomImages(response.data, 4);
			setImages(prevImages => [...prevImages, ...newRandomImages]);
			setIsLoading(false)
		} catch (error) {
			console.error("Error fetching more photos:", error);
		}
	};

	const toggleGrayscale = () => setGrayscale(!grayscale)

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`https://picsum.photos/v2/list?page=2&limit=100`
			);
			const randomImages = getRandomImages(response.data, 4);
			setImages(randomImages);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const getRandomImages = (images, count) => {
		const shuffled = images.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	};

	const handleFetchNewPhotos = async () => {
		try {
			const response = await axios.get(
				`https://picsum.photos/v2/list?page=2&limit=100`
			);
			const newRandomImages = getRandomImages(response.data, 4);
			setImages(newRandomImages);
		} catch (error) {
			console.error("Error fetching new photos:", error);
		}
	};

	return (
		<main>
			<Filter 
				handleFetchNewPhotos={handleFetchNewPhotos} 
				toggleGrayscale={toggleGrayscale} 
				grayscale={grayscale} />

			<Gallery 
				images={images} 
				grayscale={grayscale} />

			{isLoading && <SkeletonGrid />}
			<button 
				className="lastBttn" 
				onClick={loadMore}>
					More Photos
				</button>
		</main>
	);
}
