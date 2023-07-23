"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var feature_file_1 = require("../../placecode-app/lib/validations/feature-file");
// Function to test the validation function with a JSON file
function testValidationWithJSONFile(filePath) {
    try {
        // Read the JSON file
        var data = JSON.parse(fs.readFileSync(filePath, "utf8"));
        // Validate the feature file
        var validationResult = (0, feature_file_1.validateLabels)(data);
        // Log the validation result
        console.log("Validation Result:", validationResult);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
// Test the validation function with a JSON file
testValidationWithJSONFile("options.json");
