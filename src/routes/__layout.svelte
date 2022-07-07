<script lang="ts">
  import '../app.css';
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import Header from '$lib/components/Header/Header.svelte';
</script>

<SvelteToast />

<Header />
<div class="w-full absolute bg-surface h-screen">
  <slot />
</div>
