import React from "react";

const whatsappUrl =
  "https://wa.me/201129429206?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20Saber%20Group%D8%8C%20%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A3%D8%B9%D8%B1%D9%81%20%D8%A3%D9%86%D8%B3%D8%A8%20%D9%83%D9%88%D8%B1%D8%B3%20%D9%84%D9%8A%D8%A7";

const proofItems = [
  ["2014", "خبرة عملية في الجرافيك ديزاين"],
  ["2019", "خبرة تدريب ومتابعة طلاب"],
  ["Adobe", "مدرب معتمد رسمياً من أدوبي"],
  ["Maro", "مساعد ذكي لطلاب الأكاديمية"],
  ["Portal", "متابعة حضور وتاسكات وتقييمات"],
];

const differenceCards = [
  {
    tag: "Design Thinking",
    title: "تفكير حملات وإعلانات",
    text: "هتفهم يعني إيه فكرة إعلان، إزاي تربط التصميم بالهدف، وإزاي تعمل حملة فيها لغة واحدة مش بوستات متفرقة.",
    featured: true,
  },
  {
    tag: "AI Workflow",
    title: "الذكاء الصناعي داخل الشغل",
    text: "ورش وتطبيقات على استخدام AI في التحليل، توليد الأفكار، بناء البرومبت، وتسريع التنفيذ بنفس طريقة السوق.",
  },
  {
    tag: "Real Follow Up",
    title: "متابعة فعلية مش مجرد جروب",
    text: "حضور، غياب، تاسكات، تقييمات، نقاط، Rank، ومتابعة فردية لنقاط الضعف عشان تعرف تتحسن بخطوات واضحة.",
  },
  {
    tag: "Portfolio Ready",
    title: "مشروع تخرج بقوة مشروع حقيقي",
    text: "بنراجع ونعدل ونقيم لحد ما المشروع يبقى جاهز يتعرض في البورتفوليو ويتقدم بمستوى قوي.",
  },
];

const journeySteps = [
  {
    num: "01",
    title: "التأسيس التقني",
    text: "Photoshop, Illustrator, InDesign، التعامل مع الصور، الفيكتور، الطباعة، التجهيزات، وتطبيقات عملية من أول الكورس.",
  },
  {
    num: "02",
    title: "أساسيات التصميم",
    text: "تكوين، ألوان، هرم بصري، أخطاء شائعة، وتحليل التصاميم عشان تفهم ليه التصميم نجح أو فشل.",
  },
  {
    num: "03",
    title: "ورش احترافية",
    text: "Social media، الهويات، Behance، portfolio، AI، التفكير الإبداعي، وسوق العمل بطريقة عملية مش محفوظة.",
  },
  {
    num: "04",
    title: "مشروع التخرج",
    text: "مشروع يحاكي شغل العملاء الحقيقي: brief، research، reference، تنفيذ، مراجعة، تطوير، وتجهيز للعرض.",
  },
];

const courses = [
  {
    title: "كورس الجرافيك للمبتدئين",
    text: "مناسب للي عايز يبدأ صح ويتعلم البرامج والأساسيات والتطبيق العملي خطوة بخطوة.",
    points: ["Photoshop, Illustrator, InDesign", "أساسيات التصميم والألوان والتكوين", "تاسكات ومتابعة وتقييم مستمر"],
  },
  {
    title: "المستوى المتقدم",
    text: "للمصمم اللي عنده أساسيات وعايز يفهم الحملات، البورتفوليو، والاشتغال بشكل أقرب للسوق.",
    points: ["تحليل مشاريع وريفرنسات", "ورش AI وسوشيال ميديا وهوية", "تطوير portfolio وBehance"],
  },
  {
    title: "ورش متخصصة",
    text: "ورش مركزة بتقوي نقطة محددة: سوق العمل، الفريلانس، بناء البورتفوليو، أو استخدام AI في التصميم.",
    points: ["Live على مشاريع حقيقية", "تطبيق عملي مباشر", "Feedback واضح وقابل للتنفيذ"],
  },
];

const experienceItems = [
  {
    title: "Portal خاص بكل طالب",
    text: "تتابع حضورك، تاسكاتك، تقييمك، نقاطك، وأي حاجة فاتتك عشان تعرف ترجع تعوضها وترفع مستواك.",
  },
  {
    title: "Community ومدربين مساعدين",
    text: "جروبات واتساب وديسكورد، مدربين مساعدين على نفس المحتوى، ونظام واضح يقلل العشوائية.",
  },
  {
    title: "تطبيق عملي على احتياج السوق",
    text: "بنشتغل على brief، حملات، reference، وتحليل بدل ما تبقى الحصة مجرد شرح أداة.",
  },
  {
    title: "ترشيحات للمميزين",
    text: "الطلاب المتميزين بيكون لهم أولوية في الترشيحات حسب مستواهم والفرص المتاحة.",
  },
];

