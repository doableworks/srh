/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs-extra");
const path = require("path");

const componentNames = process.argv.slice(2);

if (componentNames.length === 0) {
	console.error("Please provide at least one component name.");
	process.exit(1);
}

const componentDir = path.join(__dirname, "..", "src", "components");

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

/** Function to create the Component */
const createComponent = async (componentName) => {
	try {
		const pascalCaseName = toPascalCaseWithoutSpace(componentName);
		const nameWithSpace = toPascalCaseWithSpace(componentName);

		// Ensure the app directory exists
		if (!(await fs.pathExists(componentDir))) {
			await fs.mkdir(componentDir);
		}

		// Create the directory for the component
		const compInsideDir = path.join(componentDir, componentName);
		if (await fs.pathExists(compInsideDir)) {
			console.error(`Component ${componentName} already exists.`);
			return;
		}
		await fs.mkdir(compInsideDir);

		// Create the component file
		const componentContent = `// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./${pascalCaseName}.module.scss";

// IMAGES //

// DATA //

/** ${nameWithSpace} Component */
export default function ${pascalCaseName}() {
	return (
		<div className={styles.${pascalCaseName}}></div>
	);
}

`;

		await fs.writeFile(
			path.join(compInsideDir, `${pascalCaseName}.js`),
			componentContent
		);

		// Create the style file
		const styleContent = `@use "@/styles/helpers/helpers.scss" as *;

.${pascalCaseName} {
}`;
		await fs.writeFile(
			path.join(compInsideDir, `${pascalCaseName}.module.scss`),
			styleContent
		);

		console.log(`Component ${componentName} created successfully!`);
	} catch (err) {
		console.error(`Error creating component ${componentName}:`, err);
	}
};

/** Create components */
const createComponents = async () => {
	for (const componentName of componentNames) {
		await createComponent(componentName);
	}
};

createComponents();
