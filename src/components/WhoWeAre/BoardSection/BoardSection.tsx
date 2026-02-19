import './BoardSection.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import BoardMembersData from './BoardMembersData';
import LinkedinIcon from '../../../assets/linkdin.svg';

export default function BoardSection() {
    return (
        <section className="board-section">
            <div className="board-section__headings">
                <h6 className="board-section__subtitle">meet the people</h6>
                <h2 className="board-section__title">Board of Directors</h2>
            </div>

            <div className="board-section__slider">
                <Swiper breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                    slidesPerView={4} spaceBetween={48}
                    navigation={true} modules={[Navigation]} className="board-section__mySwiper">
                    {BoardMembersData.members.map((member, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="board-member-card">
                                    <img src={member.image} alt={member.name} className="board-member-card__image" />
                                    <h3 className="board-member-card__name">{member.name}</h3>
                                    <p className="board-member-card__position">{member.designation}</p>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="board-member-card__linkedin">{member.ctaLabel} <span><img src={LinkedinIcon} alt="LinkedIn" /></span></a>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div >
        </section >
    )
}
