import React from "react";

const HouseholdInformation = props => {
    const states = [ "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

    return (
        <div>
            <h3>Household Information</h3>
            <form>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={props.city}
                        onChange={props.onChangeCity}
                        />
                </div>
                <div className="form-group">
                <label>State:</label>
                    <select 
                        required
                        className="form-control"
                        value={props._state}
                        onChange={props.onChangeState}>
                        { 
                            states.map(currState => {       
                                return (
                                    <option value={currState}>{currState}</option>
                                )
                            }) 
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Household Size:</label>
                    <input type="number"
                        required
                        className="form-control"
                        value={props.householdSize}
                        onChange={props.onChangeHouseholdSize}
                        />
                </div>
                <div className="form-group">
                    <label>Household Annual Income:</label>
                    <input type="number"
                        required
                        className="form-control"
                        value={props.householdIncome}
                        onChange={props.onChangeHouseholdIncome}
                        />
                </div>
            </form>
        </div>

    )
}

const TravelInformation = (props) => {
    return (
        <div>
            <h3>Travel Information</h3>
            <form>
                <h5>&nbsp;</h5>
                <h5>Personal Vehicle(s)</h5>
                <div className="form-group">
                    <label>Average Travel (miles/year):</label>
                    <input type="number"
                        className="form-control"
                        value={props.vehicleMiles}
                        onChange={props.onChangeVehicleMiles}
                        />
                </div>
                <div className="form-group">
                    <label>Average Gas Consumption (miles/gallon):</label>
                    <input type="number"
                        className="form-control"
                        value={props.vehicleMPG}
                        onChange={props.onChangeVehicleMPG}
                        />
                </div>
                <h5>&nbsp;</h5>
                <h5>Public Transit</h5>
                <div className="form-group">
                    <label>Average Travel (miles/year):</label>
                    <input type="number"
                        className="form-control"
                        value={props.publicTransitMiles}
                        onChange={props.onChangePublicTransitMiles}
                        />
                </div>
                <h5>&nbsp;</h5>
                <h5>Air Travel</h5>
                <div className="form-group">
                    <label>Average Travel (miles/year):</label>
                    <input type="number"
                        className="form-control"
                        value={props.airMiles}
                        onChange={props.onChangeAirMiles}
                        />
                </div>
            </form>
        </div>
    )
}

const HomeInformation = (props) => {
    return (
        <div>
            <h3>Home Information</h3>
            <form>
                <div className="form-group">
                    <label>Living Space Area (square feet):</label>
                    <input type="number"
                        className="form-control"
                        value={props.livingArea}
                        onChange={props.onChangeLivingArea}
                        />
                </div>
                <div className="form-group">
                    <label>Electricity Bill (dollars/month):</label>
                    <input type="number"
                        required
                        className="form-control"
                        value={props.electricBill}
                        onChange={props.onChangeElectricBill}
                        />
                </div>
                <div className="form-group">
                    <label>Water Bill (dollars/month):</label>
                    <input type="number"
                        required
                        className="form-control"
                        value={props.waterBill}
                        onChange={props.onChangeWaterBill}
                        />
                </div>
                <h5>&nbsp;</h5>
                <h5>Additional Natural Resources</h5>
                <div className="form-group">
                    <label>Natural Gas (therms/year):</label>
                    <input type="number"
                        className="form-control"
                        value={props.naturalGas}
                        onChange={props.onChangeNaturalGas}
                        />
                </div>
                <div className="form-group">
                    <label>Other Fuels (gallons/year):</label>
                    <input type="number"
                        className="form-control"
                        value={props.otherFuels}
                        onChange={props.onChangeOtherFuels}
                        />
                </div>
            </form>
        </div>
    )
}

const FoodInformation = (props) => {
    return (
        <div>
            <h3>Food Information</h3>
            <form>
                <h5>&nbsp;</h5>
                <h5>Average Daily Consumption</h5>
                <div className="form-group">
                    <label>Meat, Fish, and Eggs (calories/person):</label>
                    <input type="number"
                        required
                        className="form-control"
                        value={props.animalProtein}
                        onChange={props.onChangeAnimalProtein}
                        />
                </div>
                <div className="form-group">
                    <label>Grains and Baked Goods (calories/person):</label>
                    <input type="number"
                        required
                        className="form-control"
                        value={props.grains}
                        onChange={props.onChangeGrains}
                        />
                </div>
                <div className="form-group">
                    <label>Dairy (calories/person):</label>
                    <input type="number"
                        required
                        className="form-control"
                        value={props.dairy}
                        onChange={props.onChangeDairy}
                        />
                </div>
                <div className="form-group">
                    <label>Fruits and Vegetable (calories/person):</label>
                    <input type="number"
                        required
                        className="form-control"
                        value={props.fruitVeg}
                        onChange={props.onChangeFruitVeg}
                        />
                </div>
                <div className="form-group">
                    <label>Additional Snacks (calories/person):</label>
                    <input type="number"
                        required
                        className="form-control"
                        value={props.snacks}
                        onChange={props.onChangeSnacks}
                        />
                </div>
            </form>
        </div>
    )
}

const ShoppingInformation = (props) => {
    return (
        <div>
            <h3>Shopping Information</h3>
            <form>
                <div className="form-group">
                    <label>Goods (dollars/month):</label>
                    <input type="number"
                        required
                        className="form-control"
                        value={props.shoppingGoods}
                        onChange={props.onChangeShoppingGoods}
                        />
                </div>
                <div className="form-group">
                    <label>Services (dollars/month):</label>
                    <input type="number"
                        required
                        className="form-control"
                        value={props.shoppingServices}
                        onChange={props.onChangeShoppingServices}
                        />
                </div>
            </form>
        </div>
    )
}

export { HouseholdInformation, TravelInformation, HomeInformation, FoodInformation, ShoppingInformation };