# Copyright: 2020, Stefan Freitag

title 'Docker controls'

control 'cont-01' do
  impact 1.0
  title 'Container is Running'
  desc 'Flask Hello World container should be running'

  describe docker_container 'flask-hello-world' do
    it { should exist }
    it { should be_running }
    its('ports') { should eq '0.0.0.0:80->5000/tcp' }
  end
end
