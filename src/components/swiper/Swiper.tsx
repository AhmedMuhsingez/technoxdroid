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
				<img src={picture} style={{ height: '100%', objectFit: 'cover' }} />
				<div
					className='flex flex-col justify-center items-center bg-pic-gradient'
					style={{
						color: 'white',
						// background: '',
						padding: '8px',
						width: '100%',
						position: 'absolute',
						bottom: 0,
						height: '100%'
					}}
				></div>
				<div className='flex flex-col absolute bottom-0 w-full mb-8 md:mb-12 px-4'>
					<a
						href={`/articles/${article.id}`}
						className='text-white md:text-2xl text-md font-bold text-center mb-4 cursor-pointer'
					>
						{title}
					</a>
					<a
						href={`/articles/${article.id}`}
						className='text-white md:text-lg text-sm text-center cursor-pointer leading-6'
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
				className='mySwiper mb-12 md:mb-0'
				style={{
					borderRadius: '8px',
					width: '100%',
					maxHeight: '65vh',
					minHeight: '55vh',
					marginTop: '1.5rem'
				}}
				autoplay={{ delay: 4500, disableOnInteraction: false }}
			>
				{swiperData}
			</Swiper>
		</>
	)
}
