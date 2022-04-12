import Img from 'components/Img';
import styles from './index.module.scss';

export default function FundInfo() {
  return (
    <div className={styles.fundInfo}>
      <Img src="/fund-info-1.png" />
      <Img src="/fund-info-2.png" />
      <Img src="/fund-info.png" />
    </div>
  );
}
