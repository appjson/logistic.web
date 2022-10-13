<script>
  const data = [
    {
      src: "./static/logistic.jpg",
      id: "logistic",
      brief:
        "<a target='blank' href='https://baike.baidu.com/item/%E7%89%A9%E6%B5%81/110623'>物流（英文名称：logistics）</a>原意为“实物分配”或“货物配送”，是供应链活动的一部分，是为了满足客户需要而对商品、服务消费以及相关信息从产地到消费地的高效、低成本流动和储存进行的规划、实施与控制的过程。<a href='#logistic'>物流</a>以仓储为中心，促进生产与市场保持同步。<a href='#logistic'>物流</a>是为了满足客户的需要，以最低的成本，通过运输、保管、配送等方式，实现原材料、半成品、成品及相关信息由商品的产地到商品的消费地所进行的计划、实施和管理的全过程。",
    },
    {
      src: "./static/car.jpg",
      id: "",
      brief:
        "<a href='#logistic'>物流</a>由商品的运输、配送、仓储、包装、搬运装卸、流通加工，以及相关的<a href='#logistic'>物流</a>信息等环节构成。<br/>物流活动的具体内容包括以下几个方面：用户服务、需求预测、定单处理、配送、存货控制、运输、仓库管理、工厂和仓库的布局与选址、搬运装卸、采购、包装、情报信息。",
    },
    {
      src: "./static/ship.jpg",
      id: "",
      brief:
        "<a href='#logistic'>物流</a>是指为了满足客户的需求，通过运输、保管、配送等方式，实现原材料、半成品、成品或相关信息进行由商品的产地到商品的消费地的计划、实施和管理的全过程。<a href='#logistic'>物流</a>是一个控制原材料、制成品、产成品和信息的系统，从供应开始经各种中间环节的转让及拥有而到达最终消费者手中的实物运动，以此实现组织的明确目标。现代物流是经济全球化的产物，也是推动经济全球化的重要服务业。世界现代物流业呈稳步增长态势，欧洲、美国、日本成为当前全球范围内的重要物流基地。",
    },
    {
      src: "./static/port.jpg",
      id: "",
      brief:
        "七大构成部分：物体的运输、仓储、包装、搬运装卸、流通加工、配送以及相关的物流信息等环节。<br/>具体内容包括以下几个方面：用户服务、需求预测、订单处理、配送、存货控制、运输、仓库管理、工厂和仓库的布局与选址、搬运装卸、采购、包装、情报信息。",
    },
    {
      src: "./static/logistics.jpg",
      id: "",
      brief:
        "在<a href='#logistics_china'>中国</a>国家标准<a target='blank' href='https://baike.baidu.com/item/%E7%89%A9%E6%B5%81%E6%9C%AF%E8%AF%AD'>《物流术语》</a>的定义中指出：物流是物品从供应地到接收地的实体流动过程，根据实际需要，将运输、储存、装卸、搬运、包装、流通加工、配送、回收、信息处理等基本功能实施有机的结合。<br/><a href='#logistics_china'>中国</a>的物流术语标准将物流定义为：物流是物品从供应地向接收地的实体流动过程中，根据实际需要，将运输、储存、装卸搬运、包装、流通加工、配送、信息处理等功能有机结合起来实现用户要求的过程。",
    },
    {
      src: "./static/warehouse.jpg",
      id: "",
      brief:
        "在当今的电子商务时代，全球<a href='#logistic'>物流</a>产业有了新的发展趋势。现代物流服务的核心目标是在物流全过程中以最小的综合成本来满足顾客的需求。<br/>现在电商的快速崛起和行业的需求，对于仓储物流配送这一重要环节的需求和要求也在不断提高，第三方公司在市场行业中也扮演着越来越重要的角色，甚至能够协助商家在终端和渠道端提供广泛的服务。这类企业的服务不仅仅只是简单的发货，更重要的是需要站在商家的角度去做好仓储库存物流配送的环节，使电商整体流程形成良性发展。<br/>现代物流信息技术的五大组成：1.条码技术 2.EDI技术 3.射频技术（RFID） 4.GIS技术（地理信息系统） 5.GPS技术",
    },
    {
      src: "./static/tech.jpg",
      id: "",
      brief:
        "智慧物流解决方案：融合大数据、IoT、人工智能、区块链、GIS、BIM等新技术，围绕“仓储、运输&配送、物流节点”三大物流环节，构建“智慧运输”、“智能仓储”、“智慧枢纽”三大场景化解决方案，实现物流E2E全链条数字化、智慧化，使能物流行业客户持续降本增效。",
    },
    {
      src: "./static/usages.jpg",
      id: "",
      brief:
        "<a href='#logistic'>物流</a>基本职能：1、运输职能 2、仓储职能 3、配送职能 4、包装职能 5、装卸搬运职能 6、流通加工职能 7、信息处理职能<br/>物流的目的 从生产到消费之间，存在着时间和空间上的隔阂。 而物流的目的，就是弥补生产与消费之间的时间及空间差距。 过去，物流的主要使命是提高运输效率，缩短商品到达所需的时间，消除空间上的距离。",
    },
    {
      src: "./static/logistics_china.jpg",
      id: "logistics_china",
      brief:
        "<a href='#logistic'>物流</a>业是融合运输业、仓储业、货代业和信息业等的复合型服务产业，是国民经济的重要组成部分，涉及领域广，吸纳就业人数多，促进生产、拉动消费作用大，在促进产业结构调整、转变经济发展方式和增强国民经济竞争力等方面发挥着重要作用。<a target='blank' href='https://baike.baidu.com/reference/110623/fe0eSzDP4_b6pq4wjac9XWdVfnUJJDzLfI7SkRuVdIKNbpCJrBdQ1dFyvO_bGbNh2dcNF6Woli9t2mL8Pxjt2Ds0ptam1wuYP4Z2Ar6FDqErAD5pMcwNxL_GYi6vvbngCA'>参考资料</a>",
    },
  ];
</script>

<div class="main">
  {#each data as val, i (i)}
    <section class="blur" id={val.id}>
      {#if i % 2 == 0}
        <img src={val.src} alt={val.brief.slice(0, 12)} />
      {/if}
      <div class="content">
        {@html val.brief}
      </div>
      {#if i % 2 != 0}
        <img src={val.src} alt={val.brief.slice(0, 12)} />
      {/if}
    </section>
  {/each}
</div>

<style>
  .main {
    height: 100%;
  }
  section {
    position: relative;
    height: 10rem;
    margin: 2rem;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    color: var(--color-font);
  }
  section::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: var(--color-others);
    opacity: 0.8;
    filter: blur(4px);
    z-index: -1;
  }

  img {
    width: auto;
    height: 100%;
    border-radius: 12px;
  }

  .content {
    margin: 1rem;
    height: 90%;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .content::-webkit-scrollbar {
    display: none;
  }
</style>
