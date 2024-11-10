<script lang="ts">
  import type { PageData } from "./$types.js";

  let { data }: { data: PageData } = $props();

  function makePayment(amount: number) {
    PaychanguCheckout({
      public_key: "your_public_key",
      tx_ref: "" + Math.floor(Math.random() * 1000000000 + 1),
      amount: amount,
      currency: "MWK",
      callback_url: "http://localhost/checkout",
      return_url: "http://localhost/checkout",
      customer: {
        email: "yourmail@example.com",
        first_name: "Santinal",
        last_name: "Browns",
      },
      customization: {
        title: "Test Payment",
        description: "Payment Description",
      },
    });
  }
</script>

<div id="wrapper"></div>
<div class="grid grid-cols-3 gap-10 max-w-4xl m-auto">
  {#each data.products as product}
    <div class="space-y-3 bg-white p-5 rounded-md hover:shadow-md">
      <a href="/{product.id}" class="w-full h-60 block">
        <img
          src={product.image}
          class="w-full h-full object-contain"
          alt={product.title}
        />
      </a>
      <div class="space-y-2 py-2">
        <div class="line-clamp-1">{product.title}</div>
        <p class="line-clamp-2 text-xs text-gray-500">
          {product.description}
        </p>
      </div>
      <div class="flex justify-between items-center">
        <div class="font-bold text-lg">${product.price}</div>
        <button
          onclick={() => makePayment(product.price)}
          class="inline-block bg-blue-500 px-4 py-2 text-white text-xs font-bold rounded"
        >
          Buy Now
        </button>
      </div>
    </div>
  {/each}
</div>

<style lang="postcss">
</style>
