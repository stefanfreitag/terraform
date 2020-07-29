import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws";
import { HelloWorldApiGw } from "./helloworld_api_gw";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", {
      region: "eu-central-1",
      profile: "cdk",
    });
    new HelloWorldApiGw(this, "helloworld-gw");
  }
}

const app = new App();
new MyStack(app, "cdktf-aws-apigw-lambda-helloWorld");
app.synth();
