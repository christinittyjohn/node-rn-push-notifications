const { CreatePlatformEndpointCommand } = require("@aws-sdk/client-sns");

module.exports = (token) =>
  new CreatePlatformEndpointCommand({
    PlatformApplicationArn: "arn:aws:sns:us-east-1:172840532362:app/GCM/wakeup",
    Token: token,
  });
