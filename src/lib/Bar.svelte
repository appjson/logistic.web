<script>
  import { page, logged } from "./store";
  import config from "../config";

  const setPage = function (v) {
    page.goto(v);
  };

  function login() {
    logged.log();
  }

  let src = "";
  let paused = true;
  function handleHover(sound) {
    console.log("playing: ", sound);
    src = `./static/${sound}`;
    paused = false;
  }
  function handleLeave() {
    paused = true;
  }
</script>

<div class="title">
  {#each config.pageTitle as title, i (title)}
    <button
      class="item {$page - 1 == i ? 'selected' : ''}"
      on:click={() => setPage(i + 1)}
      on:mouseenter={() => handleHover("djh.mp3")}
      on:mouseleave={() => handleLeave()}
    >
      {title}
    </button>
  {/each}
  <h2 class="center" on:mousedown={() => handleHover("kk.mp3")}>
    {config.title}
  </h2>
  <audio {src} bind:paused preload="auto"><track kind="captions" /></audio>
</div>
{#if !$logged}
  <div
    class="hover"
    on:click={() => login()}
    on:keypress={() => login()}
    on:touchmove={(e) => {
      e.preventDefault();
      e.stopPropagation();
    }}
  >
    点击进入
  </div>
{/if}

<style>
  .hover {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    top: 0;
    left: 0;
    color: white;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999999;
  }

  .title {
    position: fixed;
    top: 1rem;
    width: 100%;
    height: 4rem;
    color: var(--color-font);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 999;
    overflow: hidden;
  }

  .title::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background-color: var(--color-theme);
    opacity: 0.95;
    filter: blur(2px);
    z-index: -2;
  }

  .item {
    padding: 0;
    color: white;
    height: calc(100% - 4px);
    width: 6rem;
    margin: auto 1rem;
    text-align: center;
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .selected {
    color: var(--color-emphasize);
  }

  .selected::after {
    content: "\25b2";
    position: absolute;
    bottom: -2px;
  }

  .center {
    position: relative;
    left: 2rem;
    letter-spacing: 0.2rem;
    animation: shining 1s alternate infinite;
  }
  @keyframes shining {
    from {
      text-shadow: 0 0 10px lightblue, 0 0 20px lightblue, 0 0 30px lightblue,
        0 0 40px skyblue, 0 0 50px skyblue, 0 0 60px skyblue;
    }
    to {
      text-shadow: 0 0 5px lightblue, 0 0 5px lightblue, 0 0 5px lightblue,
        0 0 5px skyblue, 0 0 5px skyblue, 0 0 5px skyblue;
    }
  }
</style>
