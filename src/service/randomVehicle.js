import faker from 'faker';

export default function randomVehicle () {
    faker.locale = 'en';
    const vehicle = faker.vehicle.vehicle();
    console.log(vehicle);
    return vehicle;
}