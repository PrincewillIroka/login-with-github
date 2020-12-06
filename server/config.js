const Joi = require("joi");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const config = {
  client_id: process.env.CLIENT_ID,
  redirect_uri: process.env.REDIRECT_URI,
  client_secret: process.env.CLIENT_SECRET,
  proxy_url: process.env.PROXY_URL
};

const envVarsSchema = Joi.object({
  client_id: Joi.string().required(),
  redirect_uri: Joi.string().required(),
  client_secret: Joi.string().required(),
  proxy_url: Joi.string().required()
});

const { error } = envVarsSchema.validate(config);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = config;
