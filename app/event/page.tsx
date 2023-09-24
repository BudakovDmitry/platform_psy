import styles from '@/app/styles/event.module.scss'
import { delaGothicOne, nunito } from '@/app/fonts/fonts'
import Image from 'next/image'
import mainImage from '@/public/main_image.jpeg'
import aboutPhoto from '@/public/about_photo.jpg'
import 'bootstrap/dist/css/bootstrap.css'

const Event = () => {
    return ( 
        <>
            <header className={`${styles.header} ${nunito.className} container`}>
                <h3 className={styles.header__text}>Empower Your Mind</h3>
                <nav className={styles.header__nav}>
                    <a className={styles.header__nav_link} href="#">Home</a>
                    <a className={styles.header__nav_link} href="#">About</a>
                    <a className={styles.header__nav_link} href="#">Services</a>
                </nav>
            </header>
            <main className={`${styles.main} ${nunito.className}`}>
                <div className={`${styles.main__text} container`}>
                    <h1 className={`${styles.main__title} ${delaGothicOne.className}`}>Welcome</h1>
                    <p className={styles.main__description}>Embark on a journey towards mental wellness with our dedicated team of expert psychologists.</p>
                </div>
                <div className={styles.main__image_container}>
                    <Image className={styles.main__image} src={mainImage} alt="Main image" />
                </div>
                <section className={`${styles.about} container`}>
                    <div className={styles.about__photo_container}>
                        <Image className={styles.about__photo} src={aboutPhoto} alt="About photo" />
                    </div>
                    <div className={styles.about__text}>
                        <h2 className={`${styles.about__title} ${styles.section__title} ${delaGothicOne.className}`}>About</h2>
                        <p className={styles.about__desciption}>At our practice, we believe that mental health is a vital aspect of overall well-being. Our team of motivated and compassionate psychologists draw upon their vast experience and up-to-date knowledge to guide clients towards personal growth, resilience, and a healthy mindset.</p>
                    </div>
                </section>
                <section className={`${styles.services} container`}>
                    <h2 className={`${styles.section__title} ${styles.services__title} ${delaGothicOne.className}`}>Our Services</h2>
                    <div className={styles.services__grid}>
                        <div className={styles.services__item}>
                            <h5 className={styles.services__item_title}>Individual Therapy</h5>
                            <p className={styles.services__item_description}>Tailor-made sessions to address personal concerns and challenges</p>
                        </div>
                        <div className={styles.services__item}>
                            <h5 className={styles.services__item_title}>Couples & Family</h5>
                            <p className={styles.services__item_description}>Strengthening relationships through understanding and communication</p>
                        </div>
                        <div className={styles.services__item}>
                            <h5 className={styles.services__item_title}>CBT</h5>
                            <p className={styles.services__item_description}>Transformative approach targeting maladaptive thoughts and behaviors</p>
                        </div>
                        <div className={styles.services__item}>
                            <h5 className={styles.services__item_title}>Stress Management</h5>
                            <p className={styles.services__item_description}>Effective techniques aimed at fostering inner peace and balance</p>
                        </div>
                        <div className={styles.services__item}>
                            <h5 className={styles.services__item_title}>Psychoeducation</h5>
                            <p className={styles.services__item_description}>Workshops designed to equip participants with essential mental health tools</p>
                        </div>
                        <div className={styles.services__item}>
                            <h5 className={styles.services__item_title}>Customized Programs</h5>
                            <p className={styles.services__item_description}>Specialized services catering to unique situations and challenges</p>
                        </div>
                    </div>
                </section>
                <section className={`${styles.reviews} container`}>
                    <h2 className={`${styles.section__title} ${styles.reviews__title} ${delaGothicOne.className}`}>Reviews</h2>
                    <div className={styles.reviews__content}>
                        <div className={`${styles.review} ${styles.review_left}`}>
                            <div className={styles.review__text}>
                                <p className={styles.review__description}>My experience with this practice has not only changed my life, but it has also provided me with a newfound sense of hope and empowerment.</p>
                                <p className={styles.review__author}>Samantha</p>
                            </div>
                        </div>
                        <div className={`${styles.review} ${styles.review_right}`}>
                            <div className={styles.review__text}>
                                <p className={styles.review__description}>The guided support and professional insight I received have been invaluable in my journey towards mental wellness.</p>
                                <p className={styles.review__author}>Michael</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${styles.resources} container`}>
                    <h2 className={`${styles.section__title} ${styles.resources__title} ${delaGothicOne.className}`}>Resources</h2>
                    <p className={styles.resources__description}>Explore our curated collection of articles, blog posts, and resources, covering a diverse range of mental health topics, self-care practices, and personal development insights.</p>
                </section>
            </main>
        </> 
    );
}
 
export default Event;