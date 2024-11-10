<script lang="ts">
  import type { ActionData, PageData } from "./$types";

  let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<div id="wrapper"></div>
<div class="grid grid-cols-3 gap-10 max-w-4xl m-auto">
  <div class="bg-white p-5 rounded-md col-span-2">
    <a href="/">Back</a>
    <img
      src={data.product.image}
      class="w-full h-96 object-contain"
      alt={data.product.title}
    />
  </div>

  <div class="space-y-3 bg-white p-5 rounded-md">
    {#if form?.message}
      <div class="text-rose-500 bg-rose-100 px-4 py-3 rounded-md">
        {form.message}
      </div>
    {/if}

    <div class="space-y-2 py-2">
      <div class="">{data.product.title}</div>
      <p class="text-xs text-gray-500">
        {data.product.description}
      </p>

      <div
        class="text-xs text-gray-500 bg-gray-200 inline-block px-3 py-1 rounded-full"
      >
        {data.product.category}
      </div>
    </div>

    <div class="font-bold text-lg">${data.product.price}</div>

    <form action="" method="post" class="space-y-5">
      <input type="hidden" name="price" value={data.product.price} />

      <button
        class="inline-block bg-blue-500 px-4 py-2 text-white text-xs font-bold rounded"
        >Checkout</button
      >
    </form>
  </div>
</div>

<style lang="postcss">
  input {
    @apply border border-gray-100 bg-gray-100 px-3 py-1 rounded text-sm w-full;
  }
</style>
