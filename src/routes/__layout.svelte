<script lang="ts">
  import '../app.css';
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import Header from '$lib/components/Header/Header.svelte';
  import { fly } from 'svelte/transition';
  import Menu from '$lib/components/Header/Menu.svelte';

  let flyOptions = {
    duration: 500,
    y: 100
  };
</script>

<SvelteToast />

<!-- {#if showNavbar}
  <div transition:fly={flyOptions} class="">
    <Header />
  </div>
{/if} -->
<div class="w-full overflow-y-hidden">
  <slot />
</div>
