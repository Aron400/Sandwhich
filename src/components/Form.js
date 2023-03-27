import React from 'react'
import '../App.css';

function Form() {
    return (
        <div className="Form">
            Form goes here
            <form>
                <label>Bread(s)</label>
                <input></input>
                <button>Add</button>
                <div class="dropdown">
                    <label>Quantity:</label>
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        
                    </div>
                </div>

                <label>Meat(s)</label>
                <input></input>
                <button>Add</button>
                <div class="dropdown">
                    <label>Quantity:</label>
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        
                    </div>
                </div>

                <label>Cheese(s)</label>
                <input></input>
                <button>Add</button>
                <div class="dropdown">
                    <label>Quantity:</label>
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        
                    </div>
                </div>

                <label>Veggies(s)</label>
                <input></input>
                <button>Add</button>
                <div class="dropdown">
                    <label>Quantity:</label>
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        
                    </div>
                </div>

                <label>Sauce(s)</label>
                <input></input>
                <button>Add</button>
                <div class="dropdown">
                    <label>Quantity:</label>
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        
                    </div>
                </div>         
            </form>
        </div>
    )
  }
  
  export default Form