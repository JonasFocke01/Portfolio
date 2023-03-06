<script lang="ts">
  import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
  import Button from '@jonas_focke/svelcon/Input/Button.svelte';
  import { fly } from 'svelte/transition';
  import { toast } from '@zerodevx/svelte-toast';
  import Fa from 'svelte-fa';
  import {
    faMailForward,
    faClipboard
  } from '@fortawesome/free-solid-svg-icons/index.es';

  let playTransition = 0;

  let contactType: 'mail' | 'phone' | '' = '';

  let transitionDuration = 400;
</script>

<div class="m-2 h-64">
  <div class="">
    <Button
      additionalClasses="px-2"
      text={{ text: 'Kontakt zu Jonas Focke' }}
      on:click={() => (playTransition = 1)}
    />
  </div>
  <div class="w-full flex flex-row mt-4">
    {#if playTransition >= 1}
      <div
        class="w-1/2 cursor-pointer flex flex-row justify-center"
        in:fly={{ duration: transitionDuration, x: 100 }}
        on:introend={() => (playTransition = 2)}
        on:click={() => (contactType = 'mail')}
      >
        <Text text="Per Email" />
      </div>
    {/if}
    {#if playTransition >= 2}
      <div
        class="w-1/2 cursor-pointer flex flex-row justify-center"
        in:fly={{ duration: transitionDuration, x: -100 }}
        on:introend={() => (playTransition = 3)}
        on:click={() => (contactType = 'phone')}
      >
        <Text text="Per Telefon" />
      </div>
    {/if}
  </div>
  {#if contactType === 'mail'}
    <div class="w-full flex flex-col mt-4">
      {#if playTransition >= 3}
        <div
          class="flex flex-row justify-center"
          in:fly={{ duration: transitionDuration, y: -50 }}
          on:introend={() => (playTransition = 4)}
        >
          <Text text="jonas!-focke@mailbox.org" />
        </div>
      {/if}
      <div class="w-full flex flex-row mt-4 text-4xl text-text">
        {#if playTransition >= 4}
          <div
            class="w-1/2 flex flex-row justify-center cursor-pointer"
            in:fly={{ duration: transitionDuration, y: -50 }}
            on:introend={() => (playTransition = 5)}
            on:click={() =>
              window.open(
                'mailto:jonas-focke@mailbox.org?subject=Hallo Jonas&body=Das möchten wir dir sagen:'
              )}
          >
            <Fa icon={faMailForward} />
          </div>
        {/if}
        {#if playTransition >= 5}
          <div
            class="w-1/2 flex flex-row justify-center cursor-pointer"
            in:fly={{ duration: transitionDuration, y: -50 }}
            on:introend={() => (playTransition = 6)}
            on:click={() =>
              navigator.clipboard.writeText('www.jonas-focke@mailbox.org').then(
                () => {
                  toast.push('Email-Adresse kopiert!');
                },
                () => {
                  toast.push('Fehler beim kopieren');
                }
              )}
          >
            <Fa icon={faClipboard} />
          </div>
        {/if}
      </div>
    </div>
  {/if}
  {#if contactType === 'phone'}
    <div class="w-full flex flex-col mt-4">
      {#if playTransition >= 3}
        <div
          class="flex flex-row justify-center"
          in:fly={{ duration: transitionDuration, y: -50 }}
          on:introend={() => (playTransition = 4)}
        >
          <Text text="+49 173 3113571" />
        </div>
      {/if}
      <div class="w-full flex flex-row mt-4 text-4xl text-text">
        {#if playTransition >= 4}
          <div
            class="w-full flex flex-row justify-center cursor-pointer"
            in:fly={{ duration: transitionDuration, y: -50 }}
            on:introend={() => (playTransition = 6)}
            on:click={() =>
              navigator.clipboard.writeText('+491733113571').then(
                () => {
                  toast.push('Telefon-nummer kopiert!');
                },
                () => {
                  toast.push('Fehler beim kopieren!');
                }
              )}
          >
            <Fa icon={faClipboard} />
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>
