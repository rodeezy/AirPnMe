const React = require('react');
const Tooltip = require('rc-tooltip');
const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Switch = require('rc-switch');

const handleChange = (filter, updateFilter) => {
  return (e => updateFilter(filter, e.currentTarget.value));
}

const toggleShow = (id) => (
  () => jQuery(id).toggle('show')
)

const wrapperStyle = { width: 400, display: 'none' };

const FilterForm = ({ minPrice, maxPrice, updateFilter }) => {
  const handleChanges = (value) => {
    updateFilter('minPrice', value[0]);
    updateFilter('maxPrice', value[1]);
  }
  const switchChange = (value) => {
    updateFilter('maxPrice', maxPrice === 0 ? 100 : 0);
    $( ".rc-switch" ).click(function() {
      $( "#popUp" ).fadeIn();
      setTimeout(function() {
        $( "#popUp" ).fadeOut();
      }, 1000);
    });
  }
  return (
    <div className='filter-form'>
      <br/>
      <button onClick={toggleShow('#range-wrapper')}>Price range &#9660;</button>
      <button id='privacy-btn' onClick={toggleShow('#switch-wrapper')}>Privacy &#9660;</button>
      <div id='range-wrapper' className='funwrap' style={wrapperStyle}>
        <Range onChange={handleChanges}
          min={0} max={100} defaultValue={[0, 100]} tipFormatter={value => `$${value}`} />
      </div>
      <div id='switch-wrapper' className='funwrap' style={{display: 'none'}}>
        <Switch onChange={switchChange}/>
        <div id="popUp" style={{display: 'none'}}>{maxPrice === 0 ? 'Public only' : 'All'}</div>
      </div>
    </div>
  );
}

export default FilterForm;
