<script>
  import { page } from "./lib/store";
  import { fly } from "svelte/transition";
  import Bar from "./lib/Bar.svelte";
  import Brief from "./lib/Brief.svelte";
  import Classify from "./lib/Classify.svelte";
  import { onMount } from "svelte";

  let paused = true;
  let src = "./static/rapj.mp3";
  onMount(() => {
    addEventListener("keydown", (e) => {
      if (e.code === "Space") paused = false;
      e.preventDefault();
      return;
    });
    addEventListener("keyup", (e) => {
      if (e.code === "Space") paused = true;
      e.preventDefault();
      return;
    });
  });
</script>

<main>
  <Bar />
  {#if $page == 1}
    <div
      in:fly={{ y: -500, duration: 1000 }}
      out:fly={{ y: -500, duration: 1000 }}
      class="margin"
    >
      <Brief />
    </div>
  {:else}
    <div
      in:fly={{ y: 500, duration: 1000 }}
      out:fly={{ y: 500, duration: 1000 }}
      class="margin"
    >
      <Classify />
    </div>
  {/if}
  <audio {src} bind:paused preload="auto"><track kind="captions" /></audio>
</main>

<style>
  .margin {
    margin-top: 6rem;
  }
</style>
