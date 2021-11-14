import React, { useEffect, useState } from 'react';
import './Stylesheet.css'

import { connect } from 'react-redux';
import { createFootprint } from './../auth/actions/footprintActions';
import { useHistory } from 'react-router-dom';

import { HouseholdInformation, TravelInformation, HomeInformation, FoodInformation, ShoppingInformation } from './calculator-tabs.component'

const FootPrintCalc = ({ props, user }) => {
    const history = useHistory();
    
    const [activeTab, setActiveTab] = useState(0);
    
    const userID = user._id;

    const [city, setCity] = useState("");
    const [_state, set_State] = useState("");
    const [householdSize, setHouseholdSize] = useState(0);
    const [householdIncome, setHouseholdIncome] = useState(0);

    const [vehicleMiles, setVehicleMiles] = useState(0);
    const [vehicleMPG, setVehicleMPG] = useState(0);
    const [publicTransitMiles, setPublicTransitMiles] = useState(0);
    const [airMiles, setAirMiles] = useState(0);

    const [livingArea, setLivingArea] = useState(0);
    const [electricBill, setElectricBill] = useState(0);
    const [waterBill, setWaterBill] = useState(0);
    const [naturalGas, setNaturalGas] = useState(0);
    const [otherFuels, setOtherFuels] = useState(0);

    const [animalProtein, setAnimalProtein] = useState(0);
    const [grains, setGrains] = useState(0);
    const [dairy, setDairy] = useState(0);
    const [fruitVeg, setFruitVeg] = useState(0);
    const [snacks, setSnacks] = useState(0);

    const [shoppingGoods, setShoppingGoods] = useState(0);
    const [shoppingServices, setShoppingServices] = useState(0);

    useEffect(() =>{
        document.title = "Carbon Footprint Calculator";
    })

    const onChangeCity = e => {
        setCity(e.target.value)
    }

    const onChangeState = e => {
        set_State(e.target.value)
    }

    const onChangeHouseholdSize = e => {
        setHouseholdSize(e.target.value)
    }

    const onChangeHouseholdIncome = e => {
        setHouseholdIncome(e.target.value)
    }

    const onChangeVehicleMiles = e => {
        setVehicleMiles(e.target.value)
    }

    const onChangeVehicleMPG = e => {
        setVehicleMPG(e.target.value)
    }

    const onChangePublicTransitMiles = e => {
        setPublicTransitMiles(e.target.value)
    }

    const onChangeAirMiles = e => {
        setAirMiles(e.target.value)
    }

    const onChangeLivingArea = e => {
        setLivingArea(e.target.value)
    }

    const onChangeElectricBill = e => {
        setElectricBill(e.target.value)
    }

    const onChangeWaterBill = e => {
        setWaterBill(e.target.value)
    }

    const onChangeNaturalGas = e => {
        setNaturalGas(e.target.value)
    }

    const onChangeOtherFuels = e => {
        setOtherFuels(e.target.value)
    }

    const onChangeAnimalProtein = e => {
        setAnimalProtein(e.target.value)
    }

    const onChangeGrains = e => {
        setGrains(e.target.value)
    }

    const onChangeDairy = e => {
        setDairy(e.target.value)
    }

    const onChangeFruitVeg = e => {
        setFruitVeg(e.target.value)
    }

    const onChangeSnacks = e => {
        setSnacks(e.target.value)
    }

    const onChangeShoppingGoods = e => {
        setShoppingGoods(e.target.value)
    }

    const onChangeShoppingServices = e => {
        setShoppingServices(e.target.value)
    }

    const tabs = [
    <HouseholdInformation 
        city={city} onChangeCity={onChangeCity}
        _state={_state} onChangeState={onChangeState}
        householdSize={householdSize} onChangeHouseholdSize={onChangeHouseholdSize}
        householdIncome={householdIncome} onChangeHouseholdIncome={onChangeHouseholdIncome}
    />, 
    <TravelInformation 
        vehicleMiles={vehicleMiles} onChangeVehicleMiles={onChangeVehicleMiles}
        vehicleMPG={vehicleMPG} onChangeVehicleMPG={onChangeVehicleMPG}
        publicTransitMiles={publicTransitMiles} onChangePublicTransitMiles={onChangePublicTransitMiles}
        airMiles={airMiles} onChangeAirMiles={onChangeAirMiles}
    />, 
    <HomeInformation 
        livingArea={livingArea} onChangeLivingArea={onChangeLivingArea}
        electricBill={electricBill} onChangeElectricBill={onChangeElectricBill}
        waterBill={waterBill} onChangeWaterBill={onChangeWaterBill}
        naturalGas={naturalGas} onChangeNaturalGas={onChangeNaturalGas}
        otherFuels={otherFuels} onChangeOtherFuels={onChangeOtherFuels}
    />, 
    <FoodInformation 
        animalProtein={animalProtein} onChangeAnimalProtein={onChangeAnimalProtein}
        grains={grains} onChangeGrains={onChangeGrains}
        dairy={dairy} onChangeDairy={onChangeDairy}
        fruitVeg={fruitVeg} onChangeFruitVeg={onChangeFruitVeg}
        snacks={snacks} onChangeSnacks={onChangeSnacks}
    />, 
    <ShoppingInformation 
        shoppingGoods={shoppingGoods} onChangeShoppingGoods={onChangeShoppingGoods}
        shoppingServices={shoppingServices} onChangeShoppingServices={onChangeShoppingServices}
    /> 
    ];

    const previousPage = e => {
        e.preventDefault();

        setActiveTab(activeTab - 1);
    }

    const nextPage = e => {
        e.preventDefault();

        console.log(city);
        setActiveTab(activeTab + 1);
    }

    const onSubmit = e => {
        e.preventDefault();

        const newFootprint = {
            user_id: userID,
            city: city,
            state: _state,
            household_size: householdSize,
            household_income: householdIncome,
            vehicle_miles: vehicleMiles,
            vehicle_mpg: vehicleMPG,
            public_transit_miles: publicTransitMiles,
            air_miles: airMiles,
            living_space_area: livingArea,
            electric_bill: electricBill,
            water_bill: waterBill,
            natural_gas: naturalGas,
            other_fuels: otherFuels,
            animal_protein_cal: animalProtein,
            grains_cal: grains,
            dairy_cal: dairy,
            fruit_veg_cal: fruitVeg,
            snacks_cal: snacks,
            shopping_goods: shoppingGoods,
            shopping_services: shoppingServices 
        }

        console.log(newFootprint);
        createFootprint(newFootprint);

        history.push('/dashboard');
    }


    return (
        <div>
            <div className="currentTab">
                { tabs[activeTab] }
            </div>
            { activeTab > 0 ? 
                <input type="submit" onClick={previousPage} value="Previous Page" className="btn btn-primary" />
            : null }
            { activeTab < 4 ?
                <input type="submit" onClick={nextPage} value="Next Page" className="btn btn-primary" />
            : null }
            { activeTab === 4 ?
                <input type="submit" onClick={onSubmit} value="Submit" className="btn btn-primary" />
            : null }
        </div>
    )
}

const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData, {createFootprint})(FootPrintCalc);