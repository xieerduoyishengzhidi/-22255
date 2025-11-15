import Image from "next/image";

import heroWave from "../public/visuals/hero-wave.png";
import shuriCastle from "../public/visuals/shuri-castle.png";
import waveIcon from "../public/visuals/wave-icon.png";
import whaleBadge from "../public/visuals/whale-badge.png";
import lighthouse from "../public/visuals/lighthouse.png";
import bingataFrame from "../public/visuals/bingata-frame.png";
import aguBowl from "../public/visuals/agu-bowl.png";

const itineraryHighlights = [
  {
    title: "观鲸之旅",
    description: "冬季迁徙的座头鲸在庆良间海域翻跃，近距离感受它们的呼吸与歌声。",
  },
  {
    title: "美军基地周边文化",
    description: "走入基地外的小巷，理解冲绳独特的历史与文化交织。",
  },
  {
    title: "美国村圣诞夜",
    description: "海边看日落、灯火与音乐交错，体验跨文化的节庆热度。",
  },
  {
    title: "残波岬 × 古宇利大桥",
    description: "绝景巡礼，一路收集灯塔到桥的辽阔视野与珊瑚色海面。",
  },
  {
    title: "美丽海水族馆",
    description: "与鲸鲨同游的海洋王国，感受琉球的海洋研究精神。",
  },
  {
    title: "嘉嘉岛徒步",
    description: "在原始海岸线与森林小道间徒步，把脚步交给海风。",
  },
  {
    title: "国际通漫游",
    description: "料理、市集、手作与节庆，一次搜罗岛人生活的日常脉搏。",
  },
];

const guides = [
  {
    name: "呱呱 Guagua",
    title: "琉球研究狂 · 海节庆讲述者",
    bio: "热爱岛屿故事的“冲绳研究狂”，擅长把海洋文化、节庆与民俗转成动人故事，让你听浪声时也能听见人情味。",
    photo: bingataFrame,
    specialties: ["海洋文化解读", "节庆脉络与民俗礼仪", "风狮爷与浮世绘线条速写"],
  },
  {
    name: "小贾 Jia",
    title: "生活型岛民领队",
    bio: "住在冲绳的“生活型领队”，熟悉小众海滩、秘境与在地咖啡馆，让你像岛民一样慢游并留下习惯可复制的旅行节奏。",
    photo: whaleBadge,
    specialties: ["秘境海滩与咖啡店推荐", "岛人日常观察", "轻徒步与亲子友好行程"],
  },
];

const galleryImages = [
  {
    src: heroWave,
    label: "庆良间海浪",
    caption: "鲸与风狮在浪尖并行的瞬间，是“琉球之浪”的精神象征。",
  },
  {
    src: shuriCastle,
    label: "首里城轮廓",
    caption: "历史脉络在城墙线条间展开，行程的文化起点由此延伸。",
  },
  {
    src: lighthouse,
    label: "残波岬灯塔",
    caption: "海风与灯光，陪伴夜航与旅行者的下一段旅程。",
  },
  {
    src: bingataFrame,
    label: "红型染纹样",
    caption: "绚烂纹样提醒我们：冲绳的色彩来自生活细节。",
  },
];

