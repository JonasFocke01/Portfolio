<script lang="ts">
  import Text from '$lib/components/Wrapper/Text.svelte';
  import { fly, fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import MediaQuery from '$lib/components/Wrapper/MediaQuery.svelte';
  import NormalButton from '$lib/components/Input/NormalButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import Window from '../unilities/window.svelte';
  import AutoDm from './AutoDm.svelte';
  import Beresa from './Beresa.svelte';
  import ConTerra from './ConTerra.svelte';
  import Study from './Study.svelte';
  import Abitur from './Abitur.svelte';
  import { writable } from 'svelte/store';
  import { openWindows, addOrRemoveWindow } from '$lib/Stores/OpenWindows';
  import SmallButton from '$lib/components/Input/SmallButton.svelte';

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
            <SmallButton label="Klick mich!" />
          </div>
        </div>
      {/if}
      <Text
        text={item.itemtext}
        effect={[
          'bold',
          item.visited ? 'strikethrough' : 'underline',
          item.visited ? 'italic' : null
        ]}
      />
    </div>
  {/each}
</div>
