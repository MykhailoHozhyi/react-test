export default function SearchForm({ onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const topic = form.elements.topic.value;

    if (topic.trim() === '') {
      alert('Please enter search term!');
      return;
    }

    onSearch(topic);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button type="submit">Search</button>
    </form>
  );
}
