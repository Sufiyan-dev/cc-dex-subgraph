import { BigInt, bigInt } from "@graphprotocol/graph-ts";
import {
  Rewarded as RewardedEvent,
  TokenAdded as TokenAddedEvent,
  TokenSwap as TokenSwapEvent,
  addedLiquidity as addedLiquidityEvent,
  tokenBuyBacked as tokenBuyBackedEvent
} from "../generated/OpenSwap/OpenSwap"
import {
  User,
  TokenPool,
  UserSuppliedToken
} from "../generated/schema"

export function handleRewarded(event: RewardedEvent): void {
  let user = User.load(event.params.user);

  if(!user){
    user = new User(event.params.user);
    user.address = event.params.user;
    user.createdAtTimestamp = event.block.timestamp;
  }
  user.rewardEarnedValueInUsd = user.rewardEarnedValueInUsd.plus(event.params.amount);
  user.lastInteractedAtTimestamp = event.block.timestamp;
  user.lastRewardedBlock = event.block.number;

  user.save()
}

export function handleTokenAdded(event: TokenAddedEvent): void {
  let tokenPool = new TokenPool(event.params.token);
  tokenPool.createdAtTimestamp = event.block.timestamp;
  tokenPool.poolBalance = BigInt.fromI32(0);
  tokenPool.token = event.params.token;

  tokenPool.save()
}

export function handleTokenSwap(event: TokenSwapEvent): void {
  let user = User.load(event.params.user);

  if(!user){
    user = new User(event.params.user);
    user.createdAtTimestamp= event.block.timestamp;
    user.address = event.params.user;
    user.suppliedValueInUsd = BigInt.fromI32(0);
    user.rewardEarnedValueInUsd = BigInt.fromI32(0);
    user.lastRewardedBlock = BigInt.fromI32(0);
  }
  user.lastInteractedAtTimestamp = event.block.timestamp;
  user.save()

  let tokenIn = TokenPool.load(event.params.tokenIn);
  
  if(!tokenIn){
    tokenIn = new TokenPool(event.params.tokenIn);
    tokenIn.createdAtTimestamp = event.block.timestamp;
    tokenIn.token = event.params.tokenIn;
  }
  tokenIn.poolBalance = tokenIn.poolBalance.plus(event.params.amountIn);
  tokenIn.save();
  
  let tokenOut = TokenPool.load(event.params.tokenOut);
  if(!tokenOut){
    tokenOut = new TokenPool(event.params.tokenOut);
    tokenOut.createdAtTimestamp = event.block.timestamp;
    tokenOut.token = event.params.tokenOut;
  }
  tokenOut.poolBalance = tokenOut.poolBalance.minus(event.params.amountOut);
  tokenOut.save();
}

export function handleaddedLiquidity(event: addedLiquidityEvent): void {
  let token = TokenPool.load(event.params.token);

  if(!token){
    token = new TokenPool(event.params.token);
    token.createdAtTimestamp = event.block.timestamp;
    token.token = event.params.token;
  }
  token.poolBalance = token.poolBalance.plus(event.params.amount);
  token.save();

  let user = User.load(event.params.user);
  if(!user){
    user = new User(event.params.user);
    user.createdAtTimestamp = event.block.timestamp;
    user.address = event.params.user;
    user.suppliedValueInUsd = BigInt.fromI32(0);
    user.rewardEarnedValueInUsd = BigInt.fromI32(0);
    user.lastRewardedBlock = BigInt.fromI32(0);
  }
  user.lastInteractedAtTimestamp = event.block.timestamp;
  user.save();

  let userNewTokenAdded = new UserSuppliedToken(event.transaction.hash.concatI32(event.logIndex.toI32()));
  userNewTokenAdded.user = event.params.user;
  userNewTokenAdded.token = event.params.token;
  userNewTokenAdded.amount = event.params.amount;
  userNewTokenAdded.timestamp = event.block.timestamp;
  userNewTokenAdded.hash = event.transaction.hash;
  userNewTokenAdded.save();
}

export function handletokenBuyBacked(event: tokenBuyBackedEvent): void {
  let tokenPool = TokenPool.load(event.params.token);

  if(!tokenPool){
    tokenPool = new TokenPool(event.params.token);
    tokenPool.token = event.params.token;
    tokenPool.createdAtTimestamp = event.block.timestamp;
  }
  tokenPool.poolBalance = tokenPool.poolBalance.minus(event.params.amount);
  tokenPool.save();

  let user = User.load(event.params.user);
  if(!user){
    user = new User(event.params.user);
    user.createdAtTimestamp= event.block.timestamp;
    user.address = event.params.user;
    user.rewardEarnedValueInUsd = BigInt.fromI32(0);
    user.lastRewardedBlock = BigInt.fromI32(0);
  }
  user.suppliedValueInUsd = BigInt.fromI32(0);
  user.lastInteractedAtTimestamp = event.block.timestamp;
  user.save();
}
