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
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type { TypedEventFilter, TypedEvent, TypedListener } from './common'

interface IEthInboxInterface extends ethers.utils.Interface {
  functions: {
    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'createRetryableTicket',
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string

  decodeFunctionResult(
    functionFragment: 'createRetryableTicket',
    data: BytesLike
  ): Result

  events: {}
}

export class IEthInbox extends BaseContract {
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

  interface: IEthInboxInterface

  functions: {
    createRetryableTicket(
      to: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  createRetryableTicket(
    to: string,
    l2CallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    excessFeeRefundAddress: string,
    callValueRefundAddress: string,
    gasLimit: BigNumberish,
    maxFeePerGas: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    createRetryableTicket(
      to: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    createRetryableTicket(
      to: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    createRetryableTicket(
      to: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
