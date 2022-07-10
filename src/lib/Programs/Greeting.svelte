<script lang="ts">
  import Text from '$lib/components/Wrapper/Text.svelte';
  import { differenceInYears } from 'date-fns';
</script>

<div class="m-4">
  <Text text="Hallo," />
  <div class="mt-2">
    <Text
      text={`mein Name ist Jonas Focke und ich bin 
      ${differenceInYears(new Date(), new Date('August 1, 1998 03:24:00'))} 
      Jahre alt.
      Zurzeit arbeite ich als fullstack-developer bei der auto dm in Münster.
      Ich habe nach dem Abitur erfolgreich eine Ausbildung als Fachinformatiker für Anwendungsentwicklung bei Beresa absolviert
      und konnte schon in der Ausbildung viel mit Programmen und Tools zur Webentwicklung arbeiten.
      Ich bin gerne am Zahn der Zeit und erforsche neue Technologien.`}
    />
  </div>
</div>
