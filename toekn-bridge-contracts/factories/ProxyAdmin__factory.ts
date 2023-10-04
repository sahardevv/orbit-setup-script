/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { ProxyAdmin, ProxyAdminInterface } from '../ProxyAdmin'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'contract ITransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'changeProxyAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ITransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
    ],
    name: 'getProxyAdmin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ITransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
    ],
    name: 'getProxyImplementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ITransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ITransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6106918061007e6000396000f3fe60806040526004361061006b5760003560e01c8063204e1c7a14610070578063715018a6146100a65780637eff275e146100bd5780638da5cb5b146100dd5780639623609d146100fb57806399a88ec41461010e578063f2fde38b1461012e578063f3b7dead1461014e575b600080fd5b34801561007c57600080fd5b5061009061008b366004610483565b61016e565b60405161009d91906104a7565b60405180910390f35b3480156100b257600080fd5b506100bb6101ff565b005b3480156100c957600080fd5b506100bb6100d83660046104bb565b610213565b3480156100e957600080fd5b506000546001600160a01b0316610090565b6100bb61010936600461050a565b61027d565b34801561011a57600080fd5b506100bb6101293660046104bb565b6102ec565b34801561013a57600080fd5b506100bb610149366004610483565b610320565b34801561015a57600080fd5b50610090610169366004610483565b61039e565b6000806000836001600160a01b031660405161019490635c60da1b60e01b815260040190565b600060405180830381855afa9150503d80600081146101cf576040519150601f19603f3d011682016040523d82523d6000602084013e6101d4565b606091505b5091509150816101e357600080fd5b808060200190518101906101f791906105e0565b949350505050565b6102076103c4565b610211600061041e565b565b61021b6103c4565b6040516308f2839760e41b81526001600160a01b03831690638f283970906102479084906004016104a7565b600060405180830381600087803b15801561026157600080fd5b505af1158015610275573d6000803e3d6000fd5b505050505050565b6102856103c4565b60405163278f794360e11b81526001600160a01b03841690634f1ef2869034906102b590869086906004016105fd565b6000604051808303818588803b1580156102ce57600080fd5b505af11580156102e2573d6000803e3d6000fd5b5050505050505050565b6102f46103c4565b604051631b2ce7f360e11b81526001600160a01b03831690633659cfe6906102479084906004016104a7565b6103286103c4565b6001600160a01b0381166103925760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61039b8161041e565b50565b6000806000836001600160a01b0316604051610194906303e1469160e61b815260040190565b6000546001600160a01b031633146102115760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610389565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038116811461039b57600080fd5b60006020828403121561049557600080fd5b81356104a08161046e565b9392505050565b6001600160a01b0391909116815260200190565b600080604083850312156104ce57600080fd5b82356104d98161046e565b915060208301356104e98161046e565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561051f57600080fd5b833561052a8161046e565b9250602084013561053a8161046e565b9150604084013567ffffffffffffffff8082111561055757600080fd5b818601915086601f83011261056b57600080fd5b81358181111561057d5761057d6104f4565b604051601f8201601f19908116603f011681019083821181831017156105a5576105a56104f4565b816040528281528960208487010111156105be57600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b6000602082840312156105f257600080fd5b81516104a08161046e565b60018060a01b038316815260006020604081840152835180604085015260005b818110156106395785810183015185820160600152820161061d565b506000606082860101526060601f19601f83011685010192505050939250505056fea26469706673582212208eab97e121a56caa23ad34a7f5c99761eb7202103391f13cf055f3d2b2f39e1464736f6c63430008110033'

export class ProxyAdmin__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0])
    } else {
      super(...args)
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ProxyAdmin> {
    return super.deploy(overrides || {}) as Promise<ProxyAdmin>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): ProxyAdmin {
    return super.attach(address) as ProxyAdmin
  }
  connect(signer: Signer): ProxyAdmin__factory {
    return super.connect(signer) as ProxyAdmin__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ProxyAdminInterface {
    return new utils.Interface(_abi) as ProxyAdminInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyAdmin {
    return new Contract(address, _abi, signerOrProvider) as ProxyAdmin
  }
}
