import {randomUUID} from "node:crypto";

export default class UniqueEntityID {
  private readonly _value: string;

  constructor(id?: string) {
    this._value = id || randomUUID();
  }

  get value(): string {
    return this._value;
  }
}