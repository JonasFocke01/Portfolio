<script lang="ts">
  import Menu from '$lib/components/Header/Menu.svelte';
  import Window from '$lib/Programs/unilities/window.svelte';
  import { openWindows } from '$lib/Stores/OpenWindows';

  const wheel = (node) => {
    let scrollable = false;

    const handler = (e) => {
      if (!scrollable) e.preventDefault();
    };

    node.addEventListener('wheel', handler, { passive: false });

    return {
      update(options) {
        scrollable = options.scrollable;
      },
      destroy() {
        node.removeEventListener('wheel', handler, { passive: false });
      }
    };
  };
</script>

<svelte:window use:wheel />

<!-- <Menu /> -->
<div class="h-full w-full flex flex-col justify-end">
  <Menu />
</div>

<!-- Render windows -->
{#each $openWindows as [component, props] (props.id)}
  <Window title={props.title} id={props.id}>
    <svelte:component this={component} />
  </Window>
{/each}
