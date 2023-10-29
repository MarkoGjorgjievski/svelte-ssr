<script lang="ts">
  export let tabs: { slug: string; label: string }[] = [];

  $: activeTab = tabs[0].slug;
</script>

<div class="border-b border-base-200">
  <div class="flex space-x-2" aria-label="Tabs" role="tablist">
    {#each tabs as tab}
      <!-- button will become a link -->
      <button
        class:active={activeTab === tab.slug}
        class="py-4 px-1 inline-flex items-center gap-2 border-b-[3px] text-sm whitespace-nowrap border-transparent text-gray-500 hover:text-primary"
        id="tabs-with-underline-item-{tab.slug}"
        aria-controls="tabs-with-underline-{tab.slug}"
        role="tab"
        on:click={() => (activeTab = tab.slug)}
      >
        {tab.label}
      </button>
    {/each}
  </div>
</div>

<style>
  .active {
    @apply font-semibold border-primary text-primary;
  }
</style>
