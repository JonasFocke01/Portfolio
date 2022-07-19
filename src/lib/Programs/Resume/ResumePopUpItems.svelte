<script lang="ts">
  import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';

  export let header: string;
  export let body: string;
</script>

<div class="m-2">
  <Text text={header} size="large" />
</div>
<div class="m-2">
  <Text text={body} />
</div>
