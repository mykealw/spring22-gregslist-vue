export class Car {
  constructor(data = {}) {
    this.id = data.id
    this.year = data.year
    this.make = data.make
    this.model = data.model
    this.description = data.description
    this.price = data.price
    this.color = data.color
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.creator = data.creator
  }
}
