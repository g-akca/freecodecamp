function normalizeUnits(manifest) {
  return {
    ...manifest,
    weight: manifest.unit === "lb" ? manifest.weight * 0.45 : manifest.weight,
    unit: "kg"
  }
}

function validateManifest(manifest) {
  const errors = {};
  const requiredFields = ["containerId", "destination", "weight", "unit", "hazmat"];

  requiredFields.forEach((field) => {
    if (!(field in manifest)) {
      errors[field] = "Missing";
    }
  });

  if ("containerId" in manifest && (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0)) {
    errors.containerId = "Invalid";
  }

  if ("destination" in manifest && (typeof manifest.destination !== "string" || manifest.destination.trim() === "")) {
    errors.destination = "Invalid";
  }

  if ("weight" in manifest && (Number.isNaN(manifest.weight) || manifest.weight <= 0)) {
    errors.weight = "Invalid";
  }

  if ("unit" in manifest && manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if ("hazmat" in manifest && typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const validationErrors = validateManifest(manifest);

  if (Object.keys(validationErrors).length === 0) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  }
  else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationErrors);
  }
}