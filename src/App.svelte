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
  {#if !paused}
    <div class="img">
      <img src="./static/ji.gif" alt="ji" />
    </div>
  {/if}

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
  .img {
    position: fixed;
    top: 25vh;
    left: 25vw;
    height: 50vh;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
  }
  .img img {
    width: auto;
    height: 100%;
  }
  .copyright {
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;
    width: auto;
    height: 1rem;
    font-size: small;
    font-weight: 300;
  }
</style>
