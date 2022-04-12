import { AuthProvider, Button, Popup, SignInSignOutButton, useUser } from '@arcanetechnology/react-ui-lib';
import { useEffect, useMemo, useRef, useState } from 'react';
import OnboardingChart from 'svg/OnboardingChart';
import CollectDataStep from './CollectDataStep';
import styles from './index.module.scss';

/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */

const WARNING = 'WARNING';
const COLLECT_DATA = 'COLLECT_DATA';

export default function OnboardingPopup({ isOpen, onClose, onShowAppology, onShowFundInfo }) {
  const user = useUser();

  const isUserSignedIn = user.state === AuthProvider.USER_STATE_SIGNED_IN;

  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState(null);
  const answers = useRef([]);

  const [userDataFields, setUserDataFields] = useState({});
  console.log('userDataFields', userDataFields);

  const onUserDataFieldChange = (name, value) => {
    setUserDataFields((state) => ({
      ...state,
      [name]: value
    }));
  };

  const STEPS = useMemo(() => ({
    0: {
      name: 'INTRODUCTION_STEP',
      content: (
        <div className={styles.mainText}>
          Thanks for your insterest in our fund. Before we proceed, we will ask you some questions that will help us tailor this solution to find your own needs.
        </div>
      )
    },
    1: {
      name: 'PROFESSIONAL_STEPS[0]',
      content: (
        <div className={styles.largeText}>
          Do you represent an entitiy which is regulated to operate in the financial markets?
        </div>
      ),
      requiresYesNo: true
    },
    2: {
      name: 'PROFESSIONAL_STEPS[1]',
      content: (
        <>
          <div className={styles.largeText}>
            Do you represet a large undertaking meeting two of the following size requirements?
          </div>
          <div className={styles.secondaryText}>
            <ul>
              <li>Balance sheet total at least <strong>20,000,000 Euro</strong></li>
              <li>Net turnover at least <strong>40,000,000 Euro</strong></li>
              <li>Own funds at least <strong>2,000,000 Euro</strong></li>
            </ul>
          </div>
        </>
      ),
      requiresYesNo: true
    },
    3: {
      name: 'PROFESSIONAL_STEPS[2]',
      content: (
        <>
          <div className={styles.largeText}>
            Do you represent any of the following institutions?
          </div>
          <div className={styles.secondaryText}>
            <ul>
              <li>National and regional governments, public bodies that manage public debt, central banks, international and supranational institutions such as the World Bank, the International Monetary Fund, the European Central Bank, the European Investment Bank and other similar international organisations.</li>
            </ul>
          </div>
        </>
      ),
      requiresYesNo: true
    },
    4: {
      name: 'ELECTIVE_STEPS[0]',
      content: (
        <div className={styles.largeText}>
          Have you carried out transactions, of significant size, in the crypto market at an average frequency of 10 per quarter over the previous four quarters?
        </div>
      ),
      requiresYesNo: true
    },
    5: {
      name: 'ELECTIVE_STEPS[1]',
      content: (
        <div className={styles.largeText}>
          Does the size of your financial instrument portfolio, defined as including cash deposits and financial instruments exceed 500,000 Euro?
        </div>
      ),
      requiresYesNo: true
    },
    6: {
      name: 'ELECTIVE_STEPS[2]',
      content: (
        <div className={styles.largeText}>
          Have you worked in the financial sector for at least one year in a professional position, which requires knowledge of the transactions or services envisaged?
        </div>
      ),
      requiresYesNo: true
    },
    [WARNING]: {
      name: 'WARNING',
      content: (
        <>
          <div className={styles.largeText}>
            Warning
          </div>
          <div className={styles.warningBox}>
            <p>
              IMPORTANT: YOU SHOULD ESTABLISH WHETHER YOU POSSESSES SUFFICIENT EXPERIENCE, KNOWLEDGE AND EXPERTISE TO ENABLE YOURSELF TO MAKE YOUR OWN INVESTMENT DECISIONS AND PROPERLY ASSESS THE RISKS THAT SUCH INVESTMENT INCURS. IF YOU ARE IN ANY DOUBT, WE ADVISE YOU TO CONSULT YOUR STOCKBROKER, FINANCIAL ADVISER, BANK MANAGER OR EQUIVALENT.
            </p>
            <p>
              Understanding
            </p>
            <p>
              By requesting to be treated as an Elective Professional, you understand that you will lose the protections applicable exclusively to retail clients outlined in COBS of the FCA rules handbook.
              The Investment Manager will not be obliged to warn you of the nature of any risks involved in any potential investments in the fund. The key risks of investing in the fund are set out in the Offering Memorandum of the fund.
              The Investment Manager will not be obliged to disclose the basis or amount of its charges for any services the Investment Manager provides to you or on your behalf or the amount of any other income that the Investment Manager may receive from third parties in connection with such services. The basis and amount of the Investment Manager's charges are set out in section 8 of the Offering Supplement of the fund.
              The Investment Manager will not be obliged to set out any of the prescribed contents, disclosures or risk warnings needed for retail customers in offering documents, marketing brochures and other non real time financial promotions material, nor will the Investment Manager be subject to the restrictions that apply to a retail client in relation to unsolicited real time communications to investors.
              The Investment Manager will not be required to give you the warnings required for retail clients in relation to material which may lead you to deal with or use overseas firms which are not regulated by the Financial Services and Markets Act 2000 nor will the Investment Manager have to satisfy itself that the overseas firm will deal with you in an honest and reliable way.
              The Investment Manager will also not be required to comply with the FCA rules relating to restrictions on and the content of direct offer advertisements.
              The majority of the FCA rules in relation to the form and content of financial promotions will not be applicable in respect of any financial promotion communicated or approved by the Investment Manager.
              The relevant COBS rules do not require the Investment Manager to send periodic statements in the form and timeframes required, or submit to more frequent requests for such information, as specified under COBS 16.3.
              With regards to best execution, the specific requirements layed out in COBS 11.2.7 [Role of price] and COBS 11.2.10 [Competing executing venues] in respect of the Investment Manager's obligation to provide best execution will not apply.
            </p>
            <p>
              Appropriateness: In relation to the requirements of COBS 10, we will assume that the investor has the necessary experience and knowledge in order to understand the risks involved in relation to those particular investment services or transactions, or types of transaction or product, for which you have been classified as an Elective Professional Client.
            </p>
            <p>
              Complaint Handling: As an Elective Professional, the investor may not be an 'Eligible complainant' and may lose the right of access to the Financial Ombudsman Service. Any complaint you make will be dealt with under our internal complaints procedures.
            </p>
          </div>
        </>
      )
    },
    [COLLECT_DATA]: {
      name: 'COLLECT_DATA',
      content: <CollectDataStep userEmail={user.data && user.data.email} onValueChange={onUserDataFieldChange} />
    }
  }), [user]);

  useEffect(() => {
    if (!isOpen) {
      setStep(0);
      setAnswer(null);
      answers.current = [];
      setUserDataFields({});
    }
  }, [isOpen]);

  const handleContinue = () => {
    if (step.requiresYesNo && !answer) {
      return;
    }

    answers.current[step] = answer;

    setAnswer(null);

    switch (step) {
      case 0:
        setStep(1);
        break;

      case 1:
      case 2:
      case 3:
        answer === 'yes'
          ? setStep(COLLECT_DATA)
          : setStep((state) => state + 1);
        break;

      case 4:
        setStep((state) => state + 1);
        break;

      case 5:
        if (answer === 'yes' && answers.current[4] === 'yes') {
          setStep(WARNING);
        } else if (answer === 'no' && answers.current[4] === 'no') {
          onShowAppology();
        } else {
          setStep((state) => state + 1);
        }

        break;

      case 6:
        if (answer === 'yes') {
          setStep(WARNING);
        } else if (answer === 'no') {
          onShowAppology();
        }

        break;

      case WARNING:
        setStep(COLLECT_DATA);
        break;

      case COLLECT_DATA:
        onShowFundInfo();
        break;

      default:
        throw new Error(`step ${step} is not implemented`);
    }
  };

  return (
    <Popup
      isOpen={isOpen}
    >
      <div className={styles.title}>
        <OnboardingChart />
        <div className={styles.text}>Investment Onboarding</div>
      </div>

      <div className={styles.content}>
        {STEPS[step].content}
      </div>

      {STEPS[step].requiresYesNo && (
        <div className={styles.answer}>
          <label>
            <input
              type="radio"
              name="answer"
              checked={answer === 'yes'}
              onChange={() => { setAnswer('yes'); }}
            />
            <div className={styles.text}>Yes</div>
          </label>

          <label>
            <input
              type="radio"
              name="answer"
              checked={answer === 'no'}
              onChange={() => { setAnswer('no'); }}
            />
            <div className={styles.text}>No</div>
          </label>
        </div>
      )}

      <div className={styles.buttons}>
        <Button secondary small onClick={onClose}>
          Cancel
        </Button>

        {isUserSignedIn ? (
          <Button small onClick={handleContinue} disabled={STEPS[step].requiresYesNo && !answer}>Continue</Button>
        ) : (
          <SignInSignOutButton secondary={false} signInLabel="Sign In to Continue" />
        )}
      </div>
    </Popup>
  );
}
