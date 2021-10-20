import { Colors } from "./Colors.js";
import { Interiors } from "./Interiors.js";
import { Orders } from "./Orders.js";
import { Technologies } from "./Technologies.js";
import { VehicleTypes } from "./VehicleTypes.js";
import { Wheels } from "./Wheels.js";


export const CarsRUS = () => {
    return `
    <h1>Cars 'R Us: Personal Car Builder</h1>
    <article class="choices">
        <section class="choices__types options">
        <h2>Vehicle Type</h2>
            ${VehicleTypes()}
        </section>
        <section class="choices__colors options">
            <h2>Color</h2>
            ${Colors()}
        </section>
        <section class="choices__interiors options">
            <h2>Interiors</h2>
            ${Interiors()}
        </section>
        <section class="choices__wheels options">
            <h2>Wheels</h2>
            ${Wheels()}
        </section>
        <section class="choices__styles options">
            <h2>Technology</h2>
            ${Technologies()}
        </section>
    </article>

    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders"
        <section class="orders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </section>
    </article>
    `
}