const RyukyuWavePage = () => {
  return (
    <div className="rw-page">
      <header className="rw-hero" aria-labelledby="rw-hero-title">
        <div className="rw-hero-cloud cloud-left" aria-hidden="true" />
        <div className="rw-hero-cloud cloud-right" aria-hidden="true" />
        <div className="rw-container rw-hero-inner">
          <div className="rw-hero-text">
            <p className="rw-eyebrow">Ryukyu Wave · 沉浸式旅行叙事</p>
            <h1 id="rw-hero-title">深入琉球，见微知澜</h1>
            <p>
              冲绳不只有阳光与海滩。“琉球之浪”带你探索深藏于日常中的故事，
              在海浪、风狮与人情之间读懂冲绳的文化与历史。我们相信——
              最深刻的旅行，始于最细微的发现。
            </p>
            <ul className="rw-hero-highlights">
              <li>浮世绘线条 × 冲绳元素</li>
              <li>Mailchimp 式垂直叙事滚动</li>
              <li>5 天探索自然・历史・岛事生活</li>
            </ul>
          </div>
          <div className="rw-hero-illustration">
            <div className="rw-hero-image-wrap">
              <Image
                src={heroWave}
                alt="浮世绘海浪与风狮爷"
                className="rw-floating"
                placeholder="blur"
              />
              <Image
                src={whaleBadge}
                alt="庆良间蓝徽章"
                className="rw-hero-badge rw-floating-delayed"
                placeholder="blur"
              />
            </div>
            <p className="rw-hero-caption">
              浮世绘的动感线条与庆良间蓝交织，像一幅向下展开的冲绳绘卷。
            </p>
          </div>
        </div>
      </header>

      <section className="rw-band rw-theme-band" id="themes">
        <div className="rw-container">
          <div className="rw-section-intro">
            <p className="rw-eyebrow">Theme</p>
            <h2>探索冲绳的自然・文化・节奏</h2>
            <p>
              我们会带你从冲绳的自然海景、历史遗迹，一直到节庆与市集，
              深度认识“表面风景”下的琉球灵魂。
            </p>
          </div>
          <div className="rw-theme-grid">
            <div className="rw-theme-illustration" aria-hidden="true">
              <Image src={shuriCastle} alt="首里城插画" priority />
              <Image src={waveIcon} alt="" className="rw-theme-badge" />
            </div>
            <div className="rw-theme-copy">
              <h3>让卷轴式叙事带你走进琉球的心脏</h3>
              <p>
                区块之间穿插插画与真实感记录，读起来像 Mailchimp
                垂直叙事，却又保留浮世绘的分镜感。
                跟着视觉节奏，你会在海浪声中穿梭首里城、古宇利大桥、嘉嘉岛与国际通。
              </p>
              <ul>
                <li>自然海景：观鲸、海洋文化、美丽海水族馆</li>
                <li>历史遗址：首里城、残波岬灯塔、美军文化走读</li>
                <li>节庆市集：美国村夜逛、岛人生活节奏、手作体验</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rw-band rw-itinerary-band" id="itinerary">
        <div className="rw-container">
          <div className="rw-section-intro">
            <p className="rw-eyebrow">Signature Route</p>
            <h2>王牌行程：海・古・风</h2>
            <p>
              5 天冲绳深度体验，使用“海洋 × 历史 × 生活”三大线索减缓旅行节奏，
              让每一站都留下可感可触的记忆。
            </p>
          </div>
          <div className="rw-itinerary-list">
            {itineraryHighlights.map((item) => (
              <article className="rw-itinerary-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="rw-itinerary-stamp">
            <Image src={lighthouse} alt="残波岬灯塔插画" />
            <div>
              <p>行程亮点分镜</p>
              <span>海浪指针引导下一个故事</span>
            </div>
          </div>
        </div>
      </section>

      <section className="rw-band rw-guide-band" id="guides">
        <div className="rw-container">
          <div className="rw-section-intro">
            <p className="rw-eyebrow">Island Guides</p>
            <h2>你的岛人领队</h2>
            <p>两位常驻冲绳的领队，用生活化的方式陪你读懂海与城。</p>
          </div>
          <div className="rw-guide-grid">
            {guides.map((guide) => (
              <article className="rw-guide-card" key={guide.name}>
                <div className="rw-guide-photo" aria-hidden="true">
                  <Image src={guide.photo} alt={`${guide.name} 插画`} />
                </div>
                <div className="rw-guide-copy">
                  <h3>{guide.name}</h3>
                  <p className="rw-guide-title">{guide.title}</p>
                  <p>{guide.bio}</p>
                  <ul>
                    {guide.specialties.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rw-guide-contact">
                  <p>微信二维码</p>
                  <span>预留二维码区域</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rw-band rw-price-band" id="price">
        <div className="rw-container">
          <div className="rw-price-card">
            <div className="rw-price-info">
              <p className="rw-eyebrow">Price</p>
              <h2>2999 元</h2>
              <p>
                我们坚持透明、无套路的定价。2999 元覆盖本次主行程的所有核心体验，
                包括观鲸、景点交通、徒步体验、文化探索等，只需轻装上阵，其余交给我们。
              </p>
              <ul>
                <li>包含交通与主要门票</li>
                <li>行前路线咨询 + 旅途中即时协力</li>
                <li>无强制购物 · 无隐藏费用</li>
              </ul>
            </div>
            <div className="rw-price-illustrations" aria-hidden="true">
              <Image src={aguBowl} alt="冲绳阿古猪料理插画" />
              <Image src={waveIcon} alt="浮世绘浪花装饰" />
            </div>
          </div>
        </div>
      </section>

      <section className="rw-band rw-gallery-band" id="gallery">
        <div className="rw-container">
          <div className="rw-section-intro">
            <p className="rw-eyebrow">Journey Glimpses</p>
            <h2>真实的感动瞬间</h2>
            <p>照片可随时替换为你的旅途素材，维持栩栩如生的卷轴节奏。</p>
          </div>
          <div className="rw-gallery-grid">
            {galleryImages.map((item) => (
              <figure className="rw-gallery-card" key={item.label}>
                <Image src={item.src} alt={item.label} />
                <figcaption>
                  <strong>{item.label}</strong>
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="rw-scroll-indicator">
            <span>5 / 57,001</span>
            <p>已经跟随“琉球之浪”完成冲绳深度体验的人数</p>
          </div>
        </div>
      </section>

      <section className="rw-band rw-finale" aria-labelledby="rw-finale-title">
        <div className="rw-container">
          <p className="rw-eyebrow">下一站</p>
          <h2 id="rw-finale-title">冲绳</h2>
          <p>卷轴的末章，是海风拂面的情绪收束。你准备好继续书写了吗？</p>
          <div className="rw-finale-ornament" aria-hidden="true">
            <Image src={waveIcon} alt="浮世绘浪花图案" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RyukyuWavePage;
