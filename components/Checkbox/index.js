import cn from 'classnames';
import styles from './index.module.scss';

/**
 * Represents a checkbox with a label.
 */
export default function Checkbox({ label, className, ...props }) {
  return (
    <div className={cn(styles.checkbox, { [className]: !!className })}>
      <label>
        <input
          type="checkbox"
          {...props}
        />
        <div className={styles.labelText}>{label}</div>
      </label>
    </div>
  );
}
