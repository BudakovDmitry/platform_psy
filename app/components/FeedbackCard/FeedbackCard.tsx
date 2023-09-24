import styles from '@/app/styles/feedbackCard.module.scss'
import Image from 'next/image'
import authorPhoto from '@/public/feedback_photo.jpg'
import { useSwiperSlide } from 'swiper/react';

const FeedbackCard = () => {
    const swiperSlide = useSwiperSlide();

    return ( 
        <div className={`${styles.feedback_card} ${swiperSlide.isActive && styles.feedback_card_active}`}>
            <div className={styles.feedback_card__quotes}>
                <svg className={styles.feedback_card__quotes_icon} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="ri:double-quotes-l">
                    <path id="Vector" d="M9.54792 36.0857C7.40208 33.8066 6.25 31.2503 6.25 27.1066C6.25 19.8149 11.3687 13.2795 18.8125 10.0482L20.6729 12.9191C13.725 16.6774 12.3667 21.5545 11.825 24.6295C12.9437 24.0503 14.4083 23.8482 15.8438 23.9816C19.6021 24.3295 22.5646 27.4149 22.5646 31.2503C22.5646 33.1842 21.7964 35.0388 20.4289 36.4063C19.0615 37.7737 17.2068 38.542 15.2729 38.542C14.2035 38.5326 13.1465 38.3106 12.1637 37.889C11.1808 37.4673 10.2916 36.8543 9.54792 36.0857ZM30.3813 36.0857C28.2354 33.8066 27.0833 31.2503 27.0833 27.1066C27.0833 19.8149 32.2021 13.2795 39.6458 10.0482L41.5062 12.9191C34.5583 16.6774 33.2 21.5545 32.6583 24.6295C33.7771 24.0503 35.2417 23.8482 36.6771 23.9816C40.4354 24.3295 43.3979 27.4149 43.3979 31.2503C43.3979 33.1842 42.6297 35.0388 41.2622 36.4063C39.8948 37.7737 38.0401 38.542 36.1062 38.542C35.0368 38.5326 33.9799 38.3106 32.997 37.889C32.0141 37.4673 31.125 36.8543 30.3813 36.0857Z" fill="none"/>
                    </g>
                </svg>
            </div>
            <p className={styles.feedback_card__text}>
                Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about my health. Really happy with his advice.
            </p>
            <div className={styles.feedback_card__author}>
                <div className={styles.feedback_card__author_photo}>
                    <Image className={styles.feedback_card__author_photo} src={authorPhoto} alt="Author photo" />
                </div>
                <div className={styles.feedback_card__author_info}>
                    <h5 className={styles.feedback_card__author_name}>Maria Jannat</h5>
                    <p className={styles.feedback_card__author_position}>Content Writer</p>
                </div>
            </div>
        </div>
     );
}
 
export default FeedbackCard;