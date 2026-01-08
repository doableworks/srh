/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs-extra");
const path = require("path");

const sectionNames = process.argv.slice(2);

if (sectionNames.length === 0) {
	console.error("Please provide at least one section name.");
	process.exit(1);
}

const sectionDir = path.join(__dirname, "..", "src", "sections");

/** Convert string to PascalCase */
const toPascalCaseWithSpace = (str) => {
	return str
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");
};

/** Convert string to PascalCase */
const toPascalCaseWithoutSpace = (str) => {
	return str
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join("");
};

/** function to create the comopnent */
const createsection = async (sectionName) => {
	try {
		const pascalCaseName = toPascalCaseWithoutSpace(sectionName);
		const nameWithSpace = toPascalCaseWithSpace(sectionName);

		// Ensure the app directory exists
		if (!(await fs.pathExists(sectionDir))) {
			await fs.mkdir(sectionDir);
		}

		// Create the directory for the section
		const compInsideDir = path.join(sectionDir, sectionName);
		if (await fs.pathExists(compInsideDir)) {
			console.error(`section ${sectionName} already exists.`);
			return;
		}
		await fs.mkdir(compInsideDir);

		// Create the section file
		const sectionContent = `// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./${pascalCaseName}.module.scss";

// IMAGES //

// DATA //

/** ${nameWithSpace} Section */
export default function ${pascalCaseName}() {
	return (
		<div className={styles.${pascalCaseName}}></div>
	);
}
`;

		await fs.writeFile(
			path.join(compInsideDir, `${pascalCaseName}.js`),
			sectionContent
		);

		// Create the style file
		const styleContent = `@use "@/styles/helpers/helpers.scss" as *;

.${pascalCaseName} {
}`;
		await fs.writeFile(
			path.join(compInsideDir, `${pascalCaseName}.module.scss`),
			styleContent
		);

		console.log(`Section ${sectionName} created successfully!`);
	} catch (err) {
		console.error(`Error creating section ${sectionName}:`, err);
	}
};

/** Create Sections */
const createsections = async () => {
	for (const sectionName of sectionNames) {
		await createsection(sectionName);
	}
};

createsections();
