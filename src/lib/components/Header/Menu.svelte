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
  import Greetings from '$lib/Programs/Greetings.svelte';
  import Text from '$lib/components/Wrapper/Text.svelte';
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
  import { openWindows } from '$lib/Stores/OpenWindows';
  import { format } from 'date-fns';
  import Checkbox from '../Input/Checkbox.svelte';

  const dispatcher = createEventDispatcher();

  const menuEntrys = [
    {
      name: 'Lander',
      title: 'Mein Bild',
      icon: faPortrait,
      component: Lander
    },
    {
      name: 'Greetings',
      title: 'Begrüßung',
      icon: faAlignLeft,
      component: Greetings
    },
    {
      name: 'Resume',
      title: 'Lebenslauf',
      icon: faGraduationCap,
      component: Resume
    },
    {
      name: 'Technologies',
      title: 'Technologien',
      icon: faMicrochip,
      component: Technologies
    },
    {
      name: 'Downloads',
      title: 'Downloads',
      icon: faCloudArrowDown,
      component: Downloads
    },
    {
      name: 'Interests',
      title: 'Interessen',
      icon: faGuitar,
      component: Interests
    },
    {
      name: 'Contact',
      title: 'Kontakt',
      icon: faFileSignature,
      component: Contact
    }
  ];
</script>

{#if $openWindows}
  <div class="z-50">
    <Card>
      <div class="flex flex-row h-full ">
        <div class="flex flex-col justify-center w-1/3" />
        <div class="w-1/3 flex flex-col justify-center">
          <div class="flex flex-row justify-center space-x-8">
            {#each menuEntrys as entry}
              <div
                class="transition duration-200 hover:opacity-60 cursor-pointer"
                class:text-primary={$openWindows.find(
                  (e) => e[0]?.name.indexOf(entry.name) > 0
                )}
                on:click={() => {
                  if (
                    !$openWindows.find(
                      (e) => e[0]?.name.indexOf(entry.name) > 0
                    )
                  ) {
                    openWindows.update((e) => [
                      ...e,
                      [entry.component, { title: entry.title, id: entry.name }]
                    ]);
                  } else {
                    openWindows.update((e) =>
                      e.filter((e) => e[0]?.name.indexOf(entry.name) === -1)
                    );
                  }
                }}
              >
                <Fa icon={entry.icon} />
              </div>
            {/each}
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
                on:click={() => openWindows.set([])}
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
