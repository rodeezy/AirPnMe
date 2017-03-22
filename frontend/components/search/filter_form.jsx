const React = require('react');
const Tooltip = require('rc-tooltip');
const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Switch = require('rc-switch');

const handleChange = (filter, updateFilter) => {
  debugger;
  return (e => updateFilter(filter, e.currentTarget.value));
}

const toggleShow = () => (
  jQuery('#range-wrapper').toggle('show')
)

const wrapperStyle = { width: 400, display: 'none' };

const FilterForm = ({ minPrice, maxPrice, updateFilter }) => {
  const handleChanges = (value) => {
    updateFilter('minPrice', value[0]);
    updateFilter('maxPrice', value[1]);
  }
  return (
    <div className='filter-form'>
      <br/>
      <button onClick={toggleShow}>Price range &#9660;</button>
      <div id='range-wrapper' style={wrapperStyle}>
        <Range onChange={handleChanges}
          min={0} max={20} defaultValue={[minPrice, maxPrice]} tipFormatter={value => `$${value}`} />
      </div>
      <button>Amenities &#9660;</button>
      <button>Privacy &#9660;</button>
      <Switch />
    </div>
  );
}

export default FilterForm;
