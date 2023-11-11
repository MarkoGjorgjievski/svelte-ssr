import { cva } from 'class-variance-authority';

// Customized input variations
export const inputVariants = cva('block w-full text-sm', {
	variants: {
		variant: {
			bordered: [
				'border border-gray-200',
				'focus:border-blue-500 focus:ring-blue-500 outline-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
			],
			// not done
			underline: [
				'peer',
				'bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0',
				'dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
			]
		},
		floating: {
			true: [
				'peer border-gray-200 placeholder:text-transparent dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 focus:border-blue-500 focus:ring-blue-500',
				'focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2'
			]
		},
		intent: {
			default: '',
			success:
				'border-teal-500 rounded-lg text-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400',
			danger:
				'border-red-500 focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
		},
		size: {
			small: 'py-2 px-3',
			default: 'py-3 px-4',
			large: 'p-4 sm:p-5'
		},
		shape: {
			pill: 'rounded-full',
			rounded: 'rounded-lg'
		},
		disabled: {
			true: 'disabled:opacity-50 disabled:pointer-events-none'
		}
	},
	compoundVariants: [
		{
			floating: true,
			size: 'default',
			class: 'p-4'
		},
		{
			variant: 'underline',
			size: 'default',
			class: 'py-3 pe-0 ps-8'
		}
	],
	defaultVariants: {
		variant: 'bordered',
		size: 'default',
		intent: 'default',
		shape: 'rounded'
	}
});
