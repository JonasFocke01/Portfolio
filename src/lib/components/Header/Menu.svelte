<!-- @component
a basic menu with basic animations

**orientation**
* 'horizontal' | 'vertical'
* default: horizontal
* sets the orientation of the menu

**menuEntrys**
* Array<{ name: string, path: string, selected: boolean }>
* default: { name: 'Home', path: '/', selected: true },{  name: 'DEVComponents',  path: '/devComponents',  selected: false}
* sets the accessible site from this menu
 -->
<script lang="ts">
  import Downloads from '$lib/Programs/Downloads.svelte';
  import Resume from '$lib/Programs/Resume.svelte';
  import Interests from '$lib/Programs/Interests.svelte';
  import Technologies from '$lib/Programs/Technologies.svelte';
  import Lander from '$lib/Programs/Lander.svelte';
  import Greeting from '$lib/Programs/Greeting.svelte';
  import Text from '$lib/components/Wrapper/Text.svelte';
  import Header from '$lib/components/Header/Header.svelte';
  import { fly } from 'svelte/transition';
  import Card from '$lib/components/Wrapper/Card.svelte';
  import { createEventDispatcher } from 'svelte';
  import Fa from 'svelte-fa';
  import {
    faAlignLeft,
    faArrowDown,
    faBars,
    faFileSignature,
    faGuitar,
    faCloudArrowDown,
    faMicrochip,
    faTimeline,
    faPortrait
  } from '@fortawesome/free-solid-svg-icons';
  import Contact from '$lib/Programs/Contact.svelte';
  import { writable } from 'svelte/store';
  import { openWindows } from '$lib/Stores/OpenWindows';
  import Window from '$lib/Programs/unilities/window.svelte';

  const dispatcher = createEventDispatcher();

  interface MenuEntry {
    name: string;
    path: string;
    selected: boolean;
  }
</script>

{#if $openWindows && $openWindows.length > 0}
  <div class="z-50">
    <Card>
      <div class="flex flex-row">
        <div
          class="m-2 transition duration-200 cursor-pointer"
          class:hover:opacity-50={$openWindows[0].title !== 'Lander'}
          class:m-4={$openWindows.find((e) => e.title === 'Lander')}
          class:text-primary={$openWindows[0].title === 'Lander'}
          class:text-text={$openWindows[0].title !== 'Lander'}
          on:click={() => {
            if ($openWindows.find((e) => e.title === 'Lander')) {
              openWindows.update((e) => e.filter((e) => e.title !== 'Lander'));
            } else {
              openWindows.update((e) => [...e, { title: 'Lander' }]);
            }
          }}
        >
          <Fa icon={faPortrait} />
        </div>
        <div
          class="m-2 transition duration-200 cursor-pointer"
          class:hover:opacity-50={$openWindows[0].title !== 'Greetings'}
          class:m-4={$openWindows.find((e) => e.title === 'Greetings')}
          class:text-primary={$openWindows[0].title === 'Greetings'}
          class:text-text={$openWindows[0].title !== 'Greetings'}
          on:click={() => {
            if ($openWindows.find((e) => e.title === 'Greetings')) {
              openWindows.update((e) =>
                e.filter((e) => e.title !== 'Greetings')
              );
            } else {
              openWindows.update((e) => [...e, { title: 'Greetings' }]);
            }
          }}
        >
          <Fa icon={faAlignLeft} />
        </div>
        <div
          class="m-2 transition duration-200 cursor-pointer"
          class:hover:opacity-50={$openWindows[0].title !== 'Resume'}
          class:m-4={$openWindows.find((e) => e.title === 'Resume')}
          class:text-primary={$openWindows[0].title === 'Resume'}
          class:text-text={$openWindows[0].title !== 'Resume'}
          on:click={() => {
            if ($openWindows.find((e) => e.title === 'Resume')) {
              openWindows.update((e) => e.filter((e) => e.title !== 'Resume'));
            } else {
              openWindows.update((e) => [...e, { title: 'Resume' }]);
            }
          }}
        >
          <Fa icon={faTimeline} />
        </div>
        <div
          class="m-2 transition duration-200 cursor-pointer"
          class:hover:opacity-50={$openWindows[0].title !== 'Technologies'}
          class:m-4={$openWindows.find((e) => e.title === 'Technologies')}
          class:text-primary={$openWindows[0].title === 'Technologies'}
          class:text-text={$openWindows[0].title !== 'Technologies'}
          on:click={() => {
            if ($openWindows.find((e) => e.title === 'Technologies')) {
              openWindows.update((e) =>
                e.filter((e) => e.title !== 'Technologies')
              );
            } else {
              openWindows.update((e) => [...e, { title: 'Technologies' }]);
            }
          }}
        >
          <Fa icon={faMicrochip} />
        </div>
        <div
          class="m-2 transition duration-200 cursor-pointer"
          class:hover:opacity-50={$openWindows[0].title !== 'Downloads'}
          class:m-4={$openWindows.find((e) => e.title === 'Downloads')}
          class:text-primary={$openWindows[0].title === 'Downloads'}
          class:text-text={$openWindows[0].title !== 'Downloads'}
          on:click={() => {
            if ($openWindows.find((e) => e.title === 'Downloads')) {
              openWindows.update((e) =>
                e.filter((e) => e.title !== 'Downloads')
              );
            } else {
              openWindows.update((e) => [...e, { title: 'Downloads' }]);
            }
          }}
        >
          <Fa icon={faCloudArrowDown} />
        </div>
        <div
          class="m-2 transition duration-200 cursor-pointer"
          class:hover:opacity-50={$openWindows[0].title !== 'Interests'}
          class:m-4={$openWindows.find((e) => e.title === 'Interests')}
          class:text-primary={$openWindows[0].title === 'Interests'}
          class:text-text={$openWindows[0].title !== 'Interests'}
          on:click={() => {
            if ($openWindows.find((e) => e.title === 'Interests')) {
              openWindows.update((e) =>
                e.filter((e) => e.title !== 'Interests')
              );
            } else {
              openWindows.update((e) => [...e, { title: 'Interests' }]);
            }
          }}
        >
          <Fa icon={faGuitar} />
        </div>
        <div
          class="m-2 transition duration-200 cursor-pointer"
          class:hover:opacity-50={$openWindows[0].title !== 'Contact'}
          class:m-4={$openWindows.find((e) => e.title === 'Contact')}
          class:text-primary={$openWindows[0].title === 'Contact'}
          class:text-text={$openWindows[0].title !== 'Contact'}
          on:click={() => {
            if ($openWindows.find((e) => e.title === 'Contact')) {
              openWindows.update((e) => e.filter((e) => e.title !== 'Contact'));
            } else {
              openWindows.update((e) => [...e, { title: 'Contact' }]);
            }
          }}
        >
          <Fa icon={faFileSignature} />
        </div>
      </div>
    </Card>
  </div>
{/if}
