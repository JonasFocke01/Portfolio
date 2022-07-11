<script lang="ts">
  import List from '$lib/components/Wrapper/List.svelte';
  import Text from '$lib/components/Wrapper/Text.svelte';
  import { tweened } from 'svelte/motion';
  import SmallButton from '$lib/components/Input/SmallButton.svelte';
  import Typewriter from 'svelte-typewriter';
  import { onMount } from 'svelte';
  import { elasticInOut } from 'svelte/easing';
  import WordCloud from 'svelte-d3-cloud';

  let chosenText = '___________________________';

  let buttons: Array<string> = [
    'in Meinem Job damit arbeite',
    'privat damit bastle',
    'damit in der Vergangenheit zu tun hatte'
  ];
</script>

<div class="m-2">
  <Text
    text="Ich arbeite aktuell mit mit mehreren Technologien und Programmier-Sprachen."
  />
  <div class="flex flex-row justify-evenly mt-4">
    {#each buttons as button}
      <SmallButton
        label={button}
        additionalClasses="m-2"
        on:click={() => {
          chosenText = button + ': ';
        }}
      />
    {/each}
  </div>

  <div class="mt-4">
    <div class="flex flex-row">
      <Text text="Diese Dinge kenne ich, weil ich" />
      <Typewriter>
        <div class="ml-2">
          <Text text={chosenText} />
        </div>
      </Typewriter>
    </div>
  </div>
  <div class="mt-4">
    {#if chosenText === 'in Meinem Job damit arbeite: '}
      <WordCloud
        words={[
          { text: 'HTML', count: 90 },
          { text: 'CSS', count: 80 },
          { text: 'Javascript', count: 70 },
          { text: 'Typescript', count: 120 },
          { text: 'jQuery', count: 70 },
          { text: 'MariaDB (mySQL)', count: 85 },
          { text: 'PHP', count: 90 },
          { text: 'REST', count: 100 },
          { text: 'Svelte', count: 130 },
          { text: 'Git', count: 130 },
          { text: 'NPM', count: 80 },
          { text: 'Bitbucket', count: 70 },
          { text: 'Jira', count: 100 },
          { text: 'MS Office', count: 60 },
          { text: 'TailwindCSS', count: 75 },
          { text: 'Scrum', count: 100 }
        ]}
        backgroundColor="secondary"
        minRotate={-10}
        maxRotate={20}
      />
    {:else if chosenText === 'privat damit bastle: '}
      <WordCloud
        words={[
          { text: 'HTML', count: 90 },
          { text: 'CSS', count: 80 },
          { text: 'Typescript', count: 120 },
          { text: 'REST', count: 100 },
          { text: 'Svelte', count: 120 },
          { text: 'Git', count: 120 },
          { text: 'NPM', count: 80 },
          { text: 'MS Office', count: 60 },
          { text: 'TailwindCSS', count: 75 },
          { text: 'GitHub', count: 110 },
          { text: 'MongoDB', count: 100 },
          { text: 'Linux', count: 90 },
          { text: 'Netlify', count: 70 }
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
          { text: 'IntelliJ', count: 70 },
          { text: 'BlueJ', count: 60 },
          { text: 'REST', count: 100 },
          { text: 'Eclipse', count: 110 },
          { text: 'Trello', count: 70 },
          { text: 'C', count: 70 },
          { text: 'C++', count: 80 },
          { text: 'C#', count: 90 },
          { text: 'Firebase', count: 80 },
          { text: 'Active Directory', count: 85 },
          { text: 'AutoIt', count: 90 },
          { text: 'Selenium', count: 105 }
        ]}
        backgroundColor="secondary"
        minRotate={-10}
        maxRotate={20}
      />
    {/if}
  </div>
</div>
