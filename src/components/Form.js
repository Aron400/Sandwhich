import React, { useState, useRef } from 'react'
import '../App.css';

function Form() {
    const [bread, setBread] = useState('');

    return (
        <div className="Form">
            Form goes here
            <form>
                <label>Bread(s)</label>
                <input></input>
                <button>Add</button>
                <div class="dropdown">
                    <label>Quantity:</label>
                    <div className='select'>
                        <span className='selected'>1</span>
                        <div className='caret'></div>
                    </div>
                    <ul>
                        <li>0</li>
                        <li className='active'>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        </ul>
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