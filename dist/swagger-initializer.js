window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "https://acemegaschool.github.io/evanston/asyncapi.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerEditor.plugins.EditorContentType,
      SwaggerEditor.plugins.EditorPreviewAsyncAPI,
      SwaggerEditor.plugins.EditorPreviewApiDesignSystems,
      SwaggerEditor.plugins.SwaggerUIAdapter,
      SwaggerUIBundle.plugins.DownloadUrl,
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
