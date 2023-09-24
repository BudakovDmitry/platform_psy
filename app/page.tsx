import styles from '@/app/styles/home.module.scss'
import Image from 'next/image'
import { ysabeau, kiwiMaru } from '@/app/fonts/fonts'
import bg1 from '@/public/bg_1.svg'
import bg2 from '@/public/bg_2.svg'
import bg4 from '@/public/bg_4.svg'
import startBg from '@/public/start_bg.svg'
import photo from '@/public/photo.png'
import icon1 from '@/public/icons/bi_briefcase.svg'
import icon2 from '@/public/icons/bi_journal-code.svg'
import icon3 from '@/public/icons/carbon_user-multiple.svg'
import icon4 from '@/public/icons/clarity_devices-line.svg'
import icon5 from '@/public/icons/fluent_design-ideas-20-regular.svg'
import icon6 from '@/public/icons/grommet-icons_technology.svg'
import icon7 from '@/public/icons/iconoir_bank.svg'
import icon8 from '@/public/icons/iconoir_google-docs.svg'
import postImage from '@/public/post.jpg'
import subscribeBg from '@/public/subscribe_bg.svg'
import subscribeBgDots from '@/public/subscribe_bg_dots.svg'
import 'bootstrap/dist/css/bootstrap.css'
// import SliderFeedback from '@/app/components/SliderFeedback/SliderFeedback'
import Link from 'next/link'
// import Drawer from '@/app/components/Drawer/Drawer'
// import { useEffect, useState } from 'react'

