export default function SelectCoffee({ value, onChecked }) {
  return (
    <div>
      <h1>Select coffee size</h1>
      <p>Selected size: {value}</p>

      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={value === 'sm'}
          onChange={event => onChecked(event.target.value)}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={value === 'md'}
          onChange={event => onChecked(event.target.value)}
        />
        Meduim
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={value === 'lg'}
          onChange={event => onChecked(event.target.value)}
        />
        Large
      </label>
    </div>
  );
}
