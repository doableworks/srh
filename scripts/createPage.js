/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs-extra");
const path = require("path");

const pageNames = process.argv.slice(2);

if (pageNames.length === 0) {
	console.error("Please provide at least one page name.");
	process.exit(1);
}

const appDir = path.join(__dirname, "..", "src", "app");

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

/** function to create the page */
const createPage = async (pageName) => {
	try {
		const pascalCaseName = toPascalCaseWithoutSpace(pageName);
		const nameWithSpace = toPascalCaseWithSpace(pageName);

		// Ensure the app directory exists
		if (!(await fs.pathExists(appDir))) {
			await fs.mkdir(appDir);
		}

		// Create the directory for the page
		const pageDir = path.join(appDir, pageName);
		if (await fs.pathExists(pageDir)) {
			console.error(`Page ${pageName} already exists.`);
			return;
		}
		await fs.mkdir(pageDir);

		// Create the page file
		const pageContent = `// MODULES //

// COMPONENTS //
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

// SECTIONS //

// STYLES //
import styles from "./${pascalCaseName}.module.scss";

// DATA //

// METADATA //
export const metadata = {
	title: "${nameWithSpace}",
	description: "",
};

/** ${nameWithSpace} Page */
export default function ${pascalCaseName}Page() {
	return (
		<div>
			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.${pascalCaseName}Page}>
				<h1>${nameWithSpace}</h1>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}

`;

		await fs.writeFile(path.join(pageDir, "page.js"), pageContent);

		// Create the style file
		const styleContent = `@use "@/styles/helpers/helpers.scss" as *;

.${pascalCaseName}Page {
}`;
		await fs.writeFile(
			path.join(pageDir, `${pascalCaseName}.module.scss`),
			styleContent
		);

		console.log(`Page ${pageName} created successfully!`);
	} catch (err) {
		console.error(`Error creating page ${pageName}:`, err);
	}
};

/** create pages */
const createPages = async () => {
	for (const pageName of pageNames) {
		await createPage(pageName);
	}
};

createPages();
