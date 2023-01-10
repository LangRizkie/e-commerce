declare global {
  interface String {
    getIcon(): string
  }
}

String.prototype.getIcon = function () {
  return `${this.slice(0, 2)}/${this}`
}

export {}
