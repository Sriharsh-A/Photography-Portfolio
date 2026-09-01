import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./public/images";
const outputDir = "./public/images-optimized";

async function processDirectory(inputPath, outputPath) {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  const files = fs.readdirSync(inputPath);

  for (const file of files) {
    const inputFile = path.join(inputPath, file);
    const outputFile = path.join(
      outputPath,
      file.replace(/\.(png|jpg|jpeg)$/i, ".webp")
    );

    const stats = fs.statSync(inputFile);

    if (stats.isDirectory()) {
      await processDirectory(
        inputFile,
        outputFile
      );
      continue;
    }

    if (!/\.(png|jpg|jpeg)$/i.test(file)) {
      continue;
    }

    try {
      await sharp(inputFile)
        .resize({
          width: 2400,
          height: 2400,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({
          quality: 88,
          effort: 5,
        })
        .toFile(outputFile);

      console.log(`✓ ${inputFile} → ${outputFile}`);
    } catch (error) {
      console.error(`✗ Failed: ${inputFile}`);
      console.error(error);
    }
  }
}

console.log("Optimizing portfolio images...\n");

await processDirectory(
  inputDir,
  outputDir
);

console.log("\nDone! 🚀");