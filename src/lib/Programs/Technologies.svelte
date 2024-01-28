<script lang="ts">
  import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
  import Button from '@jonas_focke/svelcon/Input/Button.svelte';
  import WordCloud from 'svelte-d3-cloud';

  let chosenText = '___________________________';

  let buttons: Array<string> = [
    'in Meinem Job damit arbeite(te)',
    'privat damit bastle',
    'damit in der Vergangenheit zu tun hatte'
  ];
</script>

<div class="m-2">
  <Text
    text="Ich arbeite aktuell mit mit mehreren Technologien und Programmier!-Sprachen."
  />
  <div class="flex flex-row justify-evenly mt-4 space-x-2">
    {#each buttons as button}
      <Button
        text={{ text: button }}
        additionalClasses="px-2"
        on:click={() => {
          chosenText = button + ': ';
        }}
      />
    {/each}
  </div>

  <div class="mt-4">
    <div class="flex flex-row">
      <Text text="Diese Dinge kenne ich, weil ich" />
      <div class="ml-2">
        {#key chosenText}
          <Text typewriter={{ enable: true, speed: 0.3 }} text={chosenText} />
        {/key}
      </div>
    </div>
  </div>
  <div class="mt-4">
    {#if chosenText === 'in Meinem Job damit arbeite(te): '}
      <WordCloud
        words={[
          { text: 'HTML', count: 90 },
          { text: 'CSS', count: 80 },
          { text: 'Javascript', count: 70 },
          { text: 'Typescript', count: 120 },
          { text: 'PHP', count: 90 },
          { text: 'Svelte', count: 130 },
          { text: 'TailwindCSS', count: 75 },
          { text: 'VueJS', count: 95 },
          { text: 'InertiaJS', count: 70 },
          { text: 'Laravel', count: 80 },
        ]}
        backgroundColor="secondary"
        minRotate={-10}
        maxRotate={20}
      />
    {:else if chosenText === 'privat damit bastle: '}
      <WordCloud
        words={[
          { text: 'CSS', count: 80 },
          { text: 'Typescript', count: 120 },
          { text: 'Svelte', count: 120 },
          { text: 'TailwindCSS', count: 75 },
          { text: 'Linux', count: 90 },
          { text: 'Netlify', count: 70 },
          { text: 'Rust', count: 70 }
        ]}
        backgroundColor="secondary"
        minRotate={-10}
        maxRotate={20}
      />
    {:else if chosenText === 'damit in der Vergangenheit zu tun hatte: '}
      <WordCloud
        words={[
          { text: 'Java', count: 90 },
          { text: 'Python', count: 85 },
          { text: 'C', count: 70 },
          { text: 'C++', count: 80 },
          { text: 'C#', count: 90 },
          { text: 'Firebase', count: 80 },
          { text: 'Active Directory', count: 85 },
          { text: 'Selenium', count: 105 }
        ]}
        backgroundColor="secondary"
        minRotate={-10}
        maxRotate={20}
      />
    {/if}
  </div>
</div>
