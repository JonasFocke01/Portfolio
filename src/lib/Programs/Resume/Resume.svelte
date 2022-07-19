<script lang="ts">
  import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
  import { fly, fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import MediaQuery from '@jonas_focke/svelcon/Wrapper/MediaQuery.svelte';
  import Button from '@jonas_focke/svelcon/Input/Button.svelte';
  import { createEventDispatcher } from 'svelte';
  import Window from '../unilities/window.svelte';
  import AutoDm from './AutoDm.svelte';
  import Beresa from './Beresa.svelte';
  import ConTerra from './ConTerra.svelte';
  import Study from './Study.svelte';
  import Abitur from './Abitur.svelte';
  import { writable } from 'svelte/store';
  import { openWindows, addOrRemoveWindow } from '$lib/Stores/OpenWindows';
  import Fa from 'svelte-fa';
  import { faCheck } from '@fortawesome/free-solid-svg-icons';

  const dispatcher = createEventDispatcher();
  let displayHint: boolean = true;

  let items = [
    {
      itemid: 'AutoDm',
      itemtext: 'Anstellung bei der auto dm',
      component: AutoDm,
      visited: false
    },
    {
      itemid: 'Beresa',
      itemtext: 'Ausbildung bei der beresa',
      component: Beresa,
      visited: false
    },
    {
      itemid: 'ConTerra',
      itemtext: 'Praktikum bei con terra',
      component: ConTerra,
      visited: false
    },
    {
      itemid: 'Study',
      itemtext: 'Studium an der WWU',
      component: Study,
      visited: false
    },
    {
      itemid: 'Abitur',
      itemtext: 'Abitur an der JCS',
      component: Abitur,
      visited: false
    }
  ];
</script>

<div class="m-2">
  {#each items as item}
    <div
      class="mt-2 cursor-pointer"
      on:click={() => {
        items.find((e) => e.itemid === item.itemid).visited = true;
        displayHint = false;
        addOrRemoveWindow(item.component, {
          title: item.itemtext,
          id: item.itemid
        });
        items = items;
      }}
    >
      {#if item.itemid === 'AutoDm' && displayHint}
        <div class="absolute" out:fly>
          <div class="ml-56 -mt-2 rotate-12">
            <Button
              text={{ text: 'Klick mich!' }}
              additionalClasses="py-0 px-0"
            />
          </div>
        </div>
      {/if}
      <div class="flex flex-row">
        <Text
          text={item.visited ? `*#${item.itemtext}#*` : `*_${item.itemtext}_*`}
        />
        {#if item.visited}
          <div class="ml-1 mt-1 text-success">
            <Fa icon={faCheck} />
          </div>
        {/if}
      </div>
    </div>
  {/each}
</div>
