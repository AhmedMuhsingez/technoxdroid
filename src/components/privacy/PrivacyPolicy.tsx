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
	return (
		<div>
			<Dialog
				open={isOpen}
				as='div'
				className='relative z-50 focus:outline-none'
				onClose={(e) => {
					return false
				}}
			>
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
							className='forceRTL w-full max-w-lg rounded-xl bg-white/10 dark:bg-white/5 p-6 backdrop-blur-lg duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
						>
							<DialogTitle as='h3' className='md:text-xl font-medium text-white'>
								الموافقة على استخدام ملفات تعريف الارتباط
							</DialogTitle>
							<p className='mt-2 md:text-lg text-md text-white/75'>
								نستخدم ملفات تعريف الارتباط لتحسين تجربتك على الموقع وتقديم محتوى مخصص. يُرجى زيارة
								صفحة سياسة الخصوصية لمعرفة المزيد حول كيفية استخدامنا لملفات تعريف الارتباط وحماية
								بياناتك.
							</p>
							<div className='mt-4 flex justify-center'>
								<Button
									className='inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-md font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-white '
									onClick={handleAccept}
								>
									حسناً أنا أوافق!
								</Button>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</div>
	)
}

export default PrivacyPolicy
