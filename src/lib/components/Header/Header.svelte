<!-- @component
encapsules all the components in the header
 -->
<script lang="ts">
  import Menu from './Menu.svelte';
  import MediaQuery from '$lib/components/Wrapper/MediaQuery.svelte';
  import InplacePopup from '$lib/components/Wrapper/InplacePopup.svelte';

  let showMenu = false;
</script>

<header class="header h-20 shadow py-4 px-4 text-text bg-primary">
  <div class="header-content flex items-center flex-row">
    <div class="absolute">
      <MediaQuery query="desktop">
        <div class="text-2xl mt-10">
          <Menu orientation="horizontal" />
        </div>
      </MediaQuery>
      <MediaQuery query="mobile">
        <div on:click={() => (showMenu = !showMenu)} class="w-1/12">〰</div>
        {#if showMenu}
          <InplacePopup on:outsideClick={() => (showMenu = !showMenu)}>
            <Menu orientation="vertical" />
          </InplacePopup>
        {/if}
      </MediaQuery>
    </div>
  </div>
</header>
