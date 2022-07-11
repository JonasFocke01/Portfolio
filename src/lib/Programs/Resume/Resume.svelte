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

  const dispatcher = createEventDispatcher();
  let displayHint: boolean = true;

  const items = [
    {
      itemid: 'AutoDm',
      itemtext: 'Anstellung bei der auto dm',
      component: AutoDm
    },
    {
      itemid: 'Beresa',
      itemtext: 'Ausbildung bei der beresa',
      component: Beresa
    },
    {
      itemid: 'ConTerra',
      itemtext: 'Praktikum bei con terra',
      component: ConTerra
    },
    {
      itemid: 'Study',
      itemtext: 'Studium an der WWU',
      component: Study
    },
    {
      itemid: 'Abitur',
      itemtext: 'Abitur an der JCS',
      component: Abitur
    }
  ];
</script>

<div class="bg-secondary">
  <div class="mt-4">
    {#if displayHint}
      <div
        class="absolute -mt-4"
        out:fade={{ duration: 500, easing: cubicInOut }}
      >
        <Text text="Klick mich" size="small" />
      </div>
    {/if}
  </div>
  {#each items as item}
    <div
      on:click={() => {
        displayHint = false;
        addOrRemoveWindow(item.component, {
          title: item.itemtext,
          id: item.itemid
        });
      }}
    >
      <Text text={item.itemtext} />
    </div>
  {/each}
</div>
