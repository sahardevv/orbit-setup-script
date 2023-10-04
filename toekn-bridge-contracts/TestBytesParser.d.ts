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
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type { TypedEventFilter, TypedEvent, TypedListener } from './common'

interface TestBytesParserInterface extends ethers.utils.Interface {
  functions: {
    'bytesToString(bytes)': FunctionFragment
    'bytesToUint8(bytes)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'bytesToString',
    values: [BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'bytesToUint8',
    values: [BytesLike]
  ): string

  decodeFunctionResult(
    functionFragment: 'bytesToString',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'bytesToUint8',
    data: BytesLike
  ): Result

  events: {}
}

export class TestBytesParser extends BaseContract {
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

  interface: TestBytesParserInterface

  functions: {
    bytesToString(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { success: boolean; res: string }>

    bytesToUint8(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, number]>
  }

  bytesToString(
    input: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { success: boolean; res: string }>

  bytesToUint8(
    input: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, number]>

  callStatic: {
    bytesToString(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { success: boolean; res: string }>

    bytesToUint8(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, number]>
  }

  filters: {}

  estimateGas: {
    bytesToString(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    bytesToUint8(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    bytesToString(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    bytesToUint8(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
