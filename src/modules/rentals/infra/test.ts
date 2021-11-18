import { ICreateRentalDTO } from "../dtos/ICreateRentalDTO";
import { IRentalsRepository } from "../repositories/IRentalsRepository";
import { Rental } from "./typeorm/entities/Rental";

class RentalsRepository implements IRentalsRepository {
    findOpenRentalByCar(car_id: string): Promise<Rental> {
        throw new Error("Method not implemented.");
    }
    findOpenRentalByUser(user_id: string): Promise<Rental> {
        throw new Error("Method not implemented.");
    }
    create(data: ICreateRentalDTO): Promise<Rental> {
        throw new Error("Method not implemented.");
    }

}

export { RentalsRepository };