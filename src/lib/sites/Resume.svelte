<script lang="ts">
  import Text from '$lib/components/Wrapper/Text.svelte';
  import InplacePopup from '$lib/components/Wrapper/InplacePopup.svelte';
  import List from '$lib/components/Wrapper/List.svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let tempAnimationHelper = false;

  onMount(() => {
    tempAnimationHelper = true;
  });

  let InFlyOptions = {
    duration: 500,
    y: 100
  };
</script>

<div class="flex flex-row justify-center">
  <Text text="Mein Lebenslauf" size="large" />
</div>
{#if tempAnimationHelper}
  <div class="w-full flex flex-col" in:fly={InFlyOptions}>
    <div class="w-3/4 flex flex-row lg:flex-row">
      <div class="w-1/2 m-8">
        <List
          text="Meine Ausbildung"
          filterable
          selectable
          button
          buttontext="Detials"
          inputItemsKeyValue={[
            { text: 'Ausbildung', value: '2019-2022' },
            { text: 'Studium', value: '2018-2019' },
            { text: 'Abitur', value: '2015-2018' },
            { text: 'Schule', value: '2009-2015' }
          ]}
        />
      </div>
      <div class="w-1/2 m-8">
        <List
          text="Meine Anstellungen"
          filterable
          selectable
          button
          buttontext="Detials"
          inputItemsKeyValue={[
            { text: 'auto dm', value: '2022' },
            { text: 'Beresa GmbH & Co. KG', value: '2019-2022' }
          ]}
        />
      </div>
    </div>
    <div class="w-2/3 flex flex-row lg:flex-row">
      <div class="w-1/2 m-8">
        <List
          text="Meine Praktika"
          filterable
          selectable
          button
          buttontext="Detials"
          inputItemsKeyValue={[
            { text: 'con terra', value: '2019' },
            { text: 'Thalia Münster', value: '2016' },
            { text: 'Bezirksregierung Münster', value: '2014' }
          ]}
        />
      </div>

      <div class="w-1/2 m-8">
        <List
          text="Sonstige Qualifikationen"
          filterable
          selectable
          button
          buttontext="Detials"
          inputItemsKeyValue={[
            {
              text: 'Ehemaligenverein der Sek-II Schule',
              value: 'seit Schulaustritt'
            },
            { text: 'Führerschein Klasse B', value: '2017' },
            { text: 'Deutch', value: 'Muttersprache' },
            { text: 'Englisch', value: 'Sehr gut in Wort und Schrift' }
          ]}
        />
      </div>
    </div>
  </div>
{/if}
