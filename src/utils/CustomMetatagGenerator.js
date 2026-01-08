import defaultMetaData from "@/data/defaultMetaData";

/** Function to generate Custom Metadata */
export default function customGenerateMetadata({
	title,
	description,
	ogImage,
}) {
	// Set the meta title
	const customTitle = title || defaultMetaData[0].title;
	// Set the meta description
	const customDescription = description || defaultMetaData[0].description;
	// Set the meta Og Image
	const customImage = ogImage || defaultMetaData[0].ogImage.src;
	// Set the meta url

	return {
		title: customTitle,
		description: customDescription,
		ogImage: customImage,
	};
}
