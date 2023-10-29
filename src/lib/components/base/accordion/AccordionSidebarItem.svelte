<script lang="ts">
  import AccordionIcons from "./AccordionIcons.svelte";

  export let icon: string = "";
  export let label: string = "";
  export let hasChildren: boolean = false;
</script>

<a
  class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
  href="javascript:;"
>
  <i class={icon} />
  {label}
  {#if hasChildren}
    <AccordionIcons />
  {/if}
</a>
