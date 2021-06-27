/* eslint-disable */

const { readFileSync } = require("fs");

const generalRules = {
  "no-plusplus": "off",
  "no-continue": "off",

  // Allow leading underscores in identifiers (e.g. _id in MongoDB).
  "no-underscore-dangle": "off",

  // Some APIs use snake_case identifiers.
  camelcase: "off",

  // Depending on the context, using bracket notation might be clearer.
  "dot-notation": "off",

  /**
   * Reassigning parameters can be useful to avoid creating another variable,
   * and to modify objects by reference.
   */
  "no-param-reassign": "off",

  /**
   * Unused variables and arguments should be removed in most cases, but sometimes they are
   * unavoidable. Prefix variable names with an underscore to suppress the error.
   */
  "no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    },
  ],

  // Not necessary for some APIs (consistency reasons)
  "import/prefer-default-export": "off",

  // Stylistic rules.
  "lines-between-class-members": "off",
};

const reactRules = {
  "react/jsx-filename-extension": "off",
  "react/prop-types": "off",
  "react/destructuring-assignment": "off",

  // Allow prop spreading, but require explicit spreading for HTML tags.
  "react/jsx-props-no-spreading": [
    2,
    { html: "enforce", custom: "ignore", explicitSpread: "ignore" },
  ],

  // Use warnings instead of errors for issues that aren't deal-breakers.
  "react/sort-comp": "warn",
  "react/prefer-stateless-function": "warn",
  "react/no-array-index-key": "warn",
};

/**
 * Override rules from eslint-plugin-jsx-a11y, if present.
 */
function getAccessibilityOverrideRules() {
  let a11yRules;
  try {
    a11yRules = require("eslint-plugin-jsx-a11y").rules;
  } catch (e) {
    return {};
  }

  const newRules = {};

  // Produce warnings instead of errors for accessibility problems.
  Object.keys(a11yRules).forEach((name) => {
    newRules[`jsx-a11y/${name}`] = "warn";
  });

  return newRules;
}

/**
 * Override rules from eslint-config-airbnb-base, if present.
 */
function getAirbnbOverrideRules() {
  let airbnbRules;
  try {
    airbnbRules = require("eslint-config-airbnb-base/rules/style.js").rules;
  } catch (e) {
    return {};
  }

  return {
    // Allow the use of for...of statements.
    "no-restricted-syntax": airbnbRules["no-restricted-syntax"].filter(
      (item) => item.selector !== "ForOfStatement"
    ),
  };
}

/**
 * Load the .eslintrc.json file, which contains frontend/backend-specific configuration.
 */
function loadEslintrcJson() {
  return JSON.parse(readFileSync(".eslintrc.json", "utf8"));
}

/**
 * Generate the complete rules object.
 */
function generateRules(usingReact) {
  const rules = { ...generalRules };
  Object.assign(rules, getAirbnbOverrideRules());
  if (usingReact) {
    Object.assign(rules, reactRules);
    Object.assign(rules, getAccessibilityOverrideRules());
  }
  return rules;
}

/**
 * Generate the ESLint configuration.
 */
function generateConfig() {
  const eslintrcJson = loadEslintrcJson();
  const usingReact = eslintrcJson.plugins !== undefined && eslintrcJson.plugins.includes("react");

  return {
    settings: {
      react: {
        version: "detect",
      },
    },
    ...eslintrcJson,
    rules: generateRules(usingReact),
    extends: ["eslint:recommended", usingReact ? "airbnb" : "airbnb-base", "prettier"],
  };
}

module.exports = generateConfig();
