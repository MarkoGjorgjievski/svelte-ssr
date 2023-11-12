import { cva } from 'class-variance-authority';

// Customized label variations
export const labelVariants = cva('dark:text-white', {
	variants: {
		variant: {
			default: ['block font-medium mb-2'],
			floating: [
				'absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 text-gray-600 dark:text-gray-400 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500'
			]
		},
		size: {
			small: 'text-xs',
			default: 'text-sm',
			large: 'text-sm'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});
