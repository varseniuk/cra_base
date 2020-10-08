import React from "react";
import './Checkbox.css';

export const Checkbox = () => {
  return (
      <div>
        <div className="container">
          <div className="container">
            <input type="checkbox" className="custom-checkbox" id="happy" name="happy" value="yes" />
            <label htmlFor="happy">Check 2</label>
          </div>
          <div className="container">
            <input type='checkbox' id="id" className="custom-checkbox" />
            <label htmlFor="id" className="fieldLabel">
              check
            </label>
          </div>
          <div className="container">
          <label htmlFor='only-detailed' className="custom-checkbox">
						<input type='checkbox' id='only-detailed' />
						  <span>Show candidates</span>
					</label>
          </div>
        </div>
      </div>
      
    )
}
