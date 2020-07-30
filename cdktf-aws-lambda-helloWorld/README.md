# Simple HelloWorld API Gateway

The stacks consists of

- an [API Gateway](https://aws.amazon.com/api-gateway/) with an endpoint `/hello`
- a [AWS Lambda](https://aws.amazon.com/lambda/) function returning "Hello World" and linked to the endpoint
- permissions for the API Gateway to execute the Lambda function

## Installation

- Install the required modules

  ```sh
  $ npm install
  added 199 packages from 136 contributors and audited 200 packages in 12.21s

  43 packages are looking for funding
  run `npm fund` for details

  found 0 vulnerabilities
  ```

- Generate the providers
  
  ```sh
  $ cdktf get
  Generated typescript constructs in the output directory: .gen
  ```

- Synthesize

  ```sh
  $ cdktf synth
  Generated Terraform code in the output directory: cdktf.out
  ```

- The Python code needs to be zipped and copied to the current directory

  ```sh
  $ cd lambda
  $ zip hello_world.zip hello_world.py
  adding: hello_world.py (deflated 17%)
  $ mv hello_world.zip ..
  ```

- Deploy the stack

  ```sh
  $ cdktf deploy
  Deploying Stack: cdktf-aws-apigw-lambda-helloWorld
  Resources
   ✔ AWS_API_GATEWAY_DEPL helloworldgw_apigat aws_api_gateway_deployment.cdktfawsapigwlambdahelloWorld_helloworldgw_apigatewaydeployment_6D4849D0
   ✔ AWS_API_GATEWAY_INTE helloworldgw_apigat aws_api_gateway_integration.cdktfawsapigwlambdahelloWorld_helloworldgw_apigatewayintegration_AC2FDBA1
   ✔ AWS_API_GATEWAY_METH helloworldgw_apigat aws_api_gateway_method.cdktfawsapigwlambdahelloWorld_helloworldgw_apigatewaymethod_E989C336
   ✔ AWS_API_GATEWAY_RESO helloworldgw_apigat aws_api_gateway_resource.cdktfawsapigwlambdahelloWorld_helloworldgw_apigatewayresource_AC6D4A39
   ✔ AWS_API_GATEWAY_REST helloworldgw_apigat aws_api_gateway_rest_api.cdktfawsapigwlambdahelloWorld_helloworldgw_apigateway_7F0F12BB
   ✔ AWS_IAM_ROLE         helloworldgw_basicl aws_iam_role.cdktfawsapigwlambdahelloWorld_helloworldgw_basiclambdarole_232EB8BB
   ✔ AWS_LAMBDA_FUNCTION  helloworldgw_lambda aws_lambda_function.cdktfawsapigwlambdahelloWorld_helloworldgw_lambdahelloworld_F75E1DA8
   ✔ AWS_LAMBDA_PERMISSIO helloworldgw_apigwl aws_lambda_permission.cdktfawsapigwlambdahelloWorld_helloworldgw_apigwlambdapermission_B20E75FC

  Summary: 8 created, 0 updated, 0 destroyed.

  Output: cdktfawsapigwlambdahelloWorld_helloworldgw_endpoint_51060F34 = https://lxjwhb6br9.execute-api.eu-central-1.amazonaws.com/Production
  ```

## How to test

- Using AWS Console
  - Select service _API Gateway_
  - Select API _rest-api_
  - Select _Resources_, _/hello_, and then _GET_
  - Click on _TEST_ and then on _:zap:TEST_

- Using `curl`

  ```sh
  $ curl https://lxjwhb6br9.execute-api.eu-central-1.amazonaws.com/Production/hello
  "Hello from Lambda!"%
  ```

## ToDos

- Use S3 for uploading Lambda instead of local creation of a zip file.
