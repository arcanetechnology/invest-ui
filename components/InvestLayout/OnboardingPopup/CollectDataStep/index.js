import Checkbox from 'components/Checkbox';
import InputField from 'components/InputField';
import styles from './index.module.scss';

/**
 * Represents the onboarding step that collects user data.
 */
export default function CollectDataStep({ userEmail }) {
  return (
    <>
      <InputField label="Name" className={styles.nameInput} />
      <InputField label={(
        <>
          Company
          <span className={styles.labelSubtext}>(if requesting in the name of a company)</span>
        </>
      )}
      />
      <InputField label="Email" value={userEmail} disabled />
      <InputField label="Country" />
      <InputField label="Phone" />
      <InputField label="Name of fund of interest" value="useremail@provider.com" disabled />
      <Checkbox label="I agree with terms and conditions and confirm that did this requst by my own initiative." />
    </>
  );
}
