<!-- @component
a basic menu with basic animations

**orientation**
* 'horizontal' | 'vertical'
* default: horizontal
* sets the orientation of the menu

**animate**
* boolean
* default: true
* sets whether the menu should animate

**menuEntrys**
* Array<{ name: string, path: string, selected: boolean }>
* default: { name: 'Home', path: '/', selected: true },{  name: 'DEVComponents',  path: '/devComponents',  selected: false}
* sets the accessible site from this menu
 -->
<script lang="ts">
  import { fly } from 'svelte/transition';

  interface MenuEntry {
    name: string;
    path: string;
    selected: boolean;
  }

  export let menuEntrys: Array<MenuEntry> = [
    { name: 'Home', path: '/', selected: true },
    {
      name: 'DEVComponents',
      path: '/devComponents',
      selected: false
    }
  ];

  function selectItem(item: MenuEntry) {
    menuEntrys.forEach((entry) => {
      entry.selected = entry.name === item.name;
    });
    menuEntrys = menuEntrys;
  }

  export let orientation: 'horizontal' | 'vertical';
  export let animate = true;

  let tempAnimationhelper = true;
</script>

<ul
  class="flex text-text text-center"
  class:flex-row={orientation === 'horizontal'}
  class:flex-col={orientation === 'vertical'}
>
  {#if tempAnimationhelper}
    {#each menuEntrys as item}
      <li
        class="hover:text-accent transition duration-200 rounded-lg"
        class:hover:-mt-px={animate}
        class:hover:bg-primary={animate}
        class:hover:bg-opacity-20={animate}
        class:bg-primary={item.selected}
        class:bg-opacity-10={item.selected}
        in:fly={{
          x: orientation === 'vertical' ? -200 : 0,
          y: orientation === 'horizontal' ? -200 : 0,
          duration: Math.random() * (800 - 300 + 1) + 300
        }}
      >
        <a
          href={item.path}
          class="hover:text-opacity-60 mx-3"
          on:click={() => selectItem(item)}
          sveltekit:prefetch
          >{item.name}
        </a>
      </li>
    {/each}
  {/if}
</ul>
