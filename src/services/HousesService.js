import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class HousesService {
async obtainHouses(){
    const res = await api.get('api/houses')
    logger.log(res.data, "this is the res")
    AppState.houses = res.data.map(h => new House(h))
}

async obtainHousebyId(houseId){
    const res = await api.get('api/houses/' + houseId)
    AppState.house = new House(res.data)
}

async deleteHouse(houseId){
    await api.delete('api/houses' + houseId)
}

async createHouse(newHouse) {
    const res = await api.post('api/houses', newHouse)
    AppState.houses.push(new House(res.data))
    return res.data
}

async editHouse(editedHouse){
    const res = await api.put('api/cars/' + editedHouse.id, editedHouse)
    AppState.house = new House(res.data)
}
}

export const housesService = new HousesService()