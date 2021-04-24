export default class Log {
  constructor({ key = `data`, onRender = () => {} }) {
    this.key = key
    this.onRender = onRender
    this.load()
    this.entries = this.entries || []
    this.render()
  }

  load() {
    const foundSave = window.localStorage.getItem(`${this.key}-log`)
    if (foundSave) this.entries = JSON.parse(foundSave)
  }

  save() {
    window.localStorage.setItem(`${this.key}-log`, JSON.stringify(this.entries))
  }

  render() {
    this.onRender()
    this.save()
  }

  add(entry) {
    this.entries = [entry, ...this.entries]
    this.render()
  }

  clear() {
    this.entries = []
    this.render()
  }
}
