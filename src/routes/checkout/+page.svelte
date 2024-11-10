<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

{#if data.body.data.status == "failed"}
  <div class="flex flex-col gap-3 text-center m-auto text-3xl text-rose-400">
    <span class="font-bold uppercase text-5xl">Checkout failed</span>

    <a href="/" class="text-sm text-blue-500">Return to home page</a>
  </div>
{:else}
  <div class="flex flex-col text-center m-auto text-3xl text-gray-400 space-y-3">
    <span><span class="font-bold uppercase text-5xl">Thank you</span> <br /> for shopping from us</span>

    <a href="/" class="text-sm text-blue-500">Buy more</a>
  </div>
{/if}
