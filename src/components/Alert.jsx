import clsx from 'clsx';
import css from './Alert.module.css';

export function Alert({ children, variant, outlined, elevated }) {
  return (
    <p
      className={clsx(
        css.alert,
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated
      )}
    >
      {children}
    </p>
  );
}
