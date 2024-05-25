import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

export default function App() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				navigation={true}
				pagination={{
					clickable: true
				}}
				modules={[EffectFade, Navigation, Pagination]}
				className='mySwiper'
				height={786}
			>
				<SwiperSlide>
					<img
						src='https://swiperjs.com/demos/images/nature-1.jpg'
						style={{ borderRadius: '8px', maxHeight: '75vh' }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='https://swiperjs.com/demos/images/nature-2.jpg'
						style={{ borderRadius: '8px', maxHeight: '75vh' }}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
