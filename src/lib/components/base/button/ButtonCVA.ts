import { cva } from 'class-variance-authority';

// Customized button variations
export const buttonVariants = cva(
	'inline-flex items-center gap-x-2 text-sm font-semibold bg-transparent border border-transparent dark:focus:outline-none',
	{
		variants: {
			variant: {
				solid: ['text-white border-transparent', 'dark:focus:ring-1 dark:focus:ring-gray-600'],
				soft: 'dark:focus:ring-1',
				outlined: '',
				ghost: '',
				white: [
					'border-gray-200 bg-white shadow-sm',
					'hover:bg-gray-50',
					'dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-1 dark:focus:ring-gray-600'
				],
				link: 'dark:focus:ring-1 dark:focus:ring-gray-600 border-none'
			},
			intent: {
				primary: '',
				dark: '',
				dim: '',
				success: '',
				warning: '',
				danger: '',
				light: ''
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
			width: {
				block: 'w-full justify-center items-center',
				shrink: 'flex flex-shrink-0'
			},
			trailingDivider: {
				true: 'divide-x divide-gray-200 dark:divide-gray-700'
			},
			disabled: {
				true: 'disabled:opacity-50 disabled:pointer-events-none'
			}
		},
		compoundVariants: [
			{
				width: 'shrink',
				size: 'small',
				class: 'p-0 h-[2.375rem] w-[2.375rem]'
			},
			{
				width: 'shrink',
				size: 'default',
				class: 'p-0 h-[2.875rem] w-[2.875rem]'
			},
			{
				width: 'shrink',
				size: 'large',
				class: 'h-[3.875rem] w-[3.875rem]'
			},
			// solid
			{
				variant: 'solid',
				intent: 'dark',
				class: ['bg-gray-500 hover:bg-gray-600', 'dark:bg-white dark:text-gray-800']
			},
			{
				variant: 'solid',
				intent: 'dim',
				class: ['bg-gray-500 hover:bg-gray-600']
			},
			{
				variant: 'solid',
				intent: 'success',
				class: ['bg-teal-500 hover:bg-teal-600']
			},
			{
				variant: 'solid',
				intent: 'primary',
				class: ['bg-blue-600 hover:bg-blue-700']
			},
			{
				variant: 'solid',
				intent: 'warning',
				class: ['bg-yellow-500 hover:bg-yellow-600']
			},
			{
				variant: 'solid',
				intent: 'danger',
				class: ['bg-red-500 hover:bg-red-600']
			},
			{
				variant: 'solid',
				intent: 'light',
				class: 'bg-white text-gray-800 hover:bg-gray-200'
			},

			// soft
			{
				variant: 'soft',
				intent: 'dark',
				class: [
					'bg-gray-100 text-gray-800 hover:bg-gray-200',
					'dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white'
				]
			},
			{
				variant: 'soft',
				intent: 'dim',
				class: [
					'bg-gray-100 text-gray-500 hover:bg-gray-200',
					'dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-400 dark:hover:text-gray-300'
				]
			},
			{
				variant: 'soft',
				intent: 'success',
				class: [
					'bg-teal-100 text-teal-800 hover:bg-teal-200',
					'dark:hover:bg-teal-900 dark:text-teal-500 dark:hover:text-teal-400'
				]
			},
			{
				variant: 'soft',
				intent: 'primary',
				class: [
					'bg-blue-100 text-blue-800 hover:bg-blue-200',
					'dark:hover:bg-blue-900 dark:text-blue-400'
				]
			},
			{
				variant: 'soft',
				intent: 'warning',
				class: [
					'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
					'dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400'
				]
			},
			{
				variant: 'soft',
				intent: 'danger',
				class: [
					'bg-red-100 text-red-800 hover:bg-red-200',
					'dark:hover:bg-red-900 dark:text-red-500 dark:hover:text-red-400'
				]
			},
			{
				variant: 'soft',
				intent: 'light',
				class: 'bg-white/10 text-white hover:bg-white/20'
			},
			// outlined
			{
				variant: 'outlined',
				intent: 'dark',
				class: [
					'border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500',
					'dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300'
				]
			},
			{
				variant: 'outlined',
				intent: 'dim',
				class: [
					'border-gray-500 text-gray-500 hover:border-gray-800 hover:text-gray-800',
					'dark:border-gray-400 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300'
				]
			},
			{
				variant: 'outlined',
				intent: 'success',
				class: [
					'border-teal-500 text-teal-500 hover:border-teal-400 hover:text-teal-400',
					'dark:border-teal-500 dark:text-teal-500 dark:hover:text-teal-400 dark:hover:border-teal-400'
				]
			},
			{
				variant: 'outlined',
				intent: 'primary',
				class: 'border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500'
			},
			{
				variant: 'outlined',
				intent: 'warning',
				class: 'border-yellow-500 text-yellow-500 hover:border-yellow-400 hover:text-yellow-400'
			},
			{
				variant: 'outlined',
				intent: 'danger',
				class: 'border-red-500 text-red-500 hover:border-red-400 hover:text-red-400'
			},
			{
				variant: 'outlined',
				intent: 'light',
				class: 'border-white text-white hover:border-white/70 hover:text-white/70'
			},
			// ghost
			{
				variant: 'ghost',
				intent: 'dark',
				class: ['text-gray-800 hover:bg-gray-100', 'dark:text-white dark:hover:bg-gray-700']
			},
			{
				variant: 'ghost',
				intent: 'dim',
				class: ['text-gray-500 hover:bg-gray-100', 'dark:text-gray-400 dark:hover:bg-gray-800']
			},
			{
				variant: 'ghost',
				intent: 'success',
				class: [
					'text-teal-500 hover:bg-teal-100 hover:text-teal-800',
					'dark:hover:bg-teal-800/30 dark:hover:text-teal-400'
				]
			},
			{
				variant: 'ghost',
				intent: 'primary',
				class: [
					'text-blue-600 hover:bg-blue-100 hover:text-blue-800',
					'dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400'
				]
			},
			{
				variant: 'ghost',
				intent: 'warning',
				class: [
					'text-yellow-500 hover:bg-yellow-100 hover:text-yellow-800',
					'dark:hover:bg-yellow-800/30 dark:hover:text-yellow-400'
				]
			},
			{
				variant: 'ghost',
				intent: 'danger',
				class: [
					'text-red-500 hover:bg-red-100 hover:text-red-800',
					'dark:hover:bg-red-800/30 dark:hover:text-red-400'
				]
			},
			{
				variant: 'ghost',
				intent: 'light',
				class: [
					'text-white hover:bg-gray-100 hover:text-gray-800',
					'dark:hover:bg-white/10 dark:hover:text-white'
				]
			},
			// link
			{
				variant: 'link',
				intent: 'dark',
				class: [
					'text-gray-800 hover:text-blue-600',
					'dark:hover:text-white/70 dark:focus:outline-none'
				]
			},
			{
				variant: 'link',
				intent: 'dim',
				class: ['text-gray-500 hover:text-blue-600', 'dark:text-gray-400 dark:hover:text-white']
			},
			{
				variant: 'link',
				intent: 'primary',
				class: [
					'text-blue-600 hover:text-blue-800 hover:text-gray-800',
					'dark:text-blue-500 dark:hover:text-blue-400'
				]
			},
			// white
			{
				variant: 'white',
				intent: 'dark',
				class: ['font-medium text-gray-800', 'dark:text-white']
			},
			{
				variant: 'white',
				intent: 'dim',
				class: ['font-medium text-gray-500', 'dark:text-gray-400']
			},
			{
				variant: 'white',
				intent: 'success',
				class: ['font-medium text-teal-500', 'dark:hover:bg-gray-800']
			},
			{
				variant: 'white',
				intent: 'primary',
				class: ['font-medium text-blue-600', 'dark:text-blue-500']
			},
			{
				variant: 'white',
				intent: 'warning',
				class: ['font-medium text-yellow-500', 'dark:text-blue-500 dark:hover:text-blue-400']
			},
			{
				variant: 'white',
				intent: 'danger',
				class: 'font-medium text-red-500'
			}
		],
		defaultVariants: {
			variant: 'white',
			size: 'default'
		}
	}
);
