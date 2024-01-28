<script lang="ts">
  import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
  import { differenceInYears } from 'date-fns';
</script>

<div class="m-4">
  <Text text="Hallo," />
  <div class="mt-2">
    <Text
      text={`mein Name ist Jonas Focke und ich bin
      ${differenceInYears(new Date(), new Date('August 1, 1998 03:24:00'))}
      Jahre alt.
      Ich arbeite schon seit mehreren Jahren als Fullstackdeveloper und bin
      zurzeit bei der Stf Gruppe am Standort Münster angestellt.
      Nach dem Abitur konnte ich als erstes eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung absolvieren.
      `}
    />
  </div>
</div>