const Home = () => {
  const isMobile = false;

  const menuItems = [
    {
      id: 0,
      title: 'Home',
      link: '#'
    },
    {
      id: 1,
      title: 'Categories',
      link: '#categories'
    },
    {
      id: 2,
      title: 'Service',
      link: '#'
    },
    {
      id: 3,
      title: 'Jobs',
      link: '#'
    },
  ]

  const menuButtons = [
    {
      id: 0,
      text: 'Post a Vacancy',
      className: `${styles.button_main} ${styles.button_drawer}`
    }
  ]

  return (
      <>
        <header className={`${styles.header} ${ysabeau.className} container`} id="header">
          <h3 className={`${styles.header__logo} ${ysabeau.className}`}><a className={styles.header__logo_link} href="#header">Bu<span className={styles.header__logo_letter}>d</span>akova</a></h3>
          {isMobile ? (null) : (
              <>
                <nav className={styles.header__nav}>
                  {menuItems.map(item => <a key={item.id} className={styles.header__nav_link} href={item.link}>{item.title}</a>)}
                </nav>
                <Link href="/login" className={`${styles.button_main} ${styles.header__button}`}>Login</Link>
              </>)}

        </header>
        <main className={styles.main}>
          <Image className={styles.main__background_first} src={bg1} alt='background-1' />
          <div className={styles.main__background_second_container}>
            <Image className={styles.main__background_second} src={bg2} alt='background-2' />
            <Image className={styles.main__photo} src={photo} alt='photo' />
          </div>
          <div className="container">
            <h1 className={`${styles.main__title} ${ysabeau.className}`}>Find & Apply For Your Dream Job</h1>
            <p className={styles.main__description}>The website is chockablock with useful features, allowing you to efficiently search and apply for roles across all sectors, experience levels and locations.</p>
          </div>
        </main>
        <section className={styles.popular}>
          <div className={`${styles.popular__content} container`}>
            <h2 className={`${styles.section_title} ${styles.section_title_white} ${ysabeau.className} ${styles.popular__title}`}>Popular Job Posts</h2>
            <div className={styles.popular__cards}>
              <div className={styles.popular__card}>

              </div>
              <div className={styles.popular__card}>

              </div>
              <div className={styles.popular__card}>

              </div>
            </div>
            <a className={styles.popular__link} href="#">View All</a>
          </div>
        </section>
        <section className={styles.categories} id='categories'>
          <div className={`${styles.categories__content} container`}>
            <h2 className={`${styles.section_title} ${styles.categories__title} ${ysabeau.className}`}>Job Categories</h2>
            <div className={styles.categories__grid}>
              <div className={styles.categories__card}>
                <div className={styles.categories__card_icon_container}>
                  {/* <Image className={styles.categories__card_icon_image} src={icon1} alt='icon-1' /> */}
                  <svg className={styles.categories__card_icon_image} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="bi:briefcase" clipPath="url(#clip0_1_398)">
                      <g id="Group">
                        <path id="Vector" d="M24.375 3.75C22.8832 3.75 21.4524 4.34263 20.3975 5.39752C19.3426 6.45242 18.75 7.88316 18.75 9.375V11.25H5.625C4.13316 11.25 2.70242 11.8426 1.64752 12.8975C0.592632 13.9524 0 15.3832 0 16.875L0 46.875C0 48.3668 0.592632 49.7976 1.64752 50.8525C2.70242 51.9074 4.13316 52.5 5.625 52.5H54.375C55.8668 52.5 57.2976 51.9074 58.3525 50.8525C59.4074 49.7976 60 48.3668 60 46.875V16.875C60 15.3832 59.4074 13.9524 58.3525 12.8975C57.2976 11.8426 55.8668 11.25 54.375 11.25H41.25V9.375C41.25 7.88316 40.6574 6.45242 39.6025 5.39752C38.5476 4.34263 37.1168 3.75 35.625 3.75H24.375ZM24.375 7.5H35.625C36.1223 7.5 36.5992 7.69754 36.9508 8.04918C37.3025 8.40081 37.5 8.87772 37.5 9.375V11.25H22.5V9.375C22.5 8.87772 22.6975 8.40081 23.0492 8.04918C23.4008 7.69754 23.8777 7.5 24.375 7.5ZM31.4475 33.4275L56.25 26.8162V46.875C56.25 47.3723 56.0525 47.8492 55.7008 48.2008C55.3492 48.5525 54.8723 48.75 54.375 48.75H5.625C5.12772 48.75 4.65081 48.5525 4.29917 48.2008C3.94754 47.8492 3.75 47.3723 3.75 46.875V26.8125L28.5525 33.4275C29.501 33.6801 30.499 33.6801 31.4475 33.4275ZM5.625 15H54.375C54.8723 15 55.3492 15.1975 55.7008 15.5492C56.0525 15.9008 56.25 16.3777 56.25 16.875V22.935L30.4837 29.805C30.1668 29.8896 29.8332 29.8896 29.5162 29.805L3.75 22.935V16.875C3.75 16.3777 3.94754 15.9008 4.29917 15.5492C4.65081 15.1975 5.12772 15 5.625 15Z" fill="#EE4F3C"/>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_398">
                        <rect width="60" height="60" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <h4 className={styles.categories__card_title}>Accouting & Finance</h4>
                <p className={styles.categories__card_description}>125 Job Vacancy</p>
              </div>
              <div className={styles.categories__card}>
                <div className={styles.categories__card_icon_container}>
                  <Image className={styles.categories__card_icon_image} src={icon2} alt='icon-2' />
                </div>
                <h4 className={styles.categories__card_title}>UI/UX Design</h4>
                <p className={styles.categories__card_description}>52 Job Vacancy</p>
              </div>
              <div className={styles.categories__card}>
                <div className={styles.categories__card_icon_container}>
                  <Image className={styles.categories__card_icon_image} src={icon3} alt='icon-3' />
                </div>
                <h4 className={styles.categories__card_title}>Content Writing</h4>
                <p className={styles.categories__card_description}>150 Job Vacancy</p>
              </div>
              <div className={styles.categories__card}>
                <div className={styles.categories__card_icon_container}>
                  <Image className={styles.categories__card_icon_image} src={icon4} alt='icon-4' />
                </div>
                <h4 className={styles.categories__card_title}>Accouting & Finance</h4>
                <p className={styles.categories__card_description}>125 Job Vacancy</p>
              </div>
              <div className={styles.categories__card}>
                <div className={styles.categories__card_icon_container}>
                  <Image className={styles.categories__card_icon_image} src={icon5} alt='icon-5' />
                </div>
                <h4 className={styles.categories__card_title}>Digital Marketing</h4>
                <p className={styles.categories__card_description}>150 Job Vacancy</p>
              </div>
              <div className={styles.categories__card}>
                <div className={styles.categories__card_icon_container}>
                  <Image className={styles.categories__card_icon_image} src={icon6} alt='icon-6' />
                </div>
                <h4 className={styles.categories__card_title}>Technical Support</h4>
                <p className={styles.categories__card_description}>350 Job Vacancy</p>
              </div>
              <div className={styles.categories__card}>
                <div className={styles.categories__card_icon_container}>
                  <Image className={styles.categories__card_icon_image} src={icon7} alt='icon-7' />
                </div>
                <h4 className={styles.categories__card_title}>Human Resource</h4>
                <p className={styles.categories__card_description}>35 Job Vacancy</p>
              </div>
              <div className={styles.categories__card}>
                <div className={styles.categories__card_icon_container}>
                  <Image className={styles.categories__card_icon_image} src={icon8} alt='icon-8' />
                </div>
                <h4 className={styles.categories__card_title}>Art & Illustration</h4>
                <p className={styles.categories__card_description}>52 Job Vacancy</p>
              </div>
            </div>
          </div>
          <Image className={styles.categories__background_element} src={bg4} alt="bg_4" />
        </section>
        <section className={styles.start}>
          <div className={`${styles.start__content} container`}>
            <div className={styles.start__text}>
              <h2 className={`${styles.section_title} ${styles.start__title} ${ysabeau.className}`}>Get Start New Job</h2>
              <p className={styles.start__description}>Create an account so you can get job information that suits you, and you can apply the salary your demand.</p>
              <Link href="/signin" className={`${styles.button_main} ${styles.start__button}`}>Create an Account</Link>
            </div>
            <Image className={styles.start__background} src={startBg} alt="background" />
          </div>
          <Image className={styles.start__background_element} src={bg4} alt="bg_4" />
        </section>
        <section className={styles.post}>
          <div className={`${styles.post__content} container`}>
            <Image className={styles.post__image} src={postImage} alt="Post image" />
            <div className={styles.post__text}>
              <h2 className={`${styles.section_title} ${styles.post__title} ${ysabeau.className}`}>Post a Job for UX Designer</h2>
              <p className={styles.post__description}>Create an account so you can get job information that suits you, and you can apply the salary your demand.</p>
              <button className={styles.button_main}>Post a Job</button>
            </div>
          </div>
        </section>
        {/* <section className={styles.feedback}>
                <h2 className={`${styles.section_title} ${styles.feedback__title} ${ysabeau.className} container`}>Great Feedback From Candidates</h2>
                <SliderFeedback />
            </section> */}
        <section className={styles.subscribe}>
          <div className={`${styles.subscribe__content} container`}>
            <h2 className={`${styles.section_title} ${styles.section_title_white} ${ysabeau.className} ${styles.subscribe__title}`}>Subscribe to get update vacancy post</h2>
            <div className={styles.subscribe__input_container}>
              <input className={styles.subscribe__input} type="text" name="email" id="subscribe" placeholder='Email' />
              <button className={`${styles.button_main} ${styles.subscribe__input_button}`}>Subscribe</button>
            </div>
            <Image className={styles.subscribe__content_bg} src={subscribeBg} alt="Subscribe background" />
            <Image className={styles.subscribe__content_bg_dots} src={subscribeBgDots} alt="Subscribe background dots" />
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={`${styles.footer__content} container`}>
            <h3 className={`${styles.footer__logo} ${ysabeau.className}`}><a className={styles.footer__logo_link} href="#header">Bu<span className={styles.footer__logo_letter}>d</span>akova</a></h3>
            <a className={styles.footer__link} href="tel:+380991224783">Call Me: +38 (099) 122 47 83</a>
            <div className={styles.footer__social}>
              <a className={`${styles.footer__social_link} ${styles.footer__social_link_instagram}`} href="#">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"/></svg>
              </a>
              <a className={`${styles.footer__social_link} ${styles.footer__social_link_telegram}`} href="#">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">    <path d="M 20.572266 3.0117188 C 20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875 C 19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312 L 3.2695312 9.9960938 C 2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672 C 2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062 L 6.9472656 14.757812 C 7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906 C 8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594 C 9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812 C 10.165656 20.007812 10.484625 19.801641 10.640625 19.681641 L 12.970703 17.710938 L 15.800781 20.328125 C 15.909781 20.439125 16.486719 21 17.261719 21 C 18.228719 21 18.962234 20.195016 19.115234 19.416016 C 19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625 C 22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531 C 21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875 C 19.533156 7.061875 17.478016 17.378234 17.166016 18.865234 L 13.029297 15.039062 L 10.222656 17.416016 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391 L 4.53125 11.636719 L 6.21875 10.927734 C 10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z"/></svg>
              </a>
              <a className={`${styles.footer__social_link} ${styles.footer__social_link_facebook}`} href="#">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">    <path d="M11.666,2.005C6.62,2.17,2.374,6.251,2.025,11.288c-0.369,5.329,3.442,9.832,8.481,10.589V14.65H8.892 c-0.726,0-1.314-0.588-1.314-1.314v0c0-0.726,0.588-1.314,1.314-1.314h1.613v-1.749c0-2.896,1.411-4.167,3.818-4.167 c0.357,0,0.662,0.008,0.921,0.021c0.636,0.031,1.129,0.561,1.129,1.198v0c0,0.663-0.537,1.2-1.2,1.2h-0.442 c-1.022,0-1.379,0.969-1.379,2.061v1.437h1.87c0.591,0,1.043,0.527,0.953,1.111l-0.108,0.701c-0.073,0.47-0.477,0.817-0.953,0.817 h-1.762v7.247C18.235,21.236,22,17.062,22,12C22,6.366,17.341,1.821,11.666,2.005z"/></svg>
              </a>
            </div>
          </div>
          <Image className={styles.footer__background_element} src={bg4} alt="bg_4" />
          <Image className={styles.footer__background_element_second} src={bg4} alt="bg_4" />
        </footer>
      </>
  );
}

export default Home;
