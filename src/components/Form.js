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

                <label>Meat(s)</label>
                <input></input>
                <button>Add</button>

                <label>Cheese(s)</label>
                <input></input>
                <button>Add</button>

                <label>Veggies(s)</label>
                <input></input>
                <button>Add</button>

                <label>Sauce(s)</label>
                <input></input>
                <button>Add</button>            
            </form>
        </div>
    )
  }
  
  export default Form