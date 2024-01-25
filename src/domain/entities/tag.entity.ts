export default class Tag {
  private _value: string;

  constructor(value: string) {
    this.validate(value);
    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  private validate(value: string): void {
    if (value.length === 0) {
      throw new Error("Tag cannot be empty.");
    }

    const pascalCaseRegex = /^[A-Z][a-z]*([A-Z][a-z]*)*$/;
    if (!pascalCaseRegex.test(this._value)) {
      throw new Error("Tag must be in PascalCase.");
    }
  }
}
