const path = require("path");
module.exports = {
  i18n: {
    defaultLocale: "def",
    locales: ["def", "en", "ar"],
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
  trailingSlash: true,
};
