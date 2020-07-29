import { Construct } from "constructs";
import {
  IamRole,
  LambdaFunction,
  ApiGatewayRestApi,
  ApiGatewayResource,
  ApiGatewayMethod,
  ApiGatewayIntegration,
  LambdaPermission,
  ApiGatewayDeployment,
  DataAwsRegion,
  DataAwsCallerIdentity,
} from "./.gen/providers/aws";

export class HelloWorldApiGw extends Construct {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    const role = new IamRole(this, "basic_lambda_role", {
      description: "Basic Lambda Execution Role",
      assumeRolePolicy: `{ "Version": "2012-10-17", "Statement": [ {
       "Action": "sts:AssumeRole", "Principal": { "Service": "lambda.amazonaws.com" }, "Effect": "Allow", "Sid": "" } ] }`,
    });
    const fn = new LambdaFunction(this, "lambda-hello-world", {
      functionName: "helloWorld",
      handler: "hello_world.lambda_handler",
      runtime: "python3.7",
      description: "A simple Hello world Lambda Function",
      role: role.arn,
      timeout: 60,
      filename: "../hello_world.zip",
    });
    const api = new ApiGatewayRestApi(this, "api-gateway", {
      name: "rest-api",
    });
    const resource = new ApiGatewayResource(this, "api-gateway-resource", {
      restApiId: api.id!,
      parentId: api.rootResourceId,
      pathPart: "hello",
    });
    const method = new ApiGatewayMethod(this, "api-gateway-method", {
      restApiId: api.id!,
      resourceId: resource.id!,
      httpMethod: "GET",
      authorization: "NONE",
    });
    new ApiGatewayIntegration(this, "api-gateway-integration", {
      restApiId: api.id!,
      resourceId: resource.id!,
      httpMethod: method.httpMethod,
      integrationHttpMethod: "POST",
      type: "AWS_PROXY",
      uri: fn.invokeArn,
    });

    const region = new DataAwsRegion(this, "region");
    const userId = new DataAwsCallerIdentity(this, "userId");

    new LambdaPermission(this, "apigw-lambda-permission", {
      action: "lambda:InvokeFunction",
      principal: "apigateway.amazonaws.com",
      functionName: fn.functionName,
      sourceArn:
        "arn:aws:execute-api:" +
        region.name +
        ":" +
        userId.accountId +
        ":" +
        api.id +
        "/*/" +
        method.httpMethod +
        resource.path,
    });

    new ApiGatewayDeployment(this, "api-gateway-deployment", {
      restApiId: api.id!,
      stageName: "Production",
      stageDescription: "Production Environment",
      description: "Hello World - Production environment deployment",
    });

    /**
    new TerraformOutput(this, "endpoint", {
      value: deployment.invokeUrl
    });
     */
  }
}
