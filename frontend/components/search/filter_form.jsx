const React = require('react');
const Tooltip = require('rc-tooltip');
const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handleChange = (filter, updateFilter) => {
  debugger;
  return (e => updateFilter(filter, e.currentTarget.value));
}

const toggleShow = () => (
  jQuery('#range-wrapper').toggle('show')
)

const wrapperStyle = { width: 400 };

const FilterForm = ({ minPrice, maxPrice, updateFilter }) => {
  const handleChanges = (value) => {
    updateFilter('minPrice', value[0]);
    updateFilter('maxPrice', value[1]);
  }
  return (
    <div>
      <input id="pac-input" className="controls" type="text" placeholder="Anywhere" />
      <br/>
      <button onClick={toggleShow}>Price</button>
      <div id='range-wrapper' style={wrapperStyle}>
        <Range onChange={handleChanges}
          min={0} max={20} defaultValue={[minPrice, maxPrice]} tipFormatter={value => `$${value}`} />
      </div>
    </div>
  );
}

export default FilterForm;
