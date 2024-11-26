import { allureCypress } from "allure-cypress/reporter";

export default {
  e2e: {
    projectId: "gbon7t",
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    }
  }
};