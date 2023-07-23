import * as fs from "fs";
import {
  validateFeatureFile,
  validateLabels,
  validateDependFeatures,
  validateDependLabels,
} from "../../placecode-app/lib/validations/feature-file";

// Function to test the validation function with a JSON file
function testValidationWithJSONFile(filePath) {
  try {
    // Read the JSON file
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Validate the feature file
    const validationResult = validateLabels(data);

    // Log the validation result
    console.log("Validation Result:", validationResult);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Test the validation function with a JSON file
testValidationWithJSONFile("options.json");
