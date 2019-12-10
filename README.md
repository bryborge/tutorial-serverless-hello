# Serverless 'Hello'

This is a basic "hello world" example for Serverless and AWS Lambda.

Tutorial - [AWS Lambda Tutorial: Lambda + Serverless = HAPPY](https://www.youtube.com/watch?v=71cd5XerKss)

## Steps Taken

### Preliminary Setup

1.  [Create](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) a new AWS account
    (if you don't have one already).

1.  [Setup](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html) an IAM
    Administrator user (per best practice).

1.  Create an access key/secret on that Administrator user from the IAM web interface.

1.  [Install](https://formulae.brew.sh/formula/awscli) `awscli` and configure it to use the Administrator user.

1.  Download and install NodeJS.

1.  Install Serverless.

    ```sh
    npm install -g serverless
    ```

### Create Project

1.  Create a new folder, `cd` into the folder, and generate a new serverless project from template.

    ```sh
    mkdir serverless-example && cd serverless-example
    serverless create -t aws-nodejs
    ```

1.  Make whatever changes needed for your use-case in `handler.js` (which is your lambda function) and `serverless.yml`
    (which is your configuration file).

1.  Deploy to AWS Lambda.

    ```sh
    serverless deploy
    ```

    Or, for production deploys.

    ```sh
    serverless deploy --stage=production
    ```

1.  You should now be able to hit the Lambda function endpoint (found in the output after running `serverless deploy`
    under `endpoints: GET - https://random.execute-api.us-east-1.amazonaws.com/dev/hello)`
