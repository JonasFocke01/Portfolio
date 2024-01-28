<script lang="ts">
  import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
  import AutoDm from './AutoDm.svelte';
  import Beresa from './Beresa.svelte';
  import ConTerra from './ConTerra.svelte';
  import Study from './Study.svelte';
  import Abitur from './Abitur.svelte';
  import Upflat from './Upflat.svelte';
  import { addOrRemoveWindow } from '$lib/Stores/OpenWindows';
  import Fa from 'svelte-fa';
  import { faCheck } from '@fortawesome/free-solid-svg-icons/index.es';

  let displayHint: boolean = true;

  let items = [
    {
      itemid: 'UPFLAT !- STF',
      itemtext: 'Anstellung bei der UPFLAT !- STF',
      component: Upflat,
      visited: false
    },
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
