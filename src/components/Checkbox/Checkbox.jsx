export default function Checkbox({ checked, onChecked }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={checked}
          onChange={event => onChecked(event.target.checked)}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!checked}>
        Proceed
      </button>
    </div>
  );
}
