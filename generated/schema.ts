// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type User must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): User | null {
    return changetype<User | null>(
      store.get_in_block("User", id.toHexString())
    );
  }

  static load(id: Bytes): User | null {
    return changetype<User | null>(store.get("User", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get lastInteractedAtTimestamp(): BigInt {
    let value = this.get("lastInteractedAtTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set lastInteractedAtTimestamp(value: BigInt) {
    this.set("lastInteractedAtTimestamp", Value.fromBigInt(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get suppliedValueInUsd(): BigInt {
    let value = this.get("suppliedValueInUsd");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set suppliedValueInUsd(value: BigInt) {
    this.set("suppliedValueInUsd", Value.fromBigInt(value));
  }

  get rewardEarnedValueInUsd(): BigInt {
    let value = this.get("rewardEarnedValueInUsd");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set rewardEarnedValueInUsd(value: BigInt) {
    this.set("rewardEarnedValueInUsd", Value.fromBigInt(value));
  }

  get lastRewardedBlock(): BigInt {
    let value = this.get("lastRewardedBlock");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set lastRewardedBlock(value: BigInt) {
    this.set("lastRewardedBlock", Value.fromBigInt(value));
  }
}

export class TokenPool extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenPool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type TokenPool must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenPool", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): TokenPool | null {
    return changetype<TokenPool | null>(
      store.get_in_block("TokenPool", id.toHexString())
    );
  }

  static load(id: Bytes): TokenPool | null {
    return changetype<TokenPool | null>(
      store.get("TokenPool", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get poolBalance(): BigInt {
    let value = this.get("poolBalance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set poolBalance(value: BigInt) {
    this.set("poolBalance", Value.fromBigInt(value));
  }
}

export class UserSuppliedToken extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserSuppliedToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type UserSuppliedToken must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserSuppliedToken", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): UserSuppliedToken | null {
    return changetype<UserSuppliedToken | null>(
      store.get_in_block("UserSuppliedToken", id.toHexString())
    );
  }

  static load(id: Bytes): UserSuppliedToken | null {
    return changetype<UserSuppliedToken | null>(
      store.get("UserSuppliedToken", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get hash(): Bytes {
    let value = this.get("hash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set hash(value: Bytes) {
    this.set("hash", Value.fromBytes(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}