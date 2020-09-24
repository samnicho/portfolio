const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String
  },
  content: {
    body: {
      strapline: {
        type: String
      },
      challenge: {
        type: String,
        required: true
      },
      solution: {
        type: String,
        required: true
      },
    },
    details: {
      url: String,
      company: String,
      tools: [
        {
          type: String,
          required: true
        }
      ],
      team: [
        {
          type: String
        },
      ],
      role: String
    },
  },
  disabled: {
    type: Boolean,
    default: false,
    required: true
  },
  featured: {
    type: Boolean,
    default: false,
    required: true
  },
  tags: [
    {
      type: String
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
