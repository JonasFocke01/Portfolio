<script lang="ts">
  import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
  import Fa from 'svelte-fa';
  import {
    faFileImage,
    faFileArchive,
    faFilePdf
  } from '@fortawesome/free-solid-svg-icons/index.es';

  const files = [
    { name: 'Foto', icon: faFileImage, path: '' },
    {
      name: 'Lebenslauf',
      icon: faFilePdf,
      path: 'Lebenslauf.pdf'
    },
    {
      name: 'Arbeitszeugnis!-Beresa',
      icon: faFilePdf,
      path: 'Arbeitszeugnis-Beresa.pdf'
    },
    {
      name: 'Abitur!-Zeugnis',
      icon: faFilePdf,
      path: 'Abitur-Zeugnis.pdf'
    },
    {
      name: 'Bescheinigung!-conterra',
      icon: faFilePdf,
      path: 'Bescheinigung-conterra.pdf'
    },
    {
      name: 'Bescheinigung!-Ehemaligenverein',
      icon: faFilePdf,
      path: 'Bescheinigung-Ehemaligenverein.pdf'
    },
    {
      name: 'Alle',
      icon: faFileArchive,
      path: 'Unterlagen.zip'
    }
  ];

  function download(fileUrl: string, fileName: string) {
    var a = document.createElement('a');
    a.href = fileUrl;
    a.setAttribute('download', fileName + '-Jonas_Focke');
    a.click();
    a.remove();
  }
</script>

<div class="m-2">
  {#each files as file}
    <div
      class="flex flex-row space-y-2  hover:underline text-text cursor-pointer"
      on:click={() => download(file.path, file.name)}
    >
      <div class="mt-3 text-text text-2xl">
        <Fa icon={file.icon} />
      </div>
      <div class="ml-2">
        <Text text={file.name} />
      </div>
    </div>
  {/each}
</div>
