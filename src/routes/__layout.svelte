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

<div
  class="w-full h-screen bg-wallpaper bg-repeat, bg-cover bg-center overflow-hidden"
>
  <slot />
</div>