function Header() {
  return (
    <header className="hero">
      <nav className="nav container" aria-label="التنقل الرئيسي">
        <a className="brand" href="#top" aria-label="Saber Group Courses Academy">
          <img className="brand-logo" src="/assets/saber-group-logo-cropped.webp" alt="" />
          <span className="brand-badge">تعلم جرافيك بالذكاء الصناعي</span>
        </a>
        <div className="nav-links">
          <a href="#difference">الاختلاف</a>
          <a href="#journey">رحلة التعلم</a>
          <a href="#courses">الكورسات</a>
          <a href="#consultation">ابدأ</a>
        </div>
      </nav>

      <div className="hero-grid container" id="top">
        <div>
          <p className="academy-label">أكاديمية صابر جروب للكورسات</p>
          <p className="eyebrow">أول تجربة تعلم جرافيك مدعومة بالكامل بالذكاء الصناعي</p>
          <h1>مش كورس برامج. دي رحلة تصنع مصمم فاهم السوق.</h1>
          <p>
            في Saber Group هتتعلم التصميم من أساسه: تفكير الحملات، بناء الأفكار، تحليل الريفرنس،
            استخدام أدوات Adobe والذكاء الصناعي، ومشروع تخرج يتعامل كأنه مشروع حقيقي من أول يوم.
          </p>
          <div className="actions">
            <a className="button primary" href="#consultation">اعرف أنسب مسار ليك</a>
            <a className="button secondary" href="#maro">جرب فكرة Maro AI</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function SectionHead({ kicker, title, children }) {
  return (
    <div className="section-head">
      <div>
        <p className="kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
      <p>{children}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />

      <main>
        <section className="proof-strip" aria-label="أرقام ونقاط قوة">
          <div className="proof-grid container">
            {proofItems.map(([num, text]) => (
              <div className="proof-item" key={num}>
                <span className="proof-number">{num}</span>
                {text}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="difference">
          <div className="container">
            <SectionHead kicker="ليه Saber Group مختلف؟" title="بنعلّمك إزاي تفكر كمصمم، مش إزاي تحفظ زرار.">
              أغلب الأماكن بتشرح أدوات. إحنا بنبني تجربة كاملة: محتوى ثابت، مدربين مساعدين على نفس النظام،
              متابعة فردية، مجتمع نشط، وورش بتدخل على مشاريع حقيقية.
            </SectionHead>

            <div className="cards">
              {differenceCards.map((card) => (
                <article className={`card${card.featured ? " featured" : ""}`} key={card.title}>
                  <span className="tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft" id="journey">
          <div className="container split">
            <div>
              <div className="section-head section-head-single">
                <p className="kicker">رحلة التعلم</p>
                <h2>مسار واضح من أول الأدوات لحد الشغل الاحترافي.</h2>
                <p>
                  كل مرحلة بتبني اللي بعدها. الهدف إنك تطلع فاهم البرامج، فاهم القواعد،
                  وفاهم إزاي تحول الكلام brief لفكرة وتصميم قابل للبيع.
                </p>
              </div>

              <div className="panel path">
                {journeySteps.map((step) => (
                  <article className="path-step" key={step.num}>
                    <span className="step-num">{step.num}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="maro" id="maro">
              <div>
                <p className="kicker maro-kicker">Maro AI</p>
                <h3>مساعد ذكي مكمل معاك طول الرحلة.</h3>
                <p>
                  Maro مش رد آلي. ده مساعد متدرب على طريقة Saber Group يساعد الطالب يفهم، يحلل، ويحل المشاكل أسرع.
                </p>
                <ul className="maro-list">
                  <li>تحليل التصميم وإظهار نقاط القوة والضعف</li>
                  <li>حل مشاكل تقنية في البرامج والأدوات</li>
                  <li>توليد prompts تساعد في التنفيذ والأفكار</li>
                  <li>اقتراح خطوات تعلم حسب احتياج الطالب</li>
                </ul>
              </div>
              <a className="button primary" href="#consultation">اطلب تجربة مجانية</a>
            </aside>
          </div>
        </section>

        <section className="section dark" id="courses">
          <div className="container">
            <SectionHead kicker="اختار مسارك" title="سواء بتبدأ من الصفر أو محتاج تنقل شغلك لمستوى أعلى.">
              فريقنا يساعدك تعرف أنسب كورس حسب مستواك، هدفك، وقتك، والجهاز المتاح معاك.
            </SectionHead>

            <div className="courses">
              {courses.map((course) => (
                <article className="course-card" key={course.title}>
                  <h3>{course.title}</h3>
                  <p>{course.text}</p>
                  <ul>
                    {course.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <SectionHead kicker="التجربة التعليمية" title="الأونلاين هنا مش عزلة. ده نظام متابعة كامل.">
              لو قلقان من الأونلاين، الفرق الحقيقي مش في مكان المحاضرة. الفرق في المتابعة،
              سرعة الرد، وضوح التقييم، والمجتمع اللي بيسندك.
            </SectionHead>

            <div className="experience">
              {experienceItems.map((item) => (
                <article className="experience-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="consultation">
          <div className="container cta">
            <div className="cta-grid">
              <div>
                <p className="kicker cta-kicker">ابدأ من السؤال الصح</p>
                <h2>مش عارف تبدأ منين؟ خلينا نرشحلك أنسب مسار.</h2>
                <p>
                  ابعت مستواك الحالي، هدفك من تعلم التصميم، والجهاز المتاح معاك.
                  هنقولك الطريق الأقرب ليك ونوضحلك تجربة Saber Group خطوة بخطوة.
                </p>
              </div>
              <div className="actions">
                <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  كلمنا على واتساب
                </a>
                <a className="button secondary" href="#courses">شوف المسارات</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-row">
          <span>Saber Group Courses Academy</span>
          <span>Graphic Design education powered by AI</span>
        </div>
      </footer>
    </>
  );
}

export default App;
