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
    faPortrait,
    faGraduationCap,
    faXmark
  } from '@fortawesome/free-solid-svg-icons';
  import Contact from '$lib/Programs/Contact.svelte';
  import { writable } from 'svelte/store';
  import { openWindows } from '$lib/Stores/OpenWindows';
  import Window from '$lib/Programs/unilities/window.svelte';
  import { format } from 'date-fns';

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
      <div class="flex flex-row h-full ">
        <div class="flex flex-col justify-center w-1/3" />
        <div class="w-1/3 flex flex-col justify-center">
          <div class="flex flex-row justify-center space-x-8">
            <div
              class="transition duration-200 hover:opacity-60 cursor-pointer"
              class:text-primary={$openWindows.find(
                (e) => e.title === 'Lander'
              )}
              on:click={() => {
                if ($openWindows.find((e) => e.title === 'Lander')) {
                  openWindows.update((e) =>
                    e.filter((e) => e.title !== 'Lander')
                  );
                } else {
                  openWindows.update((e) => [...e, { title: 'Lander' }]);
                }
              }}
            >
              <Fa icon={faPortrait} />
            </div>
            <div
              class="transition duration-200 hover:opacity-60 cursor-pointer"
              class:text-primary={$openWindows.find(
                (e) => e.title === 'Greetings'
              )}
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
              class="transition duration-200 hover:opacity-60 cursor-pointer"
              class:text-primary={$openWindows.find(
                (e) => e.title === 'Resume'
              )}
              on:click={() => {
                if ($openWindows.find((e) => e.title === 'Resume')) {
                  openWindows.update((e) =>
                    e.filter((e) => e.title !== 'Resume')
                  );
                } else {
                  openWindows.update((e) => [...e, { title: 'Resume' }]);
                }
              }}
            >
              <Fa icon={faGraduationCap} />
            </div>
            <div
              class="transition duration-200 hover:opacity-60 cursor-pointer"
              class:text-primary={$openWindows.find(
                (e) => e.title === 'Technologies'
              )}
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
              class="transition duration-200 hover:opacity-60 cursor-pointer"
              class:text-primary={$openWindows.find(
                (e) => e.title === 'Downloads'
              )}
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
              class="transition duration-200 hover:opacity-60 cursor-pointer "
              class:text-primary={$openWindows.find(
                (e) => e.title === 'Interests'
              )}
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
              class="transition duration-200 hover:opacity-60 cursor-pointer"
              class:text-primary={$openWindows.find(
                (e) => e.title === 'Contact'
              )}
              on:click={() => {
                if ($openWindows.find((e) => e.title === 'Contact')) {
                  openWindows.update((e) =>
                    e.filter((e) => e.title !== 'Contact')
                  );
                } else {
                  openWindows.update((e) => [...e, { title: 'Contact' }]);
                }
              }}
            >
              <Fa icon={faFileSignature} />
            </div>
          </div>
        </div>
        {#key new Date()}
          <div class="w-1/3 flex flex-row justify-end">
            <div class="w-1/3 bg-error bg-opacity-20 h-full flex flex-row">
              <div class="flex flex-col ml-2">
                <Text text={format(new Date(), 'HH:mm')} />
                <Text text={format(new Date(), 'dd.MM.yyyy')} />
              </div>
              <div
                class="ml-auto text-4xl flex flex-col justify-center cursor-pointer mr-2"
                on:click={() => openWindows.set([{ title: 'Desktop' }])}
              >
                <Fa icon={faXmark} />
              </div>
            </div>
          </div>
        {/key}
      </div>
    </Card>
  </div>
{/if}
