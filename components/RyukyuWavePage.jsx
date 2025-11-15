import Image from "next/image";

import heroWave from "../public/visuals/hero-wave.png";
import waveIcon from "../public/visuals/wave-icon.png";
import whaleBadge from "../public/visuals/whale-badge.png";
import aguBowl from "../public/visuals/agu-bowl.png";
import shuriCastle from "../public/visuals/shuri-castle.png";
import lighthouse from "../public/visuals/lighthouse.png";
import bingataFrame from "../public/visuals/bingata-frame.png";

const highlightItems = [
  {
    title: "冬季限定观鲸体验",
    description: "专属船班驶向庆良间海域，近距离追踪座头鲸破浪而出的震撼画面，照片位可替换成你真实的海上照片。",
    image: heroWave,
    alt: "庆良间海域观鲸",
  },
  {
    title: "美国村圣诞夜",
    description: "12/25 圣诞夜在美国村散步，先看日落再拍节庆灯饰，保留行程专属的圣诞旅拍素材。",
    image: shuriCastle,
    alt: "美国村圣诞夜景",
  },
  {
    title: "嘉嘉岛徒步 · 庆良间海色",
    description: "登陆嘉嘉岛（渡嘉敷岛）徒步和海湾漫步，极清海水搭配山路景观，一整天沉浸式体验慢岛生活。",
    image: lighthouse,
    alt: "渡嘉敷岛步道与海景",
  },
];

const itineraryDays = [
  {
    day: "Day 0",
    date: "12/24 抵达日",
    title: "那霸民宿集合 · 居酒屋介绍会",
    activities: [
      {
        time: "16:00",
        label: "入住那霸市区民宿",
        description: "抵达冲绳后由领队协助入住，确认隔日集合资讯。",
      },
      {
        time: "19:30",
        label: "欢迎居酒屋介绍会",
        description: "步行前往附近居酒屋，分享注意事项、兑换 LINE 群组并认识团员。",
      },
      {
        time: "21:30",
        label: "返回民宿休息",
        description: "可在国际通散步回宿舍，轻松调整隔天出海节奏。",
      },
    ],
  },
  {
    day: "Day 1",
    date: "12/25 圣诞节",
    title: "观鲸 · 美国村 · 海滨圣诞夜",
    activities: [
      {
        time: "07:30",
        label: "那霸泊港集合",
        description: "领队发放晕船贴与暖饮，准备出海观鲸。",
      },
      {
        time: "08:00",
        label: "庆良间海域观鲸",
        description: "专属船班 2.5 小时，捕捉座头鲸跃出海面的瞬间。",
      },
      {
        time: "12:30",
        label: "国际通午餐",
        description: "返回市区在市场附近用餐，顺便补给小物。",
      },
      {
        time: "15:30",
        label: "嘉手纳观景台 + 美国村散策",
        description: "观景台看战机起降，随后移步美国村街区。",
      },
      {
        time: "18:00",
        label: "海边日落体验",
        description: "站在美国村海滨广场，等候圣诞夕阳和海风。",
      },
      {
        time: "20:00",
        label: "圣诞灯饰巡礼",
        description: "拍摄限定灯饰与街头音乐，夜间可继续逛街或返回民宿。",
      },
    ],
  },
  {
    day: "Day 2",
    date: "12/26",
    title: "残波岬灯塔 · 古宇利岛 · 美丽海水族馆",
    activities: [
      {
        time: "08:30",
        label: "残波岬散步",
        description: "沿断崖海岸拍摄浪花，灯塔为旅拍背景。",
      },
      {
        time: "11:30",
        label: "古宇利岛跨海大桥 + 午餐",
        description: "跨海大桥欣赏蓝绿海景，岛上海景咖啡馆用餐。",
      },
      {
        time: "14:30",
        label: "美丽海水族馆",
        description: "避开最拥挤时段，慢慢看鲸鲨大水槽与海洋展示。",
      },
      {
        time: "18:30",
        label: "返回酒店休息",
        description: "回那霸途中可顺路采购便利店宵夜。",
      },
    ],
  },
  {
    day: "Day 3",
    date: "12/27",
    title: "嘉嘉岛（渡嘉敷岛）一日徒步",
    activities: [
      {
        time: "07:00",
        label: "泊港搭船前往嘉嘉岛",
        description: "穿越庆良间诸岛，沿途拍摄层次分明的海色。",
      },
      {
        time: "09:00",
        label: "岛上徒步 + 海湾漫步",
        description: "依照体力安排徒步路线，穿梭山路、海滩与观景台。",
      },
      {
        time: "13:00",
        label: "自由午餐 + 漂浮体验",
        description: "在海湾野餐或到小店用餐，可体验海边漂浮与浮潜。",
      },
      {
        time: "17:30",
        label: "返回那霸",
        description: "傍晚搭船回到泊港，夜间自由安排。",
      },
    ],
  },
  {
    day: "Day 4",
    date: "12/28",
    title: "自由早晨 · 海鲜市场 · 国际通散策",
    activities: [
      {
        time: "09:00",
        label: "睡到自然醒",
        description: "不设闹钟，慢慢整理照片与行李。",
      },
      {
        time: "12:00",
        label: "牧志市场海鲜午餐",
        description: "挑选现流海产，上楼请店家现做，体验在地吃法。",
      },
      {
        time: "14:30",
        label: "国际通散步",
        description: "小店购物、喝咖啡或寻找纪念品，为旅程画下句点。",
      },
    ],
  },
];

