/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L1ForceOnlyReverseCustomGateway,
  L1ForceOnlyReverseCustomGatewayInterface,
} from '../L1ForceOnlyReverseCustomGateway'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_sequenceNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'TokenSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'newData',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'madeExternalCall',
        type: 'bool',
      },
    ],
    name: 'WithdrawRedirected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalFinalized',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
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
    name: 'counterpartGateway',
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
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
    ],
    name: 'encodeWithdrawal',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_l1Addresses',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_l2Addresses',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'forceRegisterTokenToL2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_initialData',
        type: 'bytes',
      },
    ],
    name: 'getExternalCall',
    outputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
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
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
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
    name: 'l1ToL2Token',
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
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundTo',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransferCustomRefund',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
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
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'redirectedExits',
    outputs: [
      {
        internalType: 'bool',
        name: 'isExit',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: '_newTo',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_creditBackAddress',
        type: 'address',
      },
    ],
    name: 'registerTokenToL2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'registerTokenToL2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
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
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferExitAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelist',
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
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50612488806100206000396000f3fe6080604052600436106101355760003560e01c8063a0c76a96116100ab578063d2ce7d651161006f578063d2ce7d6514610383578063f26bdead14610396578063f68a9082146103a9578063f887ea40146103d7578063f8c8765e146103f7578063fb0e722b1461041757600080fd5b8063a0c76a96146102c8578063a7e28d48146102e8578063bcf2e6eb14610321578063bd5f3e7d14610350578063ca346d4a1461037057600080fd5b80632e567b36116100fd5780632e567b361461020a5780634fb1a07b1461021d5780638a2dc0141461023d5780638da5cb5b1461027357806393e59dc11461029357806395fcea78146102b357600080fd5b806301ffc9a71461013a578063020a60581461016f57806313af40351461019d5780631d3a689f146101bf5780632db09c1c146101d2575b600080fd5b34801561014657600080fd5b5061015a610155366004611826565b610437565b60405190151581526020015b60405180910390f35b34801561017b57600080fd5b5061018f61018a366004611865565b61046e565b604051908152602001610166565b3480156101a957600080fd5b506101bd6101b8366004611895565b6104b3565b005b61018f6101cd3660046118f6565b61054e565b3480156101de57600080fd5b506000546101f2906001600160a01b031681565b6040516001600160a01b039091168152602001610166565b6101bd6102183660046119bd565b610597565b61023061022b366004611a41565b6105d9565b6040516101669190611b28565b34801561024957600080fd5b506101f2610258366004611895565b6004602052600090815260409020546001600160a01b031681565b34801561027f57600080fd5b506005546101f2906001600160a01b031681565b34801561029f57600080fd5b506006546101f2906001600160a01b031681565b3480156102bf57600080fd5b506101bd610624565b3480156102d457600080fd5b506102306102e3366004611bfe565b61069c565b3480156102f457600080fd5b506101f2610303366004611895565b6001600160a01b039081166000908152600460205260409020541690565b34801561032d57600080fd5b5061034161033c366004611c7c565b610716565b60405161016693929190611c95565b34801561035c57600080fd5b506101bd61036b366004611cc1565b6107cf565b61018f61037e366004611d5f565b610a2f565b610230610391366004611db5565b610a7a565b61018f6103a4366004611e27565b610a8c565b3480156103b557600080fd5b506103c96103c4366004611e62565b610aa4565b604051610166929190611eba565b3480156103e357600080fd5b506001546101f2906001600160a01b031681565b34801561040357600080fd5b506101bd610412366004611ee6565b610b94565b34801561042357600080fd5b506002546101f2906001600160a01b031681565b60006001600160e01b03198216634fb1a07b60e01b148061046857506301ffc9a760e01b6001600160e01b03198316145b92915050565b600082826040516020016104959291909182526001600160a01b0316602082015260400190565b60405160208183030381529060405280519060200120905092915050565b6005546001600160a01b031633146104e65760405162461bcd60e51b81526004016104dd90611f42565b60405180910390fd5b6001600160a01b03811661052c5760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b60448201526064016104dd565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6005546000906001600160a01b0316331461057b5760405162461bcd60e51b81526004016104dd90611f42565b61058b8888888888888834610bd0565b98975050505050505050565b6002600754036105b95760405162461bcd60e51b81526004016104dd90611f66565b60026007556105cc868686868686610dca565b5050600160075550505050565b60606002600754036105fd5760405162461bcd60e51b81526004016104dd90611f66565b60026007556106128989898989898989610f32565b60016007559998505050505050505050565b600061064e7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050336001600160a01b038216146106995760405162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b60448201526064016104dd565b50565b60408051602081019091526000815260609063172b3d9b60e11b878787876106c4868961119c565b6040516024016106d8959493929190611f9d565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915291505095945050505050565b6003602052600090815260409020805460018201805460ff8316936101009093046001600160a01b031692919061074c90611fe3565b80601f016020809104026020016040519081016040528092919081815260200182805461077890611fe3565b80156107c55780601f1061079a576101008083540402835291602001916107c5565b820191906000526020600020905b8154815290600101906020018083116107a857829003601f168201915b5050505050905083565b60006107eb888860405180602001604052806000815250610aa4565b509050336001600160a01b0382161461083c5760405162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b60448201526064016104dd565b831561087c5760405162461bcd60e51b815260206004820152600f60248201526e1393d7d110551057d0531313d5d151608a1b60448201526064016104dd565b6108be88888888888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111c892505050565b81156109cb576001600160a01b0386163b61090d5760405162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b60448201526064016104dd565b604051630592e20760e41b81526000906001600160a01b0388169063592e2070906109429085908d9089908990600401612046565b6020604051808303816000875af1158015610961573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109859190612078565b9050806109c95760405162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b60448201526064016104dd565b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051610a1d95949392919061209a565b60405180910390a45050505050505050565b60405162461bcd60e51b815260206004820152601d60248201527f52454749535445525f544f4b454e5f4f4e5f4c325f44495341424c454400000060448201526000906064016104dd565b606061058b88888989898989896105d9565b6000610a9b8585858533610a2f565b95945050505050565b600060606000610ab4868661046e565b600081815260036020526040902080549192509060ff1615610b83578060000160019054906101000a90046001600160a01b031681600101808054610af890611fe3565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2490611fe3565b8015610b715780601f10610b4657610100808354040283529160200191610b71565b820191906000526020600020905b815481529060010190602001808311610b5457829003601f168201915b50505050509050935093505050610b8c565b85859350935050505b935093915050565b610b9f84848461125a565b600580546001600160a01b039092166001600160a01b03199283161790556006805490911690555050600160075550565b6000878614610c135760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4c454e4754485360881b60448201526064016104dd565b60005b88811015610d3f57878782818110610c3057610c306120d6565b9050602002016020810190610c459190611895565b600460008c8c85818110610c5b57610c5b6120d6565b9050602002016020810190610c709190611895565b6001600160a01b039081168252602082019290925260400160002080546001600160a01b03191692909116919091179055878782818110610cb357610cb36120d6565b9050602002016020810190610cc89190611895565b6001600160a01b03168a8a83818110610ce357610ce36120d6565b9050602002016020810190610cf89190611895565b6001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a380610d37816120ec565b915050610c16565b50600063d4f5532f60e01b8a8a8a8a604051602401610d61949392919061215c565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915260025460008054929350610dbc926001600160a01b0392831692169033908790898c8c8961130d565b9a9950505050505050505050565b6002546001600160a01b03166000610de182611321565b9050336001600160a01b03821614610e2d5760405162461bcd60e51b815260206004820152600f60248201526e4e4f545f46524f4d5f42524944474560881b60448201526064016104dd565b6000610e3883611385565b6000549091506001600160a01b03808316911614610e935760405162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b60448201526064016104dd565b600080610ea087876114a3565b915091508051600014610ebe57506040805160208101909152600081525b610ec9828a83610aa4565b509850610ed78b8a8a6114be565b81896001600160a01b03168b6001600160a01b03167f891afe029c75c4f8c5855fc3480598bc5a53739344f6ae575bdb7ea2a79f56b38e8c604051610f1d929190612183565b60405180910390a45050505050505050505050565b6001546060906001600160a01b03163314610f815760405162461bcd60e51b815260206004820152600f60248201526e2727aa2fa32927a6afa927aaaa22a960891b60448201526064016104dd565b6000806060600080610fa1336001546001600160a01b0391821691161490565b15610fba57610fb08888611523565b9095509250610ff7565b33945087878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050505b6110008361153f565b81519195509193509091501561104e5760405162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b60448201526064016104dd565b6001600160a01b038e163b6110975760405162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b60448201526064016104dd565b6001600160a01b038e811660009081526004602052604090205416806110f15760405162461bcd60e51b815260206004820152600f60248201526e1393d7d30c97d513d2d15397d4d155608a1b60448201526064016104dd565b6110fc8f878e611565565b9b5061110b8f878f8f8861069c565b965061111d8e878e8e8e88888e6115d0565b9450505050818a6001600160a01b0316846001600160a01b03167fb8910b9960c443aac3240b98585384e3a6f109fbf6969e264c3f183d69aba7e18f8d604051611168929190612183565b60405180910390a4604080516020810184905201604051602081830303815290604052935050505098975050505050505050565b606082826040516020016111b192919061219c565b604051602081830303815290604052905092915050565b60006111d4858561046e565b6040805160608101825260018082526001600160a01b038781166020808501918252848601898152600088815260039092529590208451815492516001600160a81b0319909316901515610100600160a81b03191617610100929093169190910291909117815592519394509092908201906112509082612210565b5050505050505050565b61126483836115ee565b6001600160a01b0382166112a75760405162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b60448201526064016104dd565b6001600160a01b0381166112e95760405162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b60448201526064016104dd565b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b6000610dbc8a8a8a8b8b8b8b8b8b8b6116b0565b6000816001600160a01b031663e78cea926040518163ffffffff1660e01b8152600401602060405180830381865afa158015611361573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046891906122cf565b60008061139183611321565b6001600160a01b031663ab5d89436040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f291906122cf565b90506000816001600160a01b03166380648b026040518163ffffffff1660e01b8152600401602060405180830381865afa158015611434573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145891906122cf565b90506001600160a01b03811661149c5760405162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b60448201526064016104dd565b9392505050565b600060606114b3838501856122ec565b909590945092505050565b6040516346154c9f60e11b81526001600160a01b03841690638c2a993e906114ec9085908590600401612183565b600060405180830381600087803b15801561150657600080fd5b505af115801561151a573d6000803e3d6000fd5b50505050505050565b6000606061153383850185612332565b915091505b9250929050565b60006060600083806020019051810190611559919061236b565b90959094509092509050565b6040516374f4f54760e01b81526000906001600160a01b038516906374f4f547906115969086908690600401612183565b600060405180830381600087803b1580156115b057600080fd5b505af11580156115c4573d6000803e3d6000fd5b50939695505050505050565b60006115e189898989898988611722565b9998505050505050505050565b6001600160a01b03821661163a5760405162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b60448201526064016104dd565b6000546001600160a01b0316156116825760405162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b60448201526064016104dd565b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b6000806116c58c8c8c8c8c8c8c8c8c8c611777565b9050808b6001600160a01b03168a6001600160a01b03167fc1d1490cf25c3b40d600dfb27c7680340ed1ab901b7e8f3551280968a3b372b08660405161170b9190611b28565b60405180910390a49b9a5050505050505050505050565b600061058b600260009054906101000a90046001600160a01b031660008054906101000a90046001600160a01b03168a8a34600060405180606001604052808b81526020018d81526020018c81525089611806565b60008a6001600160a01b031663679b6ded888c89898e8e8b8b8b6040518a63ffffffff1660e01b81526004016117b49897969594939291906123ed565b60206040518083038185885af11580156117d2573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906117f79190612439565b9b9a5050505050505050505050565b60006115e189898989898989600001518a602001518b604001518b6116b0565b60006020828403121561183857600080fd5b81356001600160e01b03198116811461149c57600080fd5b6001600160a01b038116811461069957600080fd5b6000806040838503121561187857600080fd5b82359150602083013561188a81611850565b809150509250929050565b6000602082840312156118a757600080fd5b813561149c81611850565b60008083601f8401126118c457600080fd5b5081356001600160401b038111156118db57600080fd5b6020830191508360208260051b850101111561153857600080fd5b600080600080600080600060a0888a03121561191157600080fd5b87356001600160401b038082111561192857600080fd5b6119348b838c016118b2565b909950975060208a013591508082111561194d57600080fd5b5061195a8a828b016118b2565b989b979a50986040810135976060820135975060809091013595509350505050565b60008083601f84011261198e57600080fd5b5081356001600160401b038111156119a557600080fd5b60208301915083602082850101111561153857600080fd5b60008060008060008060a087890312156119d657600080fd5b86356119e181611850565b955060208701356119f181611850565b94506040870135611a0181611850565b93506060870135925060808701356001600160401b03811115611a2357600080fd5b611a2f89828a0161197c565b979a9699509497509295939492505050565b60008060008060008060008060e0898b031215611a5d57600080fd5b8835611a6881611850565b97506020890135611a7881611850565b96506040890135611a8881611850565b9550606089013594506080890135935060a0890135925060c08901356001600160401b03811115611ab857600080fd5b611ac48b828c0161197c565b999c989b5096995094979396929594505050565b60005b83811015611af3578181015183820152602001611adb565b50506000910152565b60008151808452611b14816020860160208601611ad8565b601f01601f19169290920160200192915050565b60208152600061149c6020830184611afc565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611b7957611b79611b3b565b604052919050565b60006001600160401b03821115611b9a57611b9a611b3b565b50601f01601f191660200190565b600082601f830112611bb957600080fd5b8135611bcc611bc782611b81565b611b51565b818152846020838601011115611be157600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215611c1657600080fd5b8535611c2181611850565b94506020860135611c3181611850565b93506040860135611c4181611850565b92506060860135915060808601356001600160401b03811115611c6357600080fd5b611c6f88828901611ba8565b9150509295509295909350565b600060208284031215611c8e57600080fd5b5035919050565b83151581526001600160a01b0383166020820152606060408201819052600090610a9b90830184611afc565b600080600080600080600060a0888a031215611cdc57600080fd5b873596506020880135611cee81611850565b95506040880135611cfe81611850565b945060608801356001600160401b0380821115611d1a57600080fd5b611d268b838c0161197c565b909650945060808a0135915080821115611d3f57600080fd5b50611d4c8a828b0161197c565b989b979a50959850939692959293505050565b600080600080600060a08688031215611d7757600080fd5b8535611d8281611850565b94506020860135935060408601359250606086013591506080860135611da781611850565b809150509295509295909350565b600080600080600080600060c0888a031215611dd057600080fd5b8735611ddb81611850565b96506020880135611deb81611850565b955060408801359450606088013593506080880135925060a08801356001600160401b03811115611e1b57600080fd5b611d4c8a828b0161197c565b60008060008060808587031215611e3d57600080fd5b8435611e4881611850565b966020860135965060408601359560600135945092505050565b600080600060608486031215611e7757600080fd5b833592506020840135611e8981611850565b915060408401356001600160401b03811115611ea457600080fd5b611eb086828701611ba8565b9150509250925092565b6001600160a01b0383168152604060208201819052600090611ede90830184611afc565b949350505050565b60008060008060808587031215611efc57600080fd5b8435611f0781611850565b93506020850135611f1781611850565b92506040850135611f2781611850565b91506060850135611f3781611850565b939692955090935050565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b6001600160a01b0386811682528581166020830152841660408201526060810183905260a060808201819052600090611fd890830184611afc565b979650505050505050565b600181811c90821680611ff757607f821691505b60208210810361201757634e487b7160e01b600052602260045260246000fd5b50919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038516815283602082015260606040820152600061206e60608301848661201d565b9695505050505050565b60006020828403121561208a57600080fd5b8151801515811461149c57600080fd5b6060815260006120ae60608301878961201d565b82810360208401526120c181868861201d565b91505082151560408301529695505050505050565b634e487b7160e01b600052603260045260246000fd5b60006001820161210c57634e487b7160e01b600052601160045260246000fd5b5060010190565b8183526000602080850194508260005b8581101561215157813561213681611850565b6001600160a01b031687529582019590820190600101612123565b509495945050505050565b604081526000612170604083018688612113565b8281036020840152611fd8818587612113565b6001600160a01b03929092168252602082015260400190565b6040815260006121af6040830185611afc565b8281036020840152610a9b8185611afc565b601f82111561220b57600081815260208120601f850160051c810160208610156121e85750805b601f850160051c820191505b81811015612207578281556001016121f4565b5050505b505050565b81516001600160401b0381111561222957612229611b3b565b61223d816122378454611fe3565b846121c1565b602080601f831160018114612272576000841561225a5750858301515b600019600386901b1c1916600185901b178555612207565b600085815260208120601f198616915b828110156122a157888601518255948401946001909101908401612282565b50858210156122bf5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156122e157600080fd5b815161149c81611850565b600080604083850312156122ff57600080fd5b8235915060208301356001600160401b0381111561231c57600080fd5b61232885828601611ba8565b9150509250929050565b6000806040838503121561234557600080fd5b823561235081611850565b915060208301356001600160401b0381111561231c57600080fd5b6000806040838503121561237e57600080fd5b8251915060208301516001600160401b0381111561239b57600080fd5b8301601f810185136123ac57600080fd5b80516123ba611bc782611b81565b8181528660208385010111156123cf57600080fd5b6123e0826020830160208601611ad8565b8093505050509250929050565b600061010060018060a01b03808c1684528a602085015289604085015280891660608501528088166080850152508560a08401528460c08401528060e08401526117f781840185611afc565b60006020828403121561244b57600080fd5b505191905056fea264697066735822122007f47980b6271e9207c0ff63c8b370b40657c3391ed0d9719d73bddb1c0709c964736f6c63430008110033'

export class L1ForceOnlyReverseCustomGateway__factory extends ContractFactory {
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
  ): Promise<L1ForceOnlyReverseCustomGateway> {
    return super.deploy(
      overrides || {}
    ) as Promise<L1ForceOnlyReverseCustomGateway>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1ForceOnlyReverseCustomGateway {
    return super.attach(address) as L1ForceOnlyReverseCustomGateway
  }
  connect(signer: Signer): L1ForceOnlyReverseCustomGateway__factory {
    return super.connect(signer) as L1ForceOnlyReverseCustomGateway__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L1ForceOnlyReverseCustomGatewayInterface {
    return new utils.Interface(_abi) as L1ForceOnlyReverseCustomGatewayInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1ForceOnlyReverseCustomGateway {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as L1ForceOnlyReverseCustomGateway
  }
}
