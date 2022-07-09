<script lang="ts">
  import Contact from '$lib/sites/Contact.svelte';
  import Downloads from '$lib/sites/Downloads.svelte';
  import Resume from '$lib/sites/Resume/Resume.svelte';
  import Interests from '$lib/sites/Interests.svelte';
  import Technologies from '$lib/sites/Technologies.svelte';
  import Lander from '$lib/sites/Lander.svelte';
  import Header from '$lib/components/Header/Header.svelte';
  import Text from '$lib/components/Wrapper/Text.svelte';
  import { fade } from 'svelte/transition';
  import { cubicOut, cubicInOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  import NormalButton from '$lib/components/Input/NormalButton.svelte';
  import Menu from '$lib/components/Header/Menu.svelte';
  import { onMount } from 'svelte';

  let scroll: number = 0;
  let scrollPrev: number;
  let showHeader: boolean;
  let height: number = 0;
  let currentPosition:
    | 'Lander'
    | 'Greetings'
    | 'Contact'
    | 'Downloads'
    | 'Interests'
    | 'Technologies'
    | 'Resume' = 'Lander';

  const number = tweened(0, {
    duration: 2000,
    easing: cubicInOut
  });

  let tweenRunning = false;

  onMount(() => {
    number.subscribe((e) => {
      tweenRunning = true;
      window.scroll({
        top: e,
        left: 0,
        behavior: 'smooth'
      });
    });
    setInterval(() => (tweenRunning = false), 100);
    window.addEventListener('wheel', () => {
      if (tweenRunning) {
        number.set(scroll, {
          duration: 0
        });
      }
    });
  });

  const wheel = (node, options) => {
    let { scrollable } = options;

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

  function navigate() {
    number.set(scroll, {
      duration: 0
    });
    switch (currentPosition) {
      case 'Lander':
        number.set(0);

        break;
      case 'Resume':
        number.set(450);

        break;
      case 'Technologies':
        number.set(1000);

        break;
      case 'Interests':
        number.set(1500);

        break;
      case 'Contact':
        number.set(2000);

        break;
      case 'Downloads':
        number.set(2500);

        break;
      case 'Greetings':
        number.set(3000);

        break;
    }
  }
</script>

<svelte:window bind:innerHeight={height} bind:scrollY={scroll} />

<div class="fixed flex flex-col h-full w-full justify-center z-20 ">
  <div class="flex flex-row justify-end">
    <Menu bind:currentPosition on:positionChanged={() => navigate()} />
  </div>
</div>
<div class="bg-surface">
  <i class="fa fa-microchip text-text" />
</div>
<div class="w-full">
  <Lander />
</div>
<div class="w-full" style:transform={`translate(0, ${scroll * -0.9}px)`}>
  <Resume />
</div>
<div>
  <Technologies />
</div>
<div class="w-full">
  <Interests />
</div>
<div class="w-full">
  <Contact />
</div>
<div class="w-full">
  <Downloads />
</div>
