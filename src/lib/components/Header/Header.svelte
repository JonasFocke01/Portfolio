<!-- @component
encapsules all the components in the header
 -->
<script lang="ts">
  import Menu from './Menu.svelte';
  import MediaQuery from '$lib/components/Wrapper/MediaQuery.svelte';
  import InplacePopup from '$lib/components/Wrapper/InplacePopup.svelte';

  let menuEntrys = [
    { name: 'Lebenslauf', path: '/', selected: false },
    { name: 'Technologien', path: '#technologies', selected: false },
    { name: 'Interessen', path: '#interests', selected: false },
    { name: 'Kontakt + Downloads', path: '#Sekundarstufe I', selected: false }
  ];
  let showMenu = false;
</script>

<header class="header h-20 shadow py-4 px-4 text-text bg-primary">
  <div class="header-content flex items-center flex-row">
    <div class="absolute">
      <MediaQuery query="desktop">
        <div class="text-2xl mt-10">
          <Menu orientation="horizontal" {menuEntrys} />
        </div>
      </MediaQuery>
      <MediaQuery query="mobile">
        <div on:click={() => (showMenu = !showMenu)} class="w-1/12">
          <i class="fa fa-bars text-accent text-4xl" />
        </div>
        {#if showMenu}
          <InplacePopup on:outsideClick={() => (showMenu = !showMenu)}>
            <Menu orientation="vertical" {menuEntrys} />
          </InplacePopup>
        {/if}
      </MediaQuery>
    </div>
    <div class="ml-auto">
      <a href="https://github.com/JonasFocke01/Portfolio" target="_blank">
        <i class="fa fa-github text-accent text-4xl" />
      </a>
    </div>
  </div>
</header>
