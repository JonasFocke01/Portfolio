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

  const dispatcher = createEventDispatcher();

  interface MenuEntry {
    name: string;
    path: string;
    selected: boolean;
  }

  export const animate = true;

  let tempAnimationhelper = true;
</script>

{#if tempAnimationhelper && $openWindows && $openWindows.length > 0}
  <div transition:fly={{ duration: 1000, x: 200 }}>
    <Card>
      <div class="flex flex-row">
        <div
          class="m-2 transition duration-200 text-{$openWindows[0].title ===
          'Lander'
            ? 'primary'
            : 'text'}"
          class:hover:opacity-50={$openWindows[0].title !== 'Lander'}
          class:m-4={$openWindows.find((e) => e.title === 'Lander')}
          class:cursor-pointer={$openWindows[0].title !== 'Lander'}
          on:click={() => {
            !$openWindows.find((e) => e.title === 'Lander')
              ? openWindows.update((e) => [...e, { title: 'Lander' }])
              : openWindows.update((e) =>
                  e.filter((e) => e.title !== 'Lander')
                );
            dispatcher('windowChanged');
          }}
        >
          <Fa icon={faPortrait} />
        </div>
        <div
          class="m-2 transition duration-200  text-{$openWindows[0].title ===
          'Greetings'
            ? 'primary'
            : 'text'}"
          class:hover:opacity-50={$openWindows[0].title !== 'Greetings'}
          class:m-4={$openWindows.find((e) => e.title === 'Greetings')}
          class:cursor-pointer={$openWindows[0].title !== 'Greetings'}
          on:click={() => {
            !$openWindows.find((e) => e.title === 'Greetings')
              ? openWindows.update((e) => [...e, { title: 'Greetings' }])
              : openWindows.update((e) =>
                  e.filter((e) => e.title !== 'Greetings')
                );
            dispatcher('windowChanged');
          }}
        >
          <Fa icon={faAlignLeft} />
        </div>
        <div
          class="m-2 transition duration-200 text-{$openWindows[0].title ===
          'Resume'
            ? 'primary'
            : 'text'}"
          class:hover:opacity-50={$openWindows[0].title !== 'Resume'}
          class:m-4={$openWindows.find((e) => e.title === 'Resume')}
          class:cursor-pointer={$openWindows[0].title !== 'Resume'}
          on:click={() => {
            !$openWindows.find((e) => e.title === 'Resume')
              ? openWindows.update((e) => [...e, { title: 'Resume' }])
              : openWindows.update((e) =>
                  e.filter((e) => e.title !== 'Resume')
                );
            dispatcher('windowChanged');
          }}
        >
          <Fa icon={faTimeline} />
        </div>
        <div
          class="m-2 transition duration-200 text-{$openWindows[0].title ===
          'Technologies'
            ? 'primary'
            : 'text'}"
          class:hover:opacity-50={$openWindows[0].title !== 'Technologies'}
          class:m-4={$openWindows.find((e) => e.title === 'Technologies')}
          class:cursor-pointer={$openWindows[0].title !== 'Technologies'}
          on:click={() => {
            !$openWindows.find((e) => e.title === 'Technologies')
              ? openWindows.update((e) => [...e, { title: 'Technologies' }])
              : openWindows.update((e) =>
                  e.filter((e) => e.title !== 'Technologies')
                );
            dispatcher('windowChanged');
          }}
        >
          <Fa icon={faMicrochip} />
        </div>
        <div
          class="m-2 transition duration-200 text-{$openWindows[0].title ===
          'Downloads'
            ? 'primary'
            : 'text'}"
          class:hover:opacity-50={$openWindows[0].title !== 'Downloads'}
          class:m-4={$openWindows.find((e) => e.title === 'Downloads')}
          class:cursor-pointer={$openWindows[0].title !== 'Downloads'}
          on:click={() => {
            !$openWindows.find((e) => e.title === 'Downloads')
              ? openWindows.update((e) => [...e, { title: 'Downloads' }])
              : openWindows.update((e) =>
                  e.filter((e) => e.title !== 'Downloads')
                );
            dispatcher('windowChanged');
          }}
        >
          <Fa icon={faCloudArrowDown} />
        </div>
        <div
          class="m-2 transition duration-200 text-{$openWindows[0].title ===
          'Interests'
            ? 'primary'
            : 'text'}"
          class:hover:opacity-50={$openWindows[0].title !== 'Interests'}
          class:m-4={$openWindows.find((e) => e.title === 'Interests')}
          class:cursor-pointer={$openWindows[0].title !== 'Interests'}
          on:click={() => {
            !$openWindows.find((e) => e.title === 'Interests')
              ? openWindows.update((e) => [...e, { title: 'Interests' }])
              : openWindows.update((e) =>
                  e.filter((e) => e.title !== 'Interests')
                );
            dispatcher('windowChanged');
          }}
        >
          <Fa icon={faGuitar} />
        </div>
        <div
          class="m-2 transition duration-200 text-{$openWindows[0].title ===
          'Contact'
            ? 'primary'
            : 'text'}"
          class:hover:opacity-50={$openWindows[0].title !== 'Contact'}
          class:m-4={$openWindows.find((e) => e.title === 'Contact')}
          class:cursor-pointer={$openWindows[0].title !== 'Contact'}
          on:click={() => {
            !$openWindows.find((e) => e.title === 'Contact')
              ? openWindows.update((e) => [...e, { title: 'Contact' }])
              : openWindows.update((e) =>
                  e.filter((e) => e.title !== 'Contact')
                );
            dispatcher('windowChanged');
          }}
        >
          <Fa icon={faFileSignature} />
        </div>
      </div>
    </Card>
  </div>
{/if}
