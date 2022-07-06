<script lang="ts">
  import Card from '$lib/components/Wrapper/Card.svelte';
  import Text from '$lib/components/Wrapper/Text.svelte';
</script>

<div class="w-full flex justify-center">
  <div class="w-1/3 mt-10">
    <Card>
      <div class="text-center">
        <Text text="HELLO WORLD!" size="large" />
      </div>
      <div class="mt-4">
        <Text
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        minus dolores voluptatem, voluptates repellat ex quidem modi iusto
        ratione architecto repellendus possimus blanditiis temporibus adipisci
        quo, qui odit non voluptas!"
        />
      </div>
    </Card>
  </div>
</div>
