import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import styles from '@/styles/contacts/index.module.scss'
import MailSvg from '@/components/elements/MailSvg/MailSvg'
import FeedbackForm from '@/components/modules/FeedbackForm/FeedbackForm'

const ContactsPage = ({ isWholesaleBuyersPage = false }) => {
  const mode = useStore($mode)
  const isMobile560 = useMediaQuery(560)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <section className={styles.contacts}>
      <div className="container">
        <h2 className={`${styles.contacts__title} ${darkModeClass}`}>
          {isWholesaleBuyersPage ? 'Hulgimüük kliendid' : 'Kontaktid'}
        </h2>
        <div className={styles.contacts__inner}>
          {isWholesaleBuyersPage ? (
            <div className={`${styles.contacts__list} ${darkModeClass}`}>
              <p>
                <span>
                Suurtellimuste tingimused otsustatakse individuaalselt telefoni teel.:{' '}
                </span>
                <span>+372-55625799</span>
              </p>
              <p>
              Või kirjeldage tellimuse sisu tagasiside vormis ja me võtame teiega ühendust.
                võtame teiega ühendust.
              </p>
            </div>
          ) : (
            <ul className={`${styles.contacts__list} ${darkModeClass}`}>
              <li className={styles.contacts__list__title}>
                <h3 className={darkModeClass}>
                Voinikoo e-pood | Elektroonika, digikaup, kodutehnika...
                </h3>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Kontor:</span>
                <span> Õismäe tee 130, 13513 Tallinn (Sisse pääse Spa Taga pole)</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Ladu:</span>
                <span> Õismäe tee 130, 13513 Tallinn (Sisse pääse Spa Taga pole)</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Kontori tööaeg:</span>
                <span> E-P: 17:00 kuni 21:30</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Meie kontaktnumber:</span>
                <span> +372-55625799</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Pakkumiste vastuvõtmise aeg:</span>
                <span> E-R: 17:00-21:30</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Tellimuste elektrooniline vastuvõtmine veebilehel:</span>
                <span> 24/7</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>E-mail:</span>
                <span className={styles.contacts__list__item__mail}>
                  {!isMobile560 && <MailSvg />}{' '}
                  <span>voinikoo.ee@gmail.com</span>
                </span>
              </li>
            </ul>
          )}
          <FeedbackForm />
        </div>
      </div>
    </section>
  )
}

export default ContactsPage