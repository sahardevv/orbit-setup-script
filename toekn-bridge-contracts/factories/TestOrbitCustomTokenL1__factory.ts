/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  TestOrbitCustomTokenL1,
  TestOrbitCustomTokenL1Interface,
} from '../TestOrbitCustomTokenL1'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gateway',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
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
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'Transfer',
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
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
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
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
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
        name: 'account',
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
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
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
    inputs: [],
    name: 'gateway',
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
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
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
    inputs: [],
    name: 'isArbitrumEnabled',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
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
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
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
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l2CustomTokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'maxSubmissionCostForCustomGateway',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxSubmissionCostForRouter',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxGasForCustomGateway',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxGasForRouter',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'valueForGateway',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'valueForRouter',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'creditBackAddress',
        type: 'address',
      },
    ],
    name: 'registerTokenOnL2',
    outputs: [],
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
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
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
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
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
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
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
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
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
  '0x60806040523480156200001157600080fd5b50604051620026a5380380620026a583398101604081905262000034916200051d565b60005482908290610100900460ff1615808015620000595750600054600160ff909116105b806200008957506200007630620001cf60201b62000d041760201c565b15801562000089575060005460ff166001145b620000e15760405162461bcd60e51b815260206004820152602e60248201526000805160206200264583398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801562000105576000805461ff0019166101001790555b80156200013b576000805461ff001916905560405160018152600080516020620026858339815191529060200160405180910390a15b5060cc80546001600160a01b038085166001600160a01b03199283161790925560cd805492841692909116919091179055604080518082018252600f81526e2a32b9ba21bab9ba37b6aa37b5b2b760891b6020808301919091528251808401909352600483526321a0a92160e11b83820152620001c5929060129062000d13620001de821b17901c565b50505050620006c6565b6001600160a01b03163b151590565b600054610100900460ff1615808015620001ff5750600054600160ff909116105b806200022f57506200021c30620001cf60201b62000d041760201c565b1580156200022f575060005460ff166001145b620002835760405162461bcd60e51b815260206004820152602e60248201526000805160206200264583398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401620000d8565b6000805460ff191660011790558015620002a7576000805461ff0019166101001790555b620002b28462000309565b620002be848462000393565b6038805460ff191660ff8416179055801562000303576000805461ff001916905560405160018152600080516020620026858339815191529060200160405180910390a15b50505050565b600054610100900460ff16620003655760405162461bcd60e51b815260206004820152602b60248201526000805160206200266583398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000d8565b6200039081604051806040016040528060018152602001603160f81b815250620003ff60201b60201c565b50565b600054610100900460ff16620003ef5760405162461bcd60e51b815260206004820152602b60248201526000805160206200266583398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000d8565b620003fb828262000475565b5050565b600054610100900460ff166200045b5760405162461bcd60e51b815260206004820152602b60248201526000805160206200266583398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000d8565b815160209283012081519190920120606591909155606655565b600054610100900460ff16620004d15760405162461bcd60e51b815260206004820152602b60248201526000805160206200266583398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000d8565b6036620004df8382620005fa565b506037620004ee8282620005fa565b50506038805460ff1916601217905550565b80516001600160a01b03811681146200051857600080fd5b919050565b600080604083850312156200053157600080fd5b6200053c8362000500565b91506200054c6020840162000500565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200058057607f821691505b602082108103620005a157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620005f557600081815260208120601f850160051c81016020861015620005d05750805b601f850160051c820191505b81811015620005f157828155600101620005dc565b5050505b505050565b81516001600160401b0381111562000616576200061662000555565b6200062e816200062784546200056b565b84620005a7565b602080601f8311600181146200066657600084156200064d5750858301515b600019600386901b1c1916600185901b178555620005f1565b600085815260208120601f198616915b82811015620006975788860151825594840194600190910190840162000676565b5085821015620006b65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611f6f80620006d66000396000f3fe60806040526004361061011f5760003560e01c806370a08231116100a0578063a9059cbb11610064578063a9059cbb14610312578063d505accf14610332578063dd62ed3e14610352578063f887ea4014610372578063fc792d8e1461039257600080fd5b806370a08231146102885780637ecebe00146102a85780638e5f5ad1146102c857806395d89b41146102dd578063a457c2d7146102f257600080fd5b806323b872dd116100e757806323b872dd146101ed578063313ce5671461020d5780633644e5151461023357806339509351146102485780634000aea01461026857600080fd5b806306fdde0314610124578063095ea7b31461014f578063116191b61461017f5780631249c58b146101b757806318160ddd146101ce575b600080fd5b34801561013057600080fd5b506101396103a5565b604051610146919061199b565b60405180910390f35b34801561015b57600080fd5b5061016f61016a3660046119ca565b610437565b6040519015158152602001610146565b34801561018b57600080fd5b5060cc5461019f906001600160a01b031681565b6040516001600160a01b039091168152602001610146565b3480156101c357600080fd5b506101cc610451565b005b3480156101da57600080fd5b506035545b604051908152602001610146565b3480156101f957600080fd5b5061016f6102083660046119f6565b610461565b34801561021957600080fd5b5060385460ff165b60405160ff9091168152602001610146565b34801561023f57600080fd5b506101df610476565b34801561025457600080fd5b5061016f6102633660046119ca565b610485565b34801561027457600080fd5b5061016f610283366004611a4d565b6104a7565b34801561029457600080fd5b506101df6102a3366004611b1a565b61051d565b3480156102b457600080fd5b506101df6102c3366004611b1a565b61053b565b3480156102d457600080fd5b50610221610559565b3480156102e957600080fd5b506101396105b4565b3480156102fe57600080fd5b5061016f61030d3660046119ca565b6105c3565b34801561031e57600080fd5b5061016f61032d3660046119ca565b610649565b34801561033e57600080fd5b506101cc61034d366004611b37565b610657565b34801561035e57600080fd5b506101df61036d366004611bae565b6107bb565b34801561037e57600080fd5b5060cd5461019f906001600160a01b031681565b6101cc6103a0366004611be7565b6107e6565b6060603680546103b490611c64565b80601f01602080910402602001604051908101604052809291908181526020018280546103e090611c64565b801561042d5780601f106104025761010080835404028352916020019161042d565b820191906000526020600020905b81548152906001019060200180831161041057829003601f168201915b5050505050905090565b600033610445818585610e48565b60019150505b92915050565b61045f336302faf080610f6c565b565b600061046e84848461102e565b949350505050565b6000610480611047565b905090565b60003361044581858561049883836107bb565b6104a29190611c98565b610e48565b60006104b38484610649565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040516104f9929190611cb9565b60405180910390a3833b15610513576105138484846110c2565b5060019392505050565b6001600160a01b03811660009081526033602052604081205461044b565b6001600160a01b03811660009081526099602052604081205461044b565b60cd54600090600160a01b900460ff166105ae5760405162461bcd60e51b81526020600482015260116024820152701393d517d156141150d5115117d0d05313607a1b60448201526064015b60405180910390fd5b5060b190565b6060603780546103b490611c64565b600033816105d182866107bb565b9050838110156106315760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016105a5565b61063e8286868403610e48565b506001949350505050565b60003361044581858561112c565b834211156106a75760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016105a5565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886106d68c6112d7565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610731826112ff565b905060006107418287878761134d565b9050896001600160a01b0316816001600160a01b0316146107a45760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016105a5565b6107af8a8a8a610e48565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b60cd8054600160a01b60ff60a01b19821681179092556040805163fb0e722b60e01b8152905192820460ff16926000926001600160a01b03169163fb0e722b916004808301926020929190829003018187875af115801561084b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086f9190611cd2565b90506000816001600160a01b031663e78cea926040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d59190611cd2565b90506000816001600160a01b031663e1758bd86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610917573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093b9190611cd2565b905061095e333061094c898b611c98565b6001600160a01b038516929190611375565b60cd5460405163095ea7b360e01b81526001600160a01b038381169263095ea7b39261099292909116908a90600401611cef565b6020604051808303816000875af11580156109b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d59190611d08565b5060cc5460405163095ea7b360e01b81526001600160a01b038381169263095ea7b392610a0a92909116908b90600401611cef565b6020604051808303816000875af1158015610a29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4d9190611d08565b505060cc60009054906101000a90046001600160a01b03166001600160a01b03166337daacad8d8b8a8f898c6040518763ffffffff1660e01b8152600401610a9a96959493929190611d2a565b6020604051808303816000875af1158015610ab9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610add9190611d65565b5060cd60009054906101000a90046001600160a01b03166001600160a01b031663d7f7459c60cc60009054906101000a90046001600160a01b03168a8a8e898b6040518763ffffffff1660e01b8152600401610b3e96959493929190611d2a565b6020604051808303816000875af1158015610b5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b819190611d65565b506000816001600160a01b031663e1758bd86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be69190611cd2565b60cd5460405163095ea7b360e01b81529192506001600160a01b038084169263095ea7b392610c1c921690600090600401611cef565b6020604051808303816000875af1158015610c3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5f9190611d08565b5060cc5460405163095ea7b360e01b81526001600160a01b038381169263095ea7b392610c959290911690600090600401611cef565b6020604051808303816000875af1158015610cb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd89190611d08565b505060cd8054931515600160a01b0260ff60a01b19909416939093179092555050505050505050505050565b6001600160a01b03163b151590565b600054610100900460ff1615808015610d335750600054600160ff909116105b80610d545750610d4230610d04565b158015610d54575060005460ff166001145b610db75760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105a5565b6000805460ff191660011790558015610dda576000805461ff0019166101001790555b610de3846113cf565b610ded848461141c565b6038805460ff191660ff84161790558015610e42576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b6001600160a01b038316610eaa5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016105a5565b6001600160a01b038216610f0b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016105a5565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038216610fc25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105a5565b8060356000828254610fd49190611c98565b90915550506001600160a01b0382166000818152603360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35b5050565b60003361103c858285611452565b61063e85858561112c565b60006104807f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61107660655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b604051635260769b60e11b815283906001600160a01b0382169063a4c0ed36906110f490339087908790600401611d7e565b600060405180830381600087803b15801561110e57600080fd5b505af1158015611122573d6000803e3d6000fd5b5050505050505050565b6001600160a01b0383166111905760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016105a5565b6001600160a01b0382166111f25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016105a5565b6001600160a01b0383166000908152603360205260409020548181101561126a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016105a5565b6001600160a01b0380851660008181526033602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906112ca9086815260200190565b60405180910390a3610e42565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b600061044b61130c611047565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061135e878787876114c6565b9150915061136b81611580565b5095945050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610e429085906116c5565b600054610100900460ff166113f65760405162461bcd60e51b81526004016105a590611dae565b61141981604051806040016040528060018152602001603160f81b815250611797565b50565b600054610100900460ff166114435760405162461bcd60e51b81526004016105a590611dae565b61102a82826117d8565b505050565b600061145e84846107bb565b90506000198114610e4257818110156114b95760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016105a5565b610e428484848403610e48565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b038311156114f35750600090506003611577565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611547573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661157057600060019250925050611577565b9150600090505b94509492505050565b600081600481111561159457611594611df9565b0361159c5750565b60018160048111156115b0576115b0611df9565b036115f85760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b60448201526064016105a5565b600281600481111561160c5761160c611df9565b036116595760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105a5565b600381600481111561166d5761166d611df9565b036114195760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016105a5565b600061171a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661182a9092919063ffffffff16565b80519091501561144d57808060200190518101906117389190611d08565b61144d5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016105a5565b600054610100900460ff166117be5760405162461bcd60e51b81526004016105a590611dae565b815160209283012081519190920120606591909155606655565b600054610100900460ff166117ff5760405162461bcd60e51b81526004016105a590611dae565b603661180b8382611e5d565b5060376118188282611e5d565b50506038805460ff1916601217905550565b606061046e848460008585600080866001600160a01b031685876040516118519190611f1d565b60006040518083038185875af1925050503d806000811461188e576040519150601f19603f3d011682016040523d82523d6000602084013e611893565b606091505b50915091506118a4878383876118af565b979650505050505050565b6060831561191c578251600003611915576118c985610d04565b6119155760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105a5565b508161046e565b61046e83838151156119315781518083602001fd5b8060405162461bcd60e51b81526004016105a5919061199b565b60005b8381101561196657818101518382015260200161194e565b50506000910152565b6000815180845261198781602086016020860161194b565b601f01601f19169290920160200192915050565b6020815260006119ae602083018461196f565b9392505050565b6001600160a01b038116811461141957600080fd5b600080604083850312156119dd57600080fd5b82356119e8816119b5565b946020939093013593505050565b600080600060608486031215611a0b57600080fd5b8335611a16816119b5565b92506020840135611a26816119b5565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b600080600060608486031215611a6257600080fd5b8335611a6d816119b5565b925060208401359150604084013567ffffffffffffffff80821115611a9157600080fd5b818601915086601f830112611aa557600080fd5b813581811115611ab757611ab7611a37565b604051601f8201601f19908116603f01168101908382118183101715611adf57611adf611a37565b81604052828152896020848701011115611af857600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b600060208284031215611b2c57600080fd5b81356119ae816119b5565b600080600080600080600060e0888a031215611b5257600080fd5b8735611b5d816119b5565b96506020880135611b6d816119b5565b95506040880135945060608801359350608088013560ff81168114611b9157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611bc157600080fd5b8235611bcc816119b5565b91506020830135611bdc816119b5565b809150509250929050565b60008060008060008060008060006101208a8c031215611c0657600080fd5b8935611c11816119b5565b985060208a0135975060408a0135965060608a0135955060808a0135945060a08a0135935060c08a0135925060e08a013591506101008a0135611c53816119b5565b809150509295985092959850929598565b600181811c90821680611c7857607f821691505b6020821081036112f957634e487b7160e01b600052602260045260246000fd5b8082018082111561044b57634e487b7160e01b600052601160045260246000fd5b82815260406020820152600061046e604083018461196f565b600060208284031215611ce457600080fd5b81516119ae816119b5565b6001600160a01b03929092168252602082015260400190565b600060208284031215611d1a57600080fd5b815180151581146119ae57600080fd5b6001600160a01b039687168152602081019590955260408501939093526060840191909152909216608082015260a081019190915260c00190565b600060208284031215611d7757600080fd5b5051919050565b60018060a01b0384168152826020820152606060408201526000611da5606083018461196f565b95945050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052602160045260246000fd5b601f82111561144d57600081815260208120601f850160051c81016020861015611e365750805b601f850160051c820191505b81811015611e5557828155600101611e42565b505050505050565b815167ffffffffffffffff811115611e7757611e77611a37565b611e8b81611e858454611c64565b84611e0f565b602080601f831160018114611ec05760008415611ea85750858301515b600019600386901b1c1916600185901b178555611e55565b600085815260208120601f198616915b82811015611eef57888601518255948401946001909101908401611ed0565b5085821015611f0d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008251611f2f81846020870161194b565b919091019291505056fea264697066735822122063160b7d0b34fb8245ca97556efec79b7eeaeee9b95506c01c0d374bac3c8b4264736f6c63430008110033496e697469616c697a61626c653a20636f6e747261637420697320616c726561496e697469616c697a61626c653a20636f6e7472616374206973206e6f7420697f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498'

export class TestOrbitCustomTokenL1__factory extends ContractFactory {
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
    _gateway: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestOrbitCustomTokenL1> {
    return super.deploy(
      _gateway,
      _router,
      overrides || {}
    ) as Promise<TestOrbitCustomTokenL1>
  }
  getDeployTransaction(
    _gateway: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_gateway, _router, overrides || {})
  }
  attach(address: string): TestOrbitCustomTokenL1 {
    return super.attach(address) as TestOrbitCustomTokenL1
  }
  connect(signer: Signer): TestOrbitCustomTokenL1__factory {
    return super.connect(signer) as TestOrbitCustomTokenL1__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): TestOrbitCustomTokenL1Interface {
    return new utils.Interface(_abi) as TestOrbitCustomTokenL1Interface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestOrbitCustomTokenL1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestOrbitCustomTokenL1
  }
}
