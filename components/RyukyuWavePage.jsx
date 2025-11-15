import Image from "next/image";

import heroWave from "../public/visuals/hero-wave.png";
import waveIcon from "../public/visuals/wave-icon.png";
import whaleBadge from "../public/visuals/whale-badge.png";
import aguBowl from "../public/visuals/agu-bowl.png";

const highlightItems = [
  {
    title: "冬季限定观鲸体验",
    description: "专属船班驶向庆良间海域，近距离追踪座头鲸破浪而出的震撼画面。",
  },
  {
    title: "嘉手纳观景台＋美国村夕阳夜景",
    description: "下午观察战机起降，傍晚转进美国村，收藏夕阳、街景与圣诞灯饰。",
  },
  {
    title: "残波岬灯塔＋断崖海岸壮景",
    description: "漫步残波岬海岸线，沿途是浪花拍打断崖与灯塔交织的辽阔视野。",
  },
  {
    title: "古宇利岛跨海大桥＋海景午餐",
    description: "驾车跨过大桥抵达古宇利岛，在海景咖啡馆享用午餐并拍摄旅拍照。",
  },
  {
    title: "美丽海水族馆＋海洋文化区散策",
    description: "避开人潮的参观动线，一次看完鲸鲨、水母与琉球海洋研究故事。",
  },
  {
    title: "渡嘉敷岛一日徒步",
    description: "船行穿越庆良间诸岛，安排整日徒步与海湾漫步，亲临极清海水。",
  },
  {
    title: "国际通市场海鲜＋轻松散步",
    description: "从牧志市场海鲜现做料理到国际通散步购物，以轻松节奏收束旅程。",
  },
];

const itineraryDays = [
  {
    day: "Day 1",
    title: "观鲸 · 美国村 · 海滨圣诞夜",
    activities: [
      {
        label: "上午｜观鲸体验",
        description: "乘船出海观看冬季限定的鲸鱼活动，领队协助讲解与拍摄。",
      },
      {
        label: "中午｜国际通附近用餐",
        description: "返回那霸市区补充能量，挑一家市场里的特色小店用餐。",
      },
      {
        label: "下午｜嘉手纳观景台 + 美国村散策",
        description: "在观景台观察战机，再前往美国村步行区拍彩色墙面与节庆装饰。",
      },
      {
        label: "傍晚｜日落＋圣诞灯饰",
        description: "在海边等待夕阳并欣赏灯光秀，让旅程第一天以浪漫收束。",
      },
    ],
  },
  {
    day: "Day 2",
    title: "残波岬灯塔 · 古宇利岛 · 美丽海水族馆",
    activities: [
      {
        label: "上午｜残波岬海岸线与灯塔散步",
        description: "沿着断崖海岸拍摄浪花，登塔俯瞰加勒比色的近海。",
      },
      {
        label: "中午｜古宇利岛跨海大桥景观＋午餐",
        description: "驾车跨海进入古宇利岛，在海景餐厅享用午餐并停留拍照。",
      },
      {
        label: "下午｜美丽海水族馆＋港湾散步",
        description: "精选观赏路线，一次看完鲸鲨大水槽与海洋文化展区。",
      },
      {
        label: "晚上｜返回酒店休息",
        description: "傍晚前回到那霸，保留休息与整理照片的时间。",
      },
    ],
  },
  {
    day: "Day 3",
    title: "渡嘉敷岛一日徒步",
    activities: [
      {
        label: "上午｜乘船往返渡嘉敷岛",
        description: "搭船穿越庆良间诸岛，沿途欣赏难得的渐层海色。",
      },
      {
        label: "全天｜徒步＋海湾散步＋休闲时光",
        description: "依照体力调整步道，在山海之间拍照、野餐、泡海水或静坐发呆。",
      },
      {
        label: "傍晚｜返回那霸",
        description: "傍晚搭船返港，安排舒缓晚餐或自由时间，避免舟车劳顿。",
      },
    ],
  },
  {
    day: "Day 4",
    title: "自由早晨 · 海鲜市场 · 国际通散策",
    activities: [
      {
        label: "上午｜睡到自然醒",
        description: "不给闹钟和集合压力，慢慢整理前几天的成果。",
      },
      {
        label: "中午｜牧志市场附近海鲜料理",
        description: "走进牧志市场挑选现流海产，体验“买完上楼现做”的在地吃法。",
      },
      {
        label: "下午｜国际通散步、购物、轻松自由活动",
        description: "沿着国际通与周边小巷散步，采购伴手礼并完成旅程收束。",
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
            <p>从观鲸与灯塔到古宇利大桥、渡嘉敷岛，真实行程提炼的亮点帮你快速知道有什么特别。</p>
          </div>
          <div className="rw-highlight-grid">
            {highlightItems.map((item) => (
              <article className="rw-highlight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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
            <p>用 Day 1–Day 4 的顺序呈现真实动线，去掉冗余时间表，留下你会实际体验到的每一个重点。</p>
          </div>
          <div className="rw-day-grid">
            {itineraryDays.map((day) => (
              <article className="rw-day-card" key={day.day}>
                <div className="rw-day-header">
                  <span>{day.day}</span>
                  <h3>{day.title}</h3>
                </div>
                <ul>
                  {day.activities.map((activity) => (
                    <li key={activity.label}>
                      <strong>{activity.label}</strong>
                      <p>{activity.description}</p>
                    </li>
                  ))}
                </ul>
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
    </div>
  );
};

export default RyukyuWavePage;
