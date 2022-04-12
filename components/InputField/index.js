import cn from 'classnames';
import styles from './index.module.scss';

/**
 * Represents an input field with a label.
 */
export default function InputField({ label, className, ...props }) {
  return (
    <div className={cn(styles.inputField, { [className]: !!className })}>
      <label>
        <div className={styles.labelText}>{label}</div>
        <input
          type="text"
          {...props}
        />
      </label>
    </div>
  );
}
