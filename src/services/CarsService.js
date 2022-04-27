import { AppState } from "../AppState"
import { Car } from "../models/Car"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class CarsService {
  async getCars() {
    const res = await api.get('api/cars')
    AppState.cars = res.data.map(c => new Car(c))
  }

  async getCarById(carId) {
    const res = await api.get('api/cars/' + carId)
    AppState.car = new Car(res.data)
  }

  async deleteCar(carId) {
    await api.delete('api/cars/' + carId)
  }

  async createCar(newCar) {
    const res = await api.post('api/cars', newCar)
    AppState.cars.push(new Car(res.data))
    return res.data
  }

  async editCar(editedCar) {
    const res = await api.put('api/cars/' + editedCar.id, editedCar)
    AppState.car = new Car(res.data)
  }
}

export const carsService = new CarsService()
