# Simple HelloWorld API Gateway

The stacks consists of

- an [API Gateway](https://aws.amazon.com/api-gateway/) with an endpoint `/hello`
- a [AWS Lambda](https://aws.amazon.com/lambda/) function returning "Hello World" and linked to the endpoint
- permissions for the API Gateway to execute the Lambda function

## Installation

- Install the required modules

  ```sh
  npm install
  ```

- Synthesize

  ```sh
  cdktf synth
  ```

- The Python code needs to be zipped.

- Deploy the stack

  ```sh
  cdktf deploy
  ```

## Test

- Using AWS Console
  - Select service _API Gateway_
  - Select API _rest-api_
  - Select _Resources_, _/hello_, and then _GET_
  - Click on _TEST_ and then on _:zap:TEST_

## ToDos

- Use S3 for uploading Lambda instead of local creation of a zip file.
