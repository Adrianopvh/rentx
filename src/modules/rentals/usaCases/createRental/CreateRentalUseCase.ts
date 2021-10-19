import { AppError } from "../../../../shared/errors/AppError";

interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: Date;
}

class CreateRentalUseCase {
    constructor(private rentalsRepository: IRentalsREpository);

    async execute({
        user_id,
        car_id,
        expected_return_date,
    }): Promise<void> {
        const carUnavailable = await this.rentalsRepository.findOpenRentalBry(car_id);

        if(carUnavailable) {
            throw new AppError("Car is unvailable");
        }

        const user =await this.rentalsRepository.
    };
}

export { CreateRentalUseCase };