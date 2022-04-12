import Checkbox from 'components/Checkbox';
import InputField from 'components/InputField';
import styles from './index.module.scss';

/**
 * Represents the onboarding step that collects user data.
 */
export default function CollectDataStep({ userEmail, onValueChange }) {
  return (
    <>
      <InputField label="Name" className={styles.nameInput} onChange={(value) => { onValueChange('name', value); }} />
      <InputField
        label={(
          <>
            Company
            <span className={styles.labelSubtext}>(if requesting in the name of a company)</span>
          </>
        )}
        onChange={(value) => { onValueChange('company', value); }}
      />
      <InputField label="Email" value={userEmail} disabled />
      <InputField label="Country" onChange={(value) => { onValueChange('country', value); }} />
      <InputField label="Phone" onChange={(value) => { onValueChange('phone', value); }} />
      <InputField label="Name of fund of interest" value="useremail@provider.com" disabled />
      <Checkbox label="I agree with terms and conditions and confirm that did this requst by my own initiative." />
    </>
  );
}
