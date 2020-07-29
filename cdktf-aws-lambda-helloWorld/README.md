# Simple HelloWorld API Gateway

The stacks consists of

- an API Gateway with an endpoint `/hello`
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

- Open a web browser

## ToDos

- Use S3 for uploading Lambda instead of local creation of a zip file.