const priceIncludes = [
  "行程规划与全程领队陪同",
  "往返接送与当地交通",
  "主要景点门票与预约",
  "特定体验（观鲸、美丽海水族馆等）",
];

const priceExcludes = ["机票与签证", "个人消费与餐饮", "单房差与私人加购项目"];

const valueReasons = [
  "不赶场的松弛节奏，每天都预留自由弹性",
  "精选体验一次完成，比自由行更省时省脑力",
  "专业小团与在地领队，全程旅程保障更安心",
];

const guides = [
  {
    name: "呱呱 Guagua",
    title: "琉球研究者 · 海节庆讲述者",
    bio: "热爱岛屿故事的冲绳研究狂，把海洋文化、节庆与民俗转译成旅途中的故事，让你听浪声时也能听见人情味。",
    photo: bingataFrame,
    specialties: ["海洋文化解读", "节庆脉络与民俗礼仪", "风狮爷与浮世绘线条速写"],
  },
  {
    name: "小贾 Jia",
    title: "生活型岛民领队",
    bio: "常驻冲绳的生活型领队，熟悉小众海滩、秘境与在地咖啡馆，让你像岛民一样慢游并复制可持续的旅行节奏。",
    photo: whaleBadge,
    specialties: ["秘境海滩与咖啡店推荐", "岛人日常观察", "轻徒步与亲子友好行程"],
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
            <p className="rw-eyebrow">Ryukyu Wave · 产品旅行</p>
            <h1 id="rw-hero-title">冲绳 5 天 4 夜 · 海风 × 古迹 × 岛生活体验旅行</h1>
            <p>
              精选海岸、文化与城市散策路线，让你在轻松、不赶场的节奏里，把冲绳的自然与人文一次体验完整。
            </p>
            <p>
              真实团期行程已经验证过动线：观鲸、灯塔、岛屿徒步与市区散步全都收进来，一次搞定初访冲绳需要的经典与亮点。
            </p>
            <ul className="rw-hero-highlights">
              <li>首次冲绳必玩路线</li>
              <li>小众景点＋文化体验</li>
              <li>轻松节奏、不赶行程</li>
              <li>插画风治愈系旅拍路线</li>
            </ul>
          </div>
          <div className="rw-hero-illustration">
            <div className="rw-hero-image-wrap">
              <Image src={heroWave} alt="浮世绘海浪与风狮" className="rw-floating" placeholder="blur" />
              <Image
                src={whaleBadge}
                alt="庆良间蓝徽章"
                className="rw-hero-badge rw-floating-delayed"
                placeholder="blur"
              />
            </div>
            <p className="rw-hero-caption">浮世绘线条包住海风质感，呈现这趟旅程的慢速与层次。</p>
          </div>
        </div>
      </header>

      <section className="rw-band rw-highlight-band" id="highlights">
        <div className="rw-container">
          <div className="rw-section-intro">
            <p className="rw-eyebrow">Highlights</p>
            <h2>🌟 行程亮点 Highlights</h2>
            <p>只保留最有销售力的三大亮点，并预留照片区块，让你随时换上真实素材。</p>
          </div>
          <div className="rw-highlight-grid">
            {highlightItems.map((item) => (
              <article className="rw-highlight-card" key={item.title}>
                <div className="rw-highlight-photo">
                  <Image src={item.image} alt={item.alt} placeholder="blur" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rw-band rw-itinerary-band" id="itinerary">
        <div className="rw-container">
          <div className="rw-section-intro">
            <p className="rw-eyebrow">Itinerary</p>
            <h2>🗺 行程内容 Itinerary</h2>
            <p>加入 Day 0 迎新夜与 12/25 圣诞行程细节，搭配具体时间方便旅客理解节奏。</p>
          </div>
          <div className="rw-day-grid">
            {itineraryDays.map((day) => (
              <article className="rw-day-card" key={`${day.day}-${day.date}`}>
                <div className="rw-day-header">
                  <div className="rw-day-label">
                    <span>{day.day}</span>
                    <small>{day.date}</small>
                  </div>
                  <h3>{day.title}</h3>
                </div>
                <ul>
                  {day.activities.map((activity) => (
                    <li key={`${activity.time}-${activity.label}`}>
                      <div className="rw-activity-time">{activity.time}</div>
                      <div className="rw-activity-copy">
                        <strong>{activity.label}</strong>
                        <p>{activity.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rw-band rw-guide-band" id="guides">
        <div className="rw-container">
          <div className="rw-section-intro">
            <p className="rw-eyebrow">Island Guides</p>
            <h2>你的岛人领队</h2>
            <p>保留领队介绍区块，让旅客清楚感受服务价值与团队专业。</p>
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
              <p className="rw-eyebrow">💰 Price &amp; Inclusions</p>
              <h2>￥2999 / 人</h2>
              <p>
                透明定价，不乱加价。2999 元覆盖 5 天 4 夜冲绳深度体验的关键环节，含领队服务、交通与精选体验，让你轻装出发。
              </p>
              <div className="rw-price-columns">
                <div>
                  <h3>费用包含</h3>
                  <ul>
                    {priceIncludes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>费用不含</h3>
                  <ul>
                    {priceExcludes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>为什么值得</h3>
                  <ul>
                    {valueReasons.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="rw-price-illustrations" aria-hidden="true">
              <Image src={aguBowl} alt="冲绳阿古猪料理插画" />
              <Image src={waveIcon} alt="浮世绘浪花装饰" />
            </div>
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
