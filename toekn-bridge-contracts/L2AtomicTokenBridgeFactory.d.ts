/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type { TypedEventFilter, TypedEvent, TypedListener } from './common'

interface L2AtomicTokenBridgeFactoryInterface extends ethers.utils.Interface {
  functions: {
    'deployL2Contracts((bytes,bytes,bytes,bytes,bytes,bytes),address,address,address,address,address,address,address,address)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'deployL2Contracts',
    values: [
      {
        router: BytesLike
        standardGateway: BytesLike
        customGateway: BytesLike
        wethGateway: BytesLike
        aeWeth: BytesLike
        upgradeExecutor: BytesLike
      },
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  ): string

  decodeFunctionResult(
    functionFragment: 'deployL2Contracts',
    data: BytesLike
  ): Result

  events: {}
}

export class L2AtomicTokenBridgeFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: L2AtomicTokenBridgeFactoryInterface

  functions: {
    deployL2Contracts(
      l2Code: {
        router: BytesLike
        standardGateway: BytesLike
        customGateway: BytesLike
        wethGateway: BytesLike
        aeWeth: BytesLike
        upgradeExecutor: BytesLike
      },
      l1Router: string,
      l1StandardGateway: string,
      l1CustomGateway: string,
      l1WethGateway: string,
      l1Weth: string,
      l2StandardGatewayCanonicalAddress: string,
      rollupOwner: string,
      aliasedL1UpgradeExecutor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  deployL2Contracts(
    l2Code: {
      router: BytesLike
      standardGateway: BytesLike
      customGateway: BytesLike
      wethGateway: BytesLike
      aeWeth: BytesLike
      upgradeExecutor: BytesLike
    },
    l1Router: string,
    l1StandardGateway: string,
    l1CustomGateway: string,
    l1WethGateway: string,
    l1Weth: string,
    l2StandardGatewayCanonicalAddress: string,
    rollupOwner: string,
    aliasedL1UpgradeExecutor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    deployL2Contracts(
      l2Code: {
        router: BytesLike
        standardGateway: BytesLike
        customGateway: BytesLike
        wethGateway: BytesLike
        aeWeth: BytesLike
        upgradeExecutor: BytesLike
      },
      l1Router: string,
      l1StandardGateway: string,
      l1CustomGateway: string,
      l1WethGateway: string,
      l1Weth: string,
      l2StandardGatewayCanonicalAddress: string,
      rollupOwner: string,
      aliasedL1UpgradeExecutor: string,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    deployL2Contracts(
      l2Code: {
        router: BytesLike
        standardGateway: BytesLike
        customGateway: BytesLike
        wethGateway: BytesLike
        aeWeth: BytesLike
        upgradeExecutor: BytesLike
      },
      l1Router: string,
      l1StandardGateway: string,
      l1CustomGateway: string,
      l1WethGateway: string,
      l1Weth: string,
      l2StandardGatewayCanonicalAddress: string,
      rollupOwner: string,
      aliasedL1UpgradeExecutor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    deployL2Contracts(
      l2Code: {
        router: BytesLike
        standardGateway: BytesLike
        customGateway: BytesLike
        wethGateway: BytesLike
        aeWeth: BytesLike
        upgradeExecutor: BytesLike
      },
      l1Router: string,
      l1StandardGateway: string,
      l1CustomGateway: string,
      l1WethGateway: string,
      l1Weth: string,
      l2StandardGatewayCanonicalAddress: string,
      rollupOwner: string,
      aliasedL1UpgradeExecutor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
