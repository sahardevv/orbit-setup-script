/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { Bytes32ERC20, Bytes32ERC20Interface } from '../Bytes32ERC20'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'guy',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'wad',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dst',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'wad',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'src',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'dst',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'wad',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506103a7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063095ea7b3146100675780631249c58b1461008f57806323b872dd1461009957806370a08231146100ac578063a9059cbb146100da578063dd62ed3e146100ed575b600080fd5b61007a610075366004610281565b610118565b60405190151581526020015b60405180910390f35b610097610146565b005b61007a6100a73660046102ab565b610174565b6100cc6100ba3660046102e7565b60006020819052908152604090205481565b604051908152602001610086565b61007a6100e8366004610281565b610251565b6100cc6100fb366004610302565b600160209081526000928352604080842090915290825290205481565b3360009081526001602081815260408084206001600160a01b03871685529091529091208290555b92915050565b3360009081526020819052604081208054670de0b6b3a7640000929061016d90849061034b565b9091555050565b60006001600160a01b03841633146101da576001600160a01b03841660009081526001602090815260408083203384529091529020546101b590839061035e565b6001600160a01b03851660009081526001602090815260408083203384529091529020555b6001600160a01b0384166000908152602081905260409020546101fe90839061035e565b6001600160a01b03808616600090815260208190526040808220939093559085168152205461022e90839061034b565b6001600160a01b0384166000908152602081905260409020555060019392505050565b600061025e338484610174565b9392505050565b80356001600160a01b038116811461027c57600080fd5b919050565b6000806040838503121561029457600080fd5b61029d83610265565b946020939093013593505050565b6000806000606084860312156102c057600080fd5b6102c984610265565b92506102d760208501610265565b9150604084013590509250925092565b6000602082840312156102f957600080fd5b61025e82610265565b6000806040838503121561031557600080fd5b61031e83610265565b915061032c60208401610265565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561014057610140610335565b818103818111156101405761014061033556fea2646970667358221220e9cbb2ad6e391edd08e79b65c9ab0fe56192877ba6f162a3d6b3648e4f1c8c8a64736f6c63430008110033'

export class Bytes32ERC20__factory extends ContractFactory {
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
  ): Promise<Bytes32ERC20> {
    return super.deploy(overrides || {}) as Promise<Bytes32ERC20>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): Bytes32ERC20 {
    return super.attach(address) as Bytes32ERC20
  }
  connect(signer: Signer): Bytes32ERC20__factory {
    return super.connect(signer) as Bytes32ERC20__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): Bytes32ERC20Interface {
    return new utils.Interface(_abi) as Bytes32ERC20Interface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Bytes32ERC20 {
    return new Contract(address, _abi, signerOrProvider) as Bytes32ERC20
  }
}
