<script lang="ts">
  import Greetings from '$lib/Programs/Greetings.svelte';
  import Contact from '$lib/Programs/Contact.svelte';
  import Downloads from '$lib/Programs/Downloads.svelte';
  import Resume from '$lib/Programs/Resume.svelte';
  import Interests from '$lib/Programs/Interests.svelte';
  import Technologies from '$lib/Programs/Technologies.svelte';
  import Lander from '$lib/Programs/Lander.svelte';
  import Text from '$lib/components/Wrapper/Text.svelte';
  import Menu from '$lib/components/Header/Menu.svelte';
  import Window from '$lib/Programs/unilities/window.svelte';
  import { openWindows } from '$lib/Stores/OpenWindows';

  const wheel = (node) => {
    let scrollable = false;

    const handler = (e) => {
      if (!scrollable) e.preventDefault();
    };

    node.addEventListener('wheel', handler, { passive: false });

    return {
      update(options) {
        scrollable = options.scrollable;
      },
      destroy() {
        node.removeEventListener('wheel', handler, { passive: false });
      }
    };
  };
</script>

<svelte:window use:wheel />

<!-- <Menu /> -->
<div class="fixed h-full w-full flex flex-col justify-end z-2">
  <Menu />
</div>

<!-- Render windows -->

{#each $openWindows as [component, props] (props.id)}
  <Window title={props.title} id={props.id}>
    <svelte:component this={component} />
  </Window>
{/each}
<!--
  {#if $openWindows.find((e) => e.title === 'auto dm')}
    <Window title="auto dm" id="auto dm">
      <Text text="Bei der auto dm" size="large" />
      <div class="mt-2">
        <Text
          text="Bei der auto dm konnte ich mein errungenes Fachwissen vertiefen und neue Technologien erforschen. Hier kann ich meine Leidenschaft für SPA Frameworks wie Svelte voll entwickeln."
        />
      </div>
    </Window>
  {/if}
  {#if $openWindows.find((e) => e.title === 'Beresa')}
    <Window title="Ausbildung bei Beresa" id="Beresa">
      <div class="">
        <Text text="Beresa GmbH & Co. KG" size="large" />
        <div class="mt-2">
          <Text
            text="In der Ausbildung bei Beresa habe ich gelernt, wie ich mit Typescript arbeiten kann. Wie Git funktioniert, wie man Linux bedient, wie Javascript, HTML und CSS zusammenspielen, wie SQL Datenbanken laufen und wie man Anwendungen per REST-Schnittstelle anspricht. Ich konnte außerdem mein Fachwissen bezüglich Scum vertiefen. Ich durfte im Kundenkontakt, aber auch 'hinter dem Bildschirm' arbeiten."
          />
        </div>
      </div>
    </Window>
  {/if}

  {#if $openWindows.find((e) => e.title === 'con terra')}
    <Window title="Praktikum bei con terra" id="con terra">
      <Text text="Praktikum bei con terra" size="large" />
      <div class="mt-2">
        <Text
          text="Im Praktikum bei con terra habe ich meine Java Kenntnisse vertiefen können, indem wir dort eine eigenständige Anwendung entwickelt haben, die mit einer REST-Schnittstelle kommuniziert und so genaue Geo-Daten abruft. Ich konnte auch mein Fachwissen bezüglich Scum vertiefen."
        />
      </div>
    </Window>
  {/if}
  {#if $openWindows.find((e) => e.title === 'studium')}
    <Window title="Studium an der WWU" id="studium">
      <Text text="Westfälische Wilhelms Universität" size="large" />
      <div class="mt-2">
        <Text
          text="An der WWU in Münster im Studiengang 'Geoinformatik' erfuhr ich tiefergehende Kenntnisse im Bereich der IT. Dort brachte man mir vor allem die Sprache Java bei, ich konnte mich aber auch mit logischen Problemen auseinandersetzen, so wie Themen rund um die Geologie unseres Planeten. "
        />
      </div>
    </Window>
  {/if}
  {#if $openWindows.find((e) => e.title === 'abitur')}
    <Window title="Abitur an der JCS" id="abitur">
      <Text text="Johann-Conrad-Schlaun" size="large" />
      <div class="mt-2">
        <Text
          text="Meine Hochschulreife erhielt ich an der JCS Nordkirchen. Hier hatte ich erste Berührungspunkte mit dem Thema Datenbanken und Java Entwicklung."
        />
      </div>
    </Window>
  {/if}
{/if} -->
