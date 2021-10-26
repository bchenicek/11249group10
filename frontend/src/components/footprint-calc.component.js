import React, { useEffect } from 'react';
import './Stylesheet.css'

import { connect } from 'react-redux';
import { logoutUser } from '../auth/actions/userActions';
import { useHistory } from 'react-router-dom';
import { userFootprint } from './../auth/actions/userActions';

const FootPrintCalc = ({ props, user }) => {

    var prevBtns = document.querySelectorAll(".previous-btn");
    var nextBtns = document.querySelectorAll(".next-btn");
    var formSteps = document.querySelectorAll(".step");

    let formStepsNum = 1;

    function updateFormSteps() {
        formSteps.forEach((formStep) => {
            formStep.classList.contains("step-active") &&
            formStep.classList.remove("step-active");
            });
        formSteps[formStepsNum].classList.add("step-active");
    }

    const history = useHistory();

    useEffect(() =>{
        document.title = "Carbon Footprint Calculator";
    })

    const onClickNext = e => {
        e.preventDefault();
        formStepsNum++;
        updateFormSteps();
    }

    const onClickPrev = e => {
        e.preventDefault();
        formStepsNum--;
        updateFormSteps();
    }

    const onSubmit = e => {
        //upload to database
    }


    return (
        <body>
            <h1 className="primary">Calculate Carbon Footprint</h1>
            <div class = "fpc">
                <div class="section">
                    <div class="container">
                        <form onSubmit={onSubmit}>
                            <div class="step step-1 step-active">
                                <h3>Household Information</h3>
                                <div class="form-group">
                                    <label for="city">City&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="city" name="city"></input>
                                </div>
                                <div class="form-group">
                                    <label for="state">State&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="state" name="state"></input>
                                </div>
                                <div class="form-group">
                                    <label for="householdsize">Household Size&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="householdsize" name="household-size"></input>
                                </div>
                                <div class="form-group">
                                    <label for="householdincome">Household Annual Income&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="householdincome" name="household-income"></input>
                                </div>
                                <h5>&nbsp;</h5>
                                <button type="button" class="next-btn" onClick={onClickNext}>Next</button>
                            </div>

                            <div class="step step-2">
                                <h3>Travel Information</h3>
                                <h5>&nbsp;</h5>
                                <h5>Private Vehicle(s)</h5>
                                <div class="form-group">
                                    <label for="vehiclemiles">Average Travel (miles/year)</label>
                                    <input type="text" id="vehiclemiles" name="vehicle-miles"></input>
                                </div>
                                <div class="form-group">
                                    <label for="vehiclempg">Average Gas Consumption (miles/gallon)</label>
                                    <input type="number" id="vehiclempg" name="vehicle-mpg"></input>
                                </div>
                                    <h5>&nbsp;</h5>
                                    <h5>Public Transit</h5>
                                <div class="form-group">
                                    <label for="ptransitmiles">Average Travel (miles/year)</label>
                                    <input type="text" id="ptransitmiles" name="ptransit-miles"></input>
                                </div>
                                    <h5>&nbsp;</h5>
                                    <h5>Air Travel</h5>
                                <div class="form-group">
                                    <label for="airmiles">Average Travel (miles/year)</label>
                                    <input type="text" id="airmiles" name="air-miles"></input>
                                </div>
                                <h5>&nbsp;</h5>
                                <button type="button" class="previous-btn" onClick={onClickPrev}>Prev</button>
                                <button type="button" class="next-btn" onClick={onClickNext}>Next</button>
                            </div>

                            <div class="step step-3">
                                <h3>Home Information</h3>
                                <div class="form-group">
                                    <label for="livingspace">Living Space Area (square foot)&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="livingspace" name="living-space"></input>
                                </div>
                                <div class="form-group">
                                    <label for="electricbill">Electricity Bill (monthtly average)&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="electricbill" name="electric-bill"></input>
                                </div>
                                <div class="form-group">
                                    <label for="waterbill">Water Bill (monthtly average)&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="waterbill" name="water-bill"></input>
                                </div>
                                <h5>&nbsp;</h5>
                                <h5>Additional Natural Resources</h5>
                                <div class="form-group">
                                    <label for="naturalgas">Natural Gas (therms/year)</label>
                                    <input type="text" id="naturalgas" name="natural-gas"></input>
                                </div>
                                <div class="form-group">
                                    <label for="fuels">Other Fuels (gallons/year)</label>
                                    <input type="text" id="fuels" name="fuels"></input>
                                </div>
                                <h5>&nbsp;</h5>
                                <button type="button" class="previous-btn" onClick={onClickPrev}>Prev</button>
                                <button type="button" class="next-btn" onClick={onClickNext}>Next</button>
                            </div>

                            <div class="step step-4">
                                <h3>Food Information</h3>
                                <h5>&nbsp;</h5>
                                <h5>Average Daily Consumption</h5>
                                <div class="form-group">
                                    <label for="animalprotein">Meat, Fish, Eggs (calories/person)&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="animalprotein" name="animal-protein"></input>
                                </div>
                                <div class="form-group">
                                    <label for="grains">Grains and Baked Goods (calories/person)&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="grains" name="grains"></input>
                                </div>
                                <div class="form-group">
                                    <label for="dairy">Dairy (calories/person)&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="dairy" name="dairy"></input>
                                </div>
                                <div class="form-group">
                                    <label for="fruitveg">Fruits and Vegetables (calories/person)&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="fruitveg" name="fruit-veg"></input>
                                </div>
                                <div class="form-group">
                                    <label for="snacks">Other Snacks (calories/person)&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="snacks" name="snacks"></input>
                                </div>
                                <h5>&nbsp;</h5>
                                <button type="button" class="previous-btn" onClick={onClickPrev}>Prev</button>
                                <button type="button" class="next-btn" onClick={onClickNext}>Next</button>
                            </div>
                            <div class="step step-5">
                                <h3>Shopping Information</h3>
                                <div class="form-group">
                                    <label for="shoppinggoods">Goods ($/month)&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="shoppinggoods" name="shopping-goods"></input>
                                </div>
                                <div class="form-group">
                                    <label for="shoppingservices">Services ($/month)&nbsp;</label>
                                    <label className="text-danger">*</label>
                                    <input type="text" id="shoppingservices" name="shopping-services"></input>
                                </div>
                                <h5>&nbsp;</h5>
                                <button type="button" class="previous-btn" onClick={onClickPrev}>Prev</button>
                                <button type="button" class="next-btn" onClick={onClickNext}>Submit</button>
                            </div>
                            <div class="step step-6">
                                <h3>Carbon Footprint Resutls</h3>
                                <h5>&nbsp;</h5>
                                <h5>Carbon Footprint = 49 (CO2-Tons/year)</h5>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    )
}
const fetchUserData = ({session}) => ({
    user: session.user
})

export default connect(fetchUserData)(FootPrintCalc);