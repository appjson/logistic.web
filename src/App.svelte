<script>
  import { page } from "./lib/store";
  import { fly } from "svelte/transition";
  import Bar from "./lib/Bar.svelte";
  import Brief from "./lib/Brief.svelte";
  import Classify from "./lib/Classify.svelte";
</script>

<main>
  <Bar />
  {#if $page == 1}
    <div
      in:fly={{ x: -500, duration: 1000 }}
      out:fly={{ x: -500, duration: 1000 }}
      class="margin"
    >
      <Brief />
    </div>
  {:else}
    <div
      in:fly={{ x: 500, duration: 1000 }}
      out:fly={{ x: 500, duration: 1000 }}
      class="margin"
    >
      <Classify />
    </div>
  {/if}
</main>

<style>
  .margin {
    margin-top: 6rem;
  }
</style>
