import { HiUser } from 'react-icons/hi';

export function UserMenu({ name }) {
  return (
    <div>
      <p>
        <HiUser className="my-icon" size="24" />
        {name}
      </p>
    </div>
  );
}
