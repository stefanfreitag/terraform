
import { Testing, TerraformStack } from "cdktf";
import { HelloWorldApiGw} from "../helloworld_api_gw";



test("snapshot test", () => {  
  const app = Testing.app();
  const stack = new TerraformStack(app, "test");
  new HelloWorldApiGw(stack, "api-gw");
  
  expect(Testing.synth(stack)).toMatchSnapshot();
});