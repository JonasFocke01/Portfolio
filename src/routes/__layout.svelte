<script lang="ts">
  import '../app.css';
  import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<SvelteToast />

<div
  class="w-full h-screen bg-wallpaper bg-repeat, bg-cover bg-center overflow-hidden"
>
  <slot />
</div>
