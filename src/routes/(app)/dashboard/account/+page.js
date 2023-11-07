import GeneralTab from "$lib/views/dashboard/sections/account/GeneralTab.svelte";
import ImageGalleryTab from "$lib/views/dashboard/sections/account/ImageGalleryTab.svelte";
import ServicesTab from "$lib/views/dashboard/sections/account/ServicesTab.svelte";
import WorkingHoursTab from "$lib/views/dashboard/sections/account/WorkingHoursTab.svelte";

export function load() {
    const tabs = [
		{ query: 'general', label: 'General', component: GeneralTab },
		{ query: 'services', label: 'Services', component: ServicesTab },
		{ query: 'working-hours', label: 'Working hours', component: WorkingHoursTab },
		{ query: 'image-gallery', label: 'Image gallery', component: ImageGalleryTab },
	];

    return { tabs }
}