import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './styles.css'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'
import { Scrollbar } from 'swiper/modules'
import { EffectFade, Autoplay } from 'swiper/modules'

import { useRef } from 'react'

export default function App() {
	const progressCircle = useRef(null)
	const progressContent = useRef(null)
	const onAutoplayTimeLeft = (s, time, progress) => {
		// @ts-ignore
		progressCircle.current.style.setProperty('--progress', 1 - progress)
		// @ts-ignore
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
	}
	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				modules={[EffectFade, Scrollbar, Autoplay]}
				className='mySwiper'
				style={{ borderRadius: '8px', width: '100%', maxHeight: '85vh', minHeight: '50vh' }}
				scrollbar={{ hide: true }}
				autoplay={{ delay: 4500, disableOnInteraction: false }}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
			>
				<SwiperSlide>
					<img src='https://swiperjs.com/demos/images/nature-1.jpg' style={{ height: '100%' }} />
				</SwiperSlide>
				<SwiperSlide>
					<img src='https://swiperjs.com/demos/images/nature-2.jpg' style={{ height: '100%' }} />
				</SwiperSlide>

				<div className='autoplay-progress' slot='container-end'>
					<svg viewBox='0 0 48 48' ref={progressCircle}>
						<circle cx='24' cy='24' r='20'></circle>
					</svg>
					<span ref={progressContent}></span>
				</div>
			</Swiper>
		</>
	)
}
