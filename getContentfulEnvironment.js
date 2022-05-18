const path = require('path');
require('dotenv').config({
  path: path.resolve(process.cwd(), '.env.development.local')
})

const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT,
  })

  return contentfulClient
    .getSpace(process.env.REACT_APP_SPACE_ID)
    .then(space => space.getEnvironment(process.env.REACT_APP_ENV_ID))
}
