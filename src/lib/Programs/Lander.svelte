<script lang="ts">
  import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatcher = createEventDispatcher();

  export let testvalue = '123321';
</script>

<div>
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
  <Text text={`${testvalue}`} />
</div>
