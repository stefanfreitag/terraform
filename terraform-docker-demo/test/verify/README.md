# InSpec Profile for Flask Hello World Demo

Apply the terraform plan and then run `inspec exec` to verify the expected state.

Execution and output:

```sh
$ inspec exec test/verify/controls/cont-01.rb

Profile: tests from test/verify/controls/cont-01.rb (tests from test.verify.controls.cont-01.rb)
Version: (not specified)
Target:  local://

  ✔  cont-01: Container is Running
     ✔  Docker Container flask-hello-world should exist
     ✔  Docker Container flask-hello-world should be running
     ✔  Docker Container flask-hello-world ports should eq "0.0.0.0:80->5000/tcp"


Profile Summary: 1 successful control, 0 control failures, 0 controls skipped
Test Summary: 3 successful, 0 failures, 0 skipped
```