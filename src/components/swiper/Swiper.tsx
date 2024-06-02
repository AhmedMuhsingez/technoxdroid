import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './styles.css'
import '../../styles/global.css'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'
import { Scrollbar } from 'swiper/modules'
import { EffectFade, Autoplay } from 'swiper/modules'

import { useRef } from 'react'

interface Props {
	swiperContent: ArticleData[]
}
export default function App(props: Props) {
	const { swiperContent } = props

	const progressCircle = useRef(null)
	const progressContent = useRef(null)
	const onAutoplayTimeLeft = (s, time, progress) => {
		// @ts-ignore
		progressCircle.current.style.setProperty('--progress', 1 - progress)
		// @ts-ignore
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
	}

	const swiperData = swiperContent.map((article) => {
		const picture = article.attributes.cover.data.attributes.formats.medium.url
		const title = article.attributes.title
		const details = article.attributes.description

		return (
			<SwiperSlide key={article.id}>
				<img src={picture} style={{ height: '100%', objectFit: 'cover' }} />
				<div
					className='flex flex-col justify-center items-center'
					style={{
						color: 'white',
						background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);',
						width: '100%',
						position: 'absolute',
						bottom: 0,
						height: '30%',
						zIndex: 98
					}}
				>
					<a
						href={`/articles/${article.id}`}
						className='md:text-3xl sm:text-md text-center mb-2 cursor-pointer'
					>
						{title}
					</a>
					<a
						href={`/articles/${article.id}`}
						className='md:text-lg text-sm text-center mb-6 md:mb-2 cursor-pointer'
					>
						{details}
					</a>
				</div>
			</SwiperSlide>
		)
	})
	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				modules={[EffectFade, Scrollbar]}
				className='mySwiper'
				style={{ borderRadius: '8px', width: '100%', maxHeight: '85vh', minHeight: '55vh' }}
				scrollbar={{ hide: true }}
				autoplay={{ delay: 4500, disableOnInteraction: false }}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
			>
				{swiperData}
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
