import General from "$lib/views/dashboard/account/General.svelte";
import ImageGallery from "$lib/views/dashboard/account/ImageGallery.svelte";
import Services from "$lib/views/dashboard/account/Services.svelte";
import WorkingHours from "$lib/views/dashboard/account/WorkingHours.svelte";

export function load() {
    const tabs = [
		{ slug: 'general', label: 'General', component: General },
		{ slug: 'services', label: 'Services', component: Services },
		{ slug: 'working-hours', label: 'Working hours', component: WorkingHours },
		{ slug: 'image-gallery', label: 'Image gallery', component: ImageGallery },
	];

    return { tabs }
}