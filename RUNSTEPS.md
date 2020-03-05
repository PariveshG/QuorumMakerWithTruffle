pplication Dvelop through Quorum maker with truffle
truffle version - 4.1.15
Require
Geth Version
Go

set gopath in ~/.profile
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH

## use command to load profile file
source ~/.profile

geth version
Geth
Version: 1.9.11-stable
Git Commit: 6a62fe399b68ab9e3625ef5e7900394f389adc3a
Architecture: amd64
Protocol Versions: [65 64 63]
Go Version: go1.13.8
Operating System: linux
GOPATH=
GOROOT=/build/ethereum-CazSBy/.go




Links - 
https://github.com/synechron-finlabs/quorum-maker/wiki

##Steps -
$ git clone https://github.com/synechron-finlabs/quorum-maker 

#go inside quorum maker directory to create network, choose option 1 to create network Org1
./setup.sh
#go inside quorum maker directory to join channel, choose option 2 to join channel for Org2
./setup.sh
#go to browser open url to accept joining request. Here port number is node port manager
http://54.180.32.186:9009/dashboard


###create project directory mywork directory
npm i truffle@4.1.15 -g
truffle init

truffle create contract HelloWorld

RPC port of the quorum node used in truffle-config

###define rpc ports in truffle-config.js


to interact with any node use below command(Org2)
geth attach /home/ubuntu/quorum/quorum-maker/Org2/node/qdata/geth.ipc

Welcome to the Geth JavaScript console!

instance: Geth/brrtz-4/v1.7.2-stable/linux-amd64/go1.9.4
coinbase: 0x8b0787c6581dd...f538284
at block: 10611548 (Tue, 19 Feb 2019 15:20:32 CET)
 modules: eth:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0


 check accounts
 eth.accounts
unlock accounts to use on nodes-
particualr 360000 time
personal.unlockAccount(eth.accounts[0], '' ,360000)

or
personal.unlockAccount(eth.accounts[0])
or
personal.unlockAccount('0x4ef19fd08649eea06ea78e575063fbf5e552eeab')

personal.unlockAccount(eth.accounts[0])

###compile truffle project inside root directory of truffle project
truffle compile
###migrate or deploy project inside root directory of truffle project
truffle migrate
###log to particualr node 
truffle console
###run  this command from development node
SimpleStorage.deployed().then(function(instance) { return instance.get(); })
###exit from truffle console
.exit
###run  this command from nodeTwo node to see the private transaction happens only development node and nodeTwo
SimpleStorage.deployed().then(function(instance) { return instance.get(); })
###exit from truffle console
.exit
###run  this command from nodeThree node to see no output becoz transaction happens only development node and nodeTwo 
SimpleStorage.deployed().then(function(instance) { return instance.get(); })
###exit from truffle console
.exit
###javascript file is created to see the directly interact with deployed contract and return transaction hash

#Useful links for this development
https://www.trufflesuite.com/tutorials/building-dapps-for-quorum-private-enterprise-blockchains

https://medium.com/haloblock/deploy-your-own-smart-contract-with-truffle-and-ganache-cli-beginner-tutorial-c46bce0bd01e

