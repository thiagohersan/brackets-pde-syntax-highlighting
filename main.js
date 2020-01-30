define(function (require, exports, module) {
  "use strict";

  var LanguageManager = brackets.getModule('language/LanguageManager');
  var language = LanguageManager.getLanguage("java");
  language.addFileExtension("pde");
});
