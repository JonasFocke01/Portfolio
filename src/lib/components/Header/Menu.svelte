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

  const dispatcher = createEventDispatcher();

  interface MenuEntry {
    name: string;
    path: string;
    selected: boolean;
  }

  export let currentPosition:
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
            class="m-2 transition duration-200 text-{currentPosition ===
            'Lander'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentPosition !== 'Lander'}
            class:cursor-pointer={currentPosition !== 'Lander'}
            on:click={() => {
              currentPosition = 'Lander';
              dispatcher('positionChanged');
            }}
          >
            <Fa icon={faPortrait} />
          </div>
          <div
            class="m-2 transition duration-200  text-{currentPosition ===
            'Greetings'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentPosition !== 'Greetings'}
            class:cursor-pointer={currentPosition !== 'Greetings'}
            on:click={() => {
              currentPosition = 'Greetings';
              dispatcher('positionChanged');
            }}
          >
            <Fa icon={faAlignLeft} />
          </div>
          <div
            class="m-2 transition duration-200 text-{currentPosition ===
            'Resume'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentPosition !== 'Resume'}
            class:cursor-pointer={currentPosition !== 'Resume'}
            on:click={() => {
              currentPosition = 'Resume';
              dispatcher('positionChanged');
            }}
          >
            <Fa icon={faTimeline} />
          </div>
          <div
            class="m-2 transition duration-200 text-{currentPosition ===
            'Technologies'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentPosition !== 'Technologies'}
            class:cursor-pointer={currentPosition !== 'Technologies'}
            on:click={() => {
              currentPosition = 'Technologies';
              dispatcher('positionChanged');
            }}
          >
            <Fa icon={faMicrochip} />
          </div>
          <div
            class="m-2 transition duration-200 text-{currentPosition ===
            'Downloads'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentPosition !== 'Downloads'}
            class:cursor-pointer={currentPosition !== 'Downloads'}
            on:click={() => {
              currentPosition = 'Downloads';
              dispatcher('positionChanged');
            }}
          >
            <Fa icon={faCloudArrowDown} />
          </div>
          <div
            class="m-2 transition duration-200 text-{currentPosition ===
            'Interests'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentPosition !== 'Interests'}
            class:cursor-pointer={currentPosition !== 'Interests'}
            on:click={() => {
              currentPosition = 'Interests';
              dispatcher('positionChanged');
            }}
          >
            <Fa icon={faGuitar} />
          </div>
          <div
            class="m-2 transition duration-200 text-{currentPosition ===
            'Contact'
              ? 'primary'
              : 'text'}"
            class:hover:opacity-50={currentPosition !== 'Contact'}
            class:cursor-pointer={currentPosition !== 'Contact'}
            on:click={() => {
              currentPosition = 'Contact';
              dispatcher('positionChanged');
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
            if (currentPosition !== 'Lander') {
              currentPosition = 'Lander';
            } else {
              currentPosition = 'Contact';
            }
            dispatcher('positionChanged');
          }}
        >
          <Fa
            class="{currentPosition !== 'Lander'
              ? 'rotate-180'
              : ''} transition duration-500"
            icon={faArrowDown}
          />
        </div>
      </div>
    </Card>
  </div>
{/if}
