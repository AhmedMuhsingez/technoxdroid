import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './styles.css'
import '../../styles/global.css'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'
import { EffectFade, Autoplay, Scrollbar } from 'swiper/modules'

interface Props {
	swiperContent: ArticleData[]
}
export default function App(props: Props) {
	const { swiperContent } = props

	const swiperData = swiperContent.map((article) => {
		const picture = article.attributes.cover.data.attributes.formats.medium.url
		const title = article.attributes.title
		const details = article.attributes.description

		return (
			<SwiperSlide key={article.id}>
				<img src={picture} style={{ height: '100%', objectFit: 'cover', filter: 'blur(3px)' }} />
				<div
					className='flex flex-col justify-center items-center'
					style={{
						color: 'white',
						background: 'linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(255,255,255,0) 100%)',
						padding: '8px',
						width: '100%',
						position: 'absolute',
						bottom: 0,
						height: '35%',
						zIndex: 98
					}}
				>
					<a
						href={`/articles/${article.id}`}
						className='md:text-2xl text-md font-bold text-center mb-4 cursor-pointer'
					>
						{title}
					</a>
					<a
						href={`/articles/${article.id}`}
						className='md:text-lg text-sm text-center mb-10 md:mb-2 cursor-pointer leading-6'
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
				modules={[Scrollbar, Autoplay, EffectFade]}
				scrollbar={{
					hide: true
				}}
				className='mySwiper'
				style={{ borderRadius: '8px', width: '100%', maxHeight: '85vh', minHeight: '55vh' }}
				autoplay={{ delay: 4500, disableOnInteraction: false }}
			>
				{swiperData}
			</Swiper>
		</>
	)
}
