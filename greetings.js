'use strict';

module.exports.hello = async event => {
  let name = 'World';

  // If there are query params and a query param is called 'name', assign it to the name variable.
  if (event.queryStringParameters && event.queryStringParameters.name) {
    name = event.queryStringParameters.name;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello, ${name}!`,
        event
      },
      null,
      2
    ),
  };
};
