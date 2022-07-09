<script lang="ts">
  import Text from '$lib/components/Wrapper/Text.svelte';
  import InplacePopup from '$lib/components/Wrapper/InplacePopup.svelte';
  import { createEventDispatcher } from 'svelte/internal';

  export let itemtext: string = '';

  let eventDispatcher = createEventDispatcher();
  let showPopup = false;
</script>

<div
  on:click={() => {
    showPopup = !showPopup;
    eventDispatcher('clicked');
  }}
  class="cursor-pointer hover:opacity-60 transition duration-300 ease-in-out"
>
  <Text text={itemtext} size="large" />
</div>
{#if showPopup}
  <InplacePopup on:outsideClick={() => (showPopup = !showPopup)}>
    <slot name="headding" />
    <div class="mt-4">
      <slot name="content" />
    </div>
  </InplacePopup>
{/if}
