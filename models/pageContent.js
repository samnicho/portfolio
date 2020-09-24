const mongoose = require("mongoose");

const pageContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  bodyContent: [
    {
      required: true,
      type: String,
    },
  ],
  strapline: String,
});

const PageContent = mongoose.model("PageContent", pageContentSchema);

module.exports = PageContent;
