import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

type Props = {}

function PrivacyPolicy({}: Props) {
	const hasAccepted =
		typeof window !== 'undefined' && localStorage.getItem('privacyPolicyAccepted') != 'true'

	let [isOpen, setIsOpen] = useState(hasAccepted)
	const handleAccept = () => {
		localStorage.setItem('privacyPolicyAccepted', 'true')
		setIsOpen(false)
	}

	const [language, setLanguage] = useState('en')

	const handleLanguage = (e: { preventDefault: () => void }) => {
		setLanguage(language === 'en' ? 'ar' : 'en')
	}

	const title =
		language === 'en' ? 'Consent to cookies usage' : 'الموافقة على استخدام ملفات تعريف الارتباط'

	const desc =
		language === 'en'
			? 'We use cookies to improve your experience on the site and to provide personalized content. Please visit our Privacy Policy page to learn more about how we use cookies and protect your data'
			: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك على الموقع وتقديم محتوى مخصص. يُرجى زيارة صفحة سياسة الخصوصية لمعرفة المزيد حول كيفية استخدامنا لملفات تعريف الارتباط وحماية بياناتك'

	const buttonText = language === 'en' ? 'Ok, I consent' : 'حسناً أنا أوافق'

	return (
		<>
			<Dialog
				open={isOpen}
				as='div'
				className='relative z-50 focus:outline-none'
				onClose={(e) => {
					return false
				}}
			>
				{/* background dim effect */}
				<div
					className={`fixed inset-0 bg-black/50 z-0 transition-opacity duration-300 ${
						isOpen ? 'opacity-100' : 'opacity-0'
					}`}
					aria-hidden='true'
				></div>

				<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4'>
						<DialogPanel
							transition
							className='forceRTL flex flex-col gap-4 w-full max-w-lg rounded-xl bg-white/10 dark:bg-white/5 p-6 backdrop-blur-lg duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
						>
							<div className='w-full flex justify-end'>
								<Button
									className='flex rounded-md py-1.5 px-3 text-md font-semibold text-white w-fit shadow-white/10 focus:outline-none bg-black/10'
									onClick={handleLanguage}
								>
									{language === 'en' ? 'تغيير اللغة' : 'Switch Language'}
								</Button>
							</div>

							<DialogTitle as='h3' className='md:text-xl font-medium text-white text-center'>
								{title}
							</DialogTitle>

							<p className='md:text-lg text-md text-white/75 text-center'>{desc}</p>

							<div className='flex justify-center'>
								<Button
									className='inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-md font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-white transition-all duration-200'
									onClick={handleAccept}
								>
									{buttonText}
								</Button>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	)
}

export default PrivacyPolicy
