<script>
  import { crossfade, scale } from "svelte/transition";

  const [send, receive] = crossfade({
    duration: 200,
    fallback: scale,
  });

  const classes = [
    {
      title: "冷链物流",
      color: "#001f3f",
      id: "1",
      src: "lenglian.jpg",
      sound: "j.mp3",
      content:
        "冷链物流指冷藏冷冻类食品在生产、贮藏运输、销售，到消费前的各个环节中始终处于规定的低温环境下，以保证食品质量，减少食品损耗的一项系统工程。它是随着科学技术的进步、制冷技术的发展而建立起来的，是以冷冻工艺学为基础、以制冷技术为手段的低温物流过程；是需要特别装置，需要注意运送过程、时间掌控、运输型态、物流成本所占成本比例非常高的特殊物流形式。",
    },
    {
      title: "敏捷物流",
      color: "#0074D9",
      id: "2",
      src: "minjie.jpg",
      sound: "n.mp3",
      content:
        "敏捷物流（Agility Logistics）亦称敏捷供应链（Agile Supply Chain.ASC），多数的中国物流公司将敏捷物流称为“途途物流（wuliuku）”。敏捷物流（途途物流）以核心物流企业为中心，运用科技手段，通过对资金流、物流、信息流的控制，将供应商、制造商、分销商、零售商及最终消费者用户整合到一个统一的、快速响应的、无缝化程度较高的功能物流网络链条之中，以形成一个极具竞争力的战略联盟。",
    },
    {
      title: "军事物流",
      color: "#7FDBFF",
      id: "3",
      src: "junshi.jpg",
      sound: "t.mp3",
      content:
        "军事物流指用于满足军队平时与战时需要的物流活动。其主要目的是保障军事行动的胜利。这一点和地方物流以成本或是服务水平为目标明显不同；物品种类的特殊性：主要包括武器装备、弹药、医疗设备、军队生活用品等。物流活动的保密性、实效性。多数情况下由部队用自有运输、仓储设备在军用机场、码头、车站完成物流活动。所以，军事物流和民用物流实际上是一个统一的大系统。",
    },
    {
      title: "电子商务物流",
      color: "#39CCCC",
      id: "4",
      src: "dianshang.jpg",
      sound: "m.mp3",
      content:
        "电子商务物流又称网上物流，就是基于互联网技术，旨在创造性的推动物流行业发展的新商业模式；通过互联网，物流公司能够被更大范围内的货主客户主动找到，能够在全国乃至世界范围内拓展业务；贸易公司和工厂能够更加快捷的找到性价比最适合的物流公司；网上物流致力把世界范围内最大数量的有物流需求的货主企业和提供物流服务的物流公司都吸引到一起，提供中立、诚信、自由的网上物流交易市场，帮助物流供需双方高效达成交易。已经有越来越多的客户通过网上物流交易市场找到了客户，找到了合作伙伴，找到了海外代理。",
    },
    {
      title: "云物流",
      color: "#3D9970",
      id: "5",
      src: "yun.jpg",
      sound: "nhf.mp3",
      content:
        "采用第三方物流，结成战略联盟，促进物流一体化，电商和物流的合作已经形成了轻公司轻资产模式、垂直一体化模式、半外包模式、云物流云仓储模式。物流表现形式——储备；空间域物流表现形式——位移；时间空间域表现形式——轨迹。",
    },
    {
      title: "虚拟物流",
      color: "#2ECC40",
      id: "6",
      src: "xuni.jpg",
      sound: "ngm.mp3",
      content:
        "虚拟物流（Virtual logistics）是指以计算机网络技术进行物流运作与管理，实现企业间物流资源共享和优化配置的途途物流方式。即多个具有互补资源和技术的成员企业，为了实现资源共享、风险共担、优势互补等特点的战略目标，在保持自身独立性的条件下，建立的较为稳定的合作伙伴关系。",
    },
    {
      title: "生产物流",
      color: "#FFDC00",
      id: "7",
      src: "shengchan.jpg",
      sound: "ay.mp3",
      content:
        "生产物流一般是指：原材料、燃料、外构件投入生产后，经过下料、发料，运送到各加工点和存储点，以在制品的形态，从一个生产单位（仓库）流入另一个生产单位，按照规定的工艺过程进行加工、储存，借助一定的运输装置，在某个点内流转，又从某个点内流出，始终体现着物料实物形态的流转过程。这样就构成了企业内部物流活动的全过程。所以，生产物流的边界起源于原材料、外构件的投入，止于成品仓库，贯穿生产全过程。",
    },
  ];

  let selected = null;
  let loading = null;

  const load = (image) => {
    const timeout = setTimeout(() => (loading = image), 500);

    const img = new Image();

    img.onload = () => {
      selected = image;
      clearTimeout(timeout);
      loading = null;
    };

    img.src = `./static/${image.src}`;
  };
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

<div class="container">
  <div class="phone">
    <h1>分类</h1>

    <div class="grid">
      {#each classes as c}
        <div class="square">
          {#if selected !== c}
            <button
              style="background-color: {c.color};"
              on:click={() => load(c)}
              in:receive={{ key: c.id }}
              out:send={{ key: c.id }}>{loading === c ? "..." : c.title}</button
            >
          {/if}
        </div>
      {/each}
    </div>

    {#if selected}
      {#await selected then d}
        <div
          class="photo"
          in:receive={{ key: d.id }}
          out:send={{ key: d.id }}
          on:mouseenter={() => handleHover(d.sound)}
          on:mouseleave={() => handleLeave()}
        >
          <img
            alt={d.title}
            src="./static/{d.src}"
            on:click={() => (selected = null)}
            on:keypress={() => (selected = null)}
          />
          <p class="credit credit-left">
            {d.content}
          </p>
          <p class="credit">
            <a
              target="_blank"
              href="https://baidu.com/s?wd={encodeURIComponent(d.title)}"
              >→搜索{d.title}</a
            >
          </p>
        </div>
      {/await}
    {/if}
  </div>
  <audio {src} bind:paused preload="auto"><track kind="captions" /></audio>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .phone {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: auto;
    border: 1vmin solid var(--color-font);
    padding: 3vmin;
    border-radius: 2vmin;
  }

  .phone::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-theme);
    opacity: 0.5;
    filter: blur(10px);
    z-index: -1;
  }

  h1 {
    color: var(--color-font);
    font-weight: 600;
    font-size: 5vmin;
    text-align: center;
    margin-bottom: 0.5rem;
    margin: 0.2em 0 0.5em 0;
  }

  .grid {
    display: grid;
    flex: 1;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 2vmin;
  }

  button {
    width: 100%;
    height: 8em;
    color: white;
    font-size: 2em;
    border: none;
    margin: 0;
    will-change: transform;
  }

  .photo,
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .photo {
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
    flex-direction: column;
    will-change: transform;
  }

  img {
    object-fit: cover;
    cursor: pointer;
  }

  .credit {
    text-align: right;
    font-size: 2.5vmin;
    padding: 1em;
    margin: 0;
    color: white;
    font-weight: bold;
    opacity: 0.6;
    background: var(--color-theme);
  }

  .credit-left {
    text-align: left;
    opacity: 0.9;
    background: var(--color-theme);
  }

  .credit a,
  .credit a:visited {
    color: white;
  }
</style>
