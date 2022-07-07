<script lang="ts">
  import { fly } from 'svelte/transition';
  import Menu from '$lib/components/Header/Menu.svelte';
  import Checkbox from '$lib/components/Input/Checkbox.svelte';
  import Date from '$lib/components/Input/Date.svelte';
  import Dropdown from '$lib/components/Input/Dropdown.svelte';
  import NormalButton from '$lib/components/Input/NormalButton.svelte';
  import Number from '$lib/components/Input/Number.svelte';
  import Password from '$lib/components/Input/Password.svelte';
  import RadioGroup from '$lib/components/Input/RadioGroup.svelte';
  import SmallButton from '$lib/components/Input/SmallButton.svelte';
  import Textarea from '$lib/components/Input/Textarea.svelte';
  import Textfield from '$lib/components/Input/Textfield.svelte';
  import Card from '$lib/components/Wrapper/Card.svelte';
  import InplacePopup from '$lib/components/Wrapper/InplacePopup.svelte';
  import List from '$lib/components/Wrapper/List.svelte';
  import MediaQuery from '$lib/components/Wrapper/MediaQuery.svelte';
  import Table from '$lib/components/Wrapper/Table.svelte';
  import Text from '$lib/components/Wrapper/Text.svelte';
</script>

<div class="w-full flex flex-row justify-center mt-8">
  <div class="w-1/2">
    <NormalButton label="Hallo Welt" />
  </div>
</div>
