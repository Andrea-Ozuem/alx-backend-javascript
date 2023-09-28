export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(nm) {
    this._name = nm;
  }

  set code(cd) {
    this._name = cd;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
