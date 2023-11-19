import "./Category.css";
import React from 'react'

function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>One
        </label>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>Two
        </label>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>Three
        </label>

    </div>


  </div>
  );
}


export default Category