class Item {
  label
  link
  toggleName

  constructor(config){
    this.label = config.label
    this.link = config.link
    this.toggleName = config.toggleName
  }
}

export default class Nav {
  items = []

  add(config) {
    this.items.push(new Item(config))
  }
}
