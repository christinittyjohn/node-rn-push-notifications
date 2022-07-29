const client = require("../sns/client");
const createPlatformEndpoint = require("../sns/platform-endpoint/create");

module.exports = async (req, res, next) => {
  const createEndpoint = createPlatformEndpoint(req.body.token);
  const response = await client.send(createEndpoint);
  client.destroy();
  return res
    .status(200)
    .send(`SNS Endpoint created --- ${response.EndpointArn}`);
};
