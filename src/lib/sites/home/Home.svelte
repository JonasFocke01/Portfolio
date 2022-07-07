<script lang="ts">
  import Card from '$lib/components/Wrapper/Card.svelte';
  import Text from '$lib/components/Wrapper/Text.svelte';
  import InplacePopup from '$lib/components/Wrapper/InplacePopup.svelte';
  import { fly, fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import BeamItem from '$lib/sites/home/BeamItem.svelte';
  import MediaQuery from '$lib/components/Wrapper/MediaQuery.svelte';

  let displayHint: boolean = true;
  let transitionStart = false;

  onMount(() => {
    transitionStart = true;
  });
</script>

{#if transitionStart}
  <div class="mt-10 w-full justify-center flex flex-row">
    <div class="w-2/3 xl:divide-x-2 flex flex-col xl:flex-row text-center">
      <!-- left side -->
      <div class="w-1/2" in:fly={{ duration: 1000, x: 100 }}>
        <div class="mt-4">
          {#if displayHint}
            <div
              class="absolute -mt-4"
              out:fade={{ duration: 500, easing: cubicInOut }}
            >
              <Text text="Klick mich" size="small" />
            </div>
          {/if}
          <BeamItem
            itemtext="Anstellung bei der auto dm"
            on:clicked={() => (displayHint = false)}
          >
            <div slot="headding">
              <Text text="Bei der auto dm" size="large" />
            </div>
            <div slot="content">
              <Text
                text="Bei der auto dm konnte ich mein errungenes Fachwissen vertiefen und neue Technologien erforschen. Hier kann ich meine Leidenschaft für SPA Frameworks wie Svelte voll entwickeln."
              />
            </div>
          </BeamItem>
        </div>
        <div class="mt-64">
          <BeamItem
            itemtext="Ausbildung bei Beresa"
            on:clicked={() => (displayHint = false)}
          >
            <div slot="headding">
              <Text text="Beresa GmbH & Co. KG" size="large" />
            </div>
            <div slot="content">
              <Text
                text="In der Ausbildung bei Beresa habe ich gelernt, wie ich mit Typescript arbeiten kann. Wie Git funktioniert, wie man Linux bedient, wie Javascript, HTML und CSS zusammenspielen, wie SQL Datenbanken laufen und wie man Anwendungen per REST-Schnittstelle anspricht. Ich konnte außerdem mein Fachwissen bezüglich Scum vertiefen. Ich durfte im Kundenkontakt, aber auch 'hinter dem Bildschirm' arbeiten."
              />
            </div>
          </BeamItem>
        </div>
        <div class="mt-20">
          <BeamItem
            itemtext="Praktikum bei con terra"
            on:clicked={() => (displayHint = false)}
          >
            <div slot="headding">
              <Text text="Praktikum bei con terra" size="large" />
            </div>
            <div slot="content">
              <Text
                text="Im Praktikum bei con terra habe ich meine Java Kenntnisse vertiefen können, indem wir dort eine eigenständige Anwendung entwickelt haben, die mit einer REST-Schnittstelle kommuniziert und so genaue Geo-Daten abruft. Ich konnte auch mein Fachwissen bezüglich Scum vertiefen."
              />
            </div>
          </BeamItem>
        </div>
        <div class="mt-20">
          <BeamItem
            itemtext="Studium an der WWU"
            on:clicked={() => (displayHint = false)}
          >
            <div slot="headding">
              <Text text="Westfälische Wilhelms Universität" size="large" />
            </div>
            <div slot="content">
              <Text
                text="An der WWU in Münster im Studiengang 'Geoinformatik' erfuhr ich tiefergehende Kenntnisse im Bereich der IT. Dort brachte man mir vor allem die Sprache Java bei, ich konnte mich aber auch mit logischen Problemen auseinandersetzen, so wie Themen rund um die Geologie unseres Planeten. "
              />
            </div>
          </BeamItem>
        </div>
        <div class="mt-36">
          <BeamItem
            itemtext="Abitur an der JCS"
            on:clicked={() => (displayHint = false)}
          >
            <div slot="headding">
              <Text text="Johann-Conrad-Schlaun" size="large" />
            </div>
            <div slot="content">
              <Text
                text="Meine Hochschulreife erhielt ich an der JCS Nordkirchen. Hier hatte ich erste Berührungspunkte mit dem Thema Datenbanken und Java Entwicklung."
              />
            </div>
          </BeamItem>
        </div>
        <div class="mt-64">
          <BeamItem
            itemtext="Sekundarstufe I"
            on:clicked={() => (displayHint = false)}
          >
            <div slot="headding">
              <Text text="Sekundarstufe I" size="large" />
            </div>
            <div slot="content">
              <Text
                text="Meine Schullaufbahn nahm ihren Anfang an der Gesamtschule Nordkirchen"
              />
            </div>
          </BeamItem>
        </div>
      </div>
      <!-- right side -->
      <div class="w-1/2" in:fly={{ duration: 1000, x: -50 }}>
        <MediaQuery query="desktop">
          <div class="mt-60">
            .
            <!-- TODO: Here could be a picture -->
          </div>
        </MediaQuery>
        <div class="mt-96">
          <BeamItem
            itemtext="Ehemaligenverein der JCS"
            on:clicked={() => (displayHint = false)}
          >
            <div slot="headding">
              <Text text="Ehemaligenverein" size="large" />
            </div>
            <div slot="content">
              <Text
                text="Nach Abschluss des Abiturs gründete ich, zusammen mit anderen engagierten Klassenkammeraden, den Verein 'Ehemaligenverein Johann-Conrad-Schlaun Nordkirchen'. Wir veranstallten regelmäßig Events für ehemalige Schüler, setzen uns aber auch für die Bildung der aktuellen Schüler ein, indem wir z.B. einen Wordkurs für Abiturienten oder eine Berufswahlmesse anbieten. Ich bin Vorstandsmitglied und für den Internetauftritt des Vereins mit verantwortlich: https://www.jcs-ehemaligenverein.de/"
              />
            </div>
          </BeamItem>
        </div>
        <div class="mt-20">
          <BeamItem
            itemtext="Führerschein Klasse B"
            on:clicked={() => (displayHint = false)}
          >
            <div slot="headding">
              <Text text="Führerschein" size="large" />
            </div>
            <div slot="content">
              <Text text="Yay, ich darf auch Auto fahren :)" />
            </div>
          </BeamItem>
        </div>
      </div>
    </div>
  </div>
{/if}
