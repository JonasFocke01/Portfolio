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
  import Contact from '$lib/sites/Contact.svelte';
  import { logDOM } from '@testing-library/svelte';

  const dispatcher = createEventDispatcher();

  interface MenuEntry {
    name: string;
    path: string;
    selected: boolean;
  }

  export let currentWindow:
    | 'Lander'
    | 'Greetings'
    | 'Contact'
    | 'Downloads'
    | 'Interests'
    | 'Technologies'
    | 'Resume' = 'Lander';

  export let extended: boolean = false;
  export let animate = true;

  let tempAnimationhelper = true;
</script>

{#if tempAnimationhelper}
  <div transition:fly={{ duration: 1000, x: 200 }}>
    <Card>
      <div class="flex flex-col">
        {#if extended}
          <div
            class="m-2 transition duration-200 text-{currentWindow === 'Lander'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentWindow !== 'Lander'}
            class:cursor-pointer={currentWindow !== 'Lander'}
            on:click={() => {
              currentWindow = 'Lander';
              dispatcher('windowChanged');
            }}
          >
            <Fa icon={faPortrait} />
          </div>
          <div
            class="m-2 transition duration-200  text-{currentWindow ===
            'Greetings'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentWindow !== 'Greetings'}
            class:cursor-pointer={currentWindow !== 'Greetings'}
            on:click={() => {
              currentWindow = 'Greetings';
              dispatcher('windowChanged');
            }}
          >
            <Fa icon={faAlignLeft} />
          </div>
          <div
            class="m-2 transition duration-200 text-{currentWindow === 'Resume'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentWindow !== 'Resume'}
            class:cursor-pointer={currentWindow !== 'Resume'}
            on:click={() => {
              currentWindow = 'Resume';
              dispatcher('windowChanged');
            }}
          >
            <Fa icon={faTimeline} />
          </div>
          <div
            class="m-2 transition duration-200 text-{currentWindow ===
            'Technologies'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentWindow !== 'Technologies'}
            class:cursor-pointer={currentWindow !== 'Technologies'}
            on:click={() => {
              currentWindow = 'Technologies';
              dispatcher('windowChanged');
            }}
          >
            <Fa icon={faMicrochip} />
          </div>
          <div
            class="m-2 transition duration-200 text-{currentWindow ===
            'Downloads'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentWindow !== 'Downloads'}
            class:cursor-pointer={currentWindow !== 'Downloads'}
            on:click={() => {
              currentWindow = 'Downloads';
              dispatcher('windowChanged');
            }}
          >
            <Fa icon={faCloudArrowDown} />
          </div>
          <div
            class="m-2 transition duration-200 text-{currentWindow ===
            'Interests'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentWindow !== 'Interests'}
            class:cursor-pointer={currentWindow !== 'Interests'}
            on:click={() => {
              currentWindow = 'Interests';
              dispatcher('windowChanged');
            }}
          >
            <Fa icon={faGuitar} />
          </div>
          <div
            class="m-2 transition duration-200 text-{currentWindow === 'Contact'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentWindow !== 'Contact'}
            class:cursor-pointer={currentWindow !== 'Contact'}
            on:click={() => {
              currentWindow = 'Contact';
              dispatcher('windowChanged');
            }}
          >
            <Fa icon={faFileSignature} />
          </div>
        {:else}
          <div
            class="cursor-pointer m-2 hover:opacity-50 transition duration-200"
            on:click={() => (extended = true)}
          >
            <Fa icon={faBars} />
          </div>
        {/if}

        <div
          class="cursor-pointer m-2 transition duration-200 hover:opacity-50"
          on:click={() => {
            if (currentWindow !== 'Lander') {
              currentWindow = 'Lander';
            } else {
              currentWindow = 'Contact';
            }
            dispatcher('windowChanged');
          }}
        >
          <Fa
            class="{currentWindow !== 'Lander'
              ? 'rotate-180'
              : ''} transition duration-500"
            icon={faArrowDown}
          />
        </div>
      </div>
    </Card>
  </div>
{/if}
