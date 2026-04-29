const advantages = [
  // {
  //   title: "Доставка за 2 часа",
  //   text: "Позволяет привезти бетон в день заявки объемом от 6 до 12 м3.",
  // },
  {
    title: "Паспорт качества",
    text: "Сертификат и паспорт партии по СТБ 1544 с указанием марки, класса прочности, F и W.",
  },
  {
    title: "Консультация и расчет",
    text: "Поможем подобрать марку бетона под задачу и точно рассчитать нужную кубатуру.",
  },
];

const grades = [
  ["М-150", "С8/10 (В-12,5)", "F50 / W2", "Отмостки, дорожки, стяжки по грунту"],
  ["М-200", "С12/15 (В-15)", "F100 / W4", "Ленточные фундаменты малоэтажных домов, стяжки пола, площадки"],
  ["М-250", "С16/20 (В-20)", "F100 / W4", "Монолитные плиты, ростверки, перекрытия до 2 этажей"],
  ["М-300", "С18/22,5 (В-22,5)", "F200 / W6", "Фундаменты 2-3-этажных зданий, лестницы, подпорные стены"],
  ["М-350", "С20/25 (В-25)", "F200 / W8", "Несущие конструкции, колонны, перекрытия многоэтажных зданий"],
  ["М-400", "С25/30 (В-30)", "F300 / W10", "Мостовые конструкции, бассейны, гидротехника"],
  ["М-500", "С30/37 (В-37)", "F300 / W12", "Спецконструкции с повышенной нагрузкой, промышленные объекты"],
];

const pricing = [
  ["М-150", "С8/10 В-12,5", "П3, F-50, щебень", "от 200 р."],
  ["М-200", "С12/15 В-15", "П3, F-50, щебень", "от 220 р."],
  ["М-250", "С16/20 В-20", "П3, F-150, щебень", "от 235 р."],
  ["М-300", "С18/22,5 В-22,5", "П3, F-200, щебень", "от 250 р."],
  ["М-350", "С20/25 В-25", "П3, F-200, щебень", "от 255 р."],
  ["М-400", "С25/30 В-30", "П3, F-300, щебень", "от 270 р."],
  ["М-450", "С28/35 В-35", "П3, щебень", "от 295 р."],
  ["М-500", "С30/37 В-37", "П3, щебень", "от 305 р."],
];

const steps = [
  {
    title: "Заявка и консультация",
    text: "Уточняем объем, марку, адрес доставки и рассчитываем итоговую стоимость с учетом расстояния.",
  },
  {
    title: "Отгрузка с контролем",
    text: "Бетон загружается на сертифицированном РБУ с автоматической дозировкой и паспортом качества на каждый замес.",
  },
  {
    title: "Доставка миксером",
    text: "Смесь приезжает с постоянным перемешиванием. Бесплатная выгрузка до 40 минут, лотки до 8 метров.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <section className="mx-auto grid min-h-screen max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-14">
        <div className="flex flex-col justify-between rounded-[28px] border border-black/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(245,239,230,0.92))] p-8 shadow-[0_24px_80px_rgba(35,24,14,0.12)] sm:p-10">
          <div className="space-y-6">
            <div className="inline-flex w-fit items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Бетон в Пинске и районе
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl font-[var(--font-display)] text-4xl leading-none sm:text-5xl lg:text-7xl">
                Бетон в Пинске с доставкой от производителя
              </h1>
              <p className="max-w-2xl text-base leading-7 text-black/72 sm:text-lg">
                Пинск, Иваново, Лунинец, Столин и ближайшие районы. Доставка
                бетона марок М150-М500 на гранитном щебне с сертифицированных
                РБУ, лабораторным контролем и паспортом качества на каждый
                рейс.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-black/72 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/8 bg-black/[0.03] p-4">
                Опыт работы более 5 лет
              </div>
              <div className="rounded-2xl border border-black/8 bg-black/[0.03] p-4">
                Подача лотками до 8 метров
              </div>
              <div className="rounded-2xl border border-black/8 bg-black/[0.03] p-4">
                Доставка миксером от 120 р.
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-black/45">
                Телефон для заказа
              </div>
              <a
                className="mt-2 inline-block font-[var(--font-display)] text-3xl leading-none text-[var(--accent)] sm:text-4xl"
                href="tel:+375447391821"
              >
                +375 44 739-18-21
              </a>
            </div>
            <a
              className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--accent)] px-7 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[var(--accent-strong)]"
              href="tel:+375447391821"
            >
              Позвонить сейчас
            </a>
          </div>
        </div>

        <aside className="grid gap-4 self-stretch">
          <div className="rounded-[28px] border border-black/10 bg-[var(--panel)] p-6 shadow-[0_18px_60px_rgba(35,24,14,0.08)]">
            <div className="text-xs uppercase tracking-[0.24em] text-black/45">
              Ориентир по цене
            </div>
            <div className="mt-4 font-[var(--font-display)] text-6xl leading-none text-[var(--accent)]">
              200 р.
            </div>
            <p className="mt-3 text-sm leading-6 text-black/72">
              По документу указаны ориентировочные заводские цены на бетон от
              М150 до М500 без доставки. Актуализация в исходном тексте:{" "}
              01.04.2026.
            </p>
          </div>
          <div className="rounded-[28px] border border-black/10 bg-[linear-gradient(180deg,#2c2119,#17110c)] p-6 text-white shadow-[0_18px_60px_rgba(20,14,10,0.28)]">
            <div className="text-xs uppercase tracking-[0.24em] text-white/60">
              Что входит
            </div>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/84">
              <li>Паспорт качества на каждый рейс</li>
              <li>Постоянное перемешивание смеси в барабане</li>
              <li>Выгрузка в пределах 40 минут</li>
              <li>Консультация по выбору марки под фундамент, плиту или стяжку</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {advantages.map((item) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-black/8 bg-white/80 p-6 shadow-[0_18px_44px_rgba(35,24,14,0.08)] backdrop-blur"
            >
              <h2 className="font-[var(--font-display)] text-2xl leading-tight">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-black/70">{item.text}</p>
            </article>
          ))}
        </div>

        <section className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="text-xs uppercase tracking-[0.24em] text-black/45">
              Марки и классы бетона
            </div>
            <h2 className="font-[var(--font-display)] text-4xl leading-none sm:text-5xl">
              Какую марку выбрать в Пинске
            </h2>
            <p className="text-base leading-7 text-black/72">
              Товарный бетон доставляется на объект автобетоносмесителем и
              сохраняет проектные характеристики при соблюдении времени
              транспортировки до 60-90 минут.
            </p>
            <p className="text-base leading-7 text-black/72">
              Для ленточного фундамента частного дома в один-два этажа обычно
              достаточно М250. Для трехэтажного коттеджа или цокольного этажа с
              грунтовыми водами в документе рекомендован М300.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_24px_60px_rgba(35,24,14,0.09)]">
            <div className="grid grid-cols-[0.9fr_1.2fr_1fr_1.7fr] gap-4 border-b border-black/8 bg-[var(--accent-soft)] px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-black/55">
              <div>Марка</div>
              <div>Класс</div>
              <div>F / W</div>
              <div>Применение</div>
            </div>
            {grades.map(([grade, cls, props, usage]) => (
              <div
                key={grade}
                className="grid grid-cols-1 gap-2 border-b border-black/6 px-5 py-4 text-sm leading-6 last:border-b-0 sm:grid-cols-[0.9fr_1.2fr_1fr_1.7fr]"
              >
                <div className="font-semibold text-[var(--accent)]">{grade}</div>
                <div>{cls}</div>
                <div>{props}</div>
                <div className="text-black/70">{usage}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 rounded-[32px] border border-black/10 bg-[linear-gradient(135deg,rgba(255,248,240,0.96),rgba(239,231,220,0.92))] p-8 shadow-[0_24px_70px_rgba(35,24,14,0.10)] lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-[24px] bg-white/72 p-6">
              <div className="text-xs uppercase tracking-[0.24em] text-black/40">
                Шаг {index + 1}
              </div>
              <h2 className="mt-3 font-[var(--font-display)] text-2xl leading-tight">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-black/70">{step.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-black/45">
                Цены на бетон
              </div>
              <h2 className="mt-3 font-[var(--font-display)] text-4xl leading-none sm:text-5xl">
                Бетон на гранитном щебне
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-black/65">
              Ниже оставлен ориентир по позициям из прайс-листа. Доставка
              рассчитывается отдельно с учетом расстояния до объекта.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {pricing.map(([name, cls, spec, price]) => (
              <article
                key={name}
                className="rounded-[24px] border border-black/8 bg-white p-5 shadow-[0_16px_40px_rgba(35,24,14,0.07)]"
              >
                <div className="text-sm uppercase tracking-[0.18em] text-black/45">
                  {name}
                </div>
                <div className="mt-3 font-[var(--font-display)] text-3xl text-[var(--accent)]">
                  {price}
                </div>
                <div className="mt-4 text-sm font-medium text-black/80">{cls}</div>
                <div className="mt-2 text-sm leading-6 text-black/62">{spec}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[28px] border border-black/10 bg-[linear-gradient(180deg,#fff,#f4ede4)] p-8 shadow-[0_20px_55px_rgba(35,24,14,0.08)]">
            <div className="text-xs uppercase tracking-[0.24em] text-black/45">
              Доставка миксером
            </div>
            <h2 className="mt-4 font-[var(--font-display)] text-4xl leading-none">
              От 120 р.
            </h2>
            <p className="mt-4 text-base leading-7 text-black/72">
              Смесь постоянно перемешивается в бетоновозе, а при разгрузке
              используется лоток длиной до 8 метров. Стоимость доставки
              рассчитывается по расстоянию от РБУ до объекта.
            </p>
          </article>

          <article className="rounded-[28px] border border-black/10 bg-[var(--ink)] p-8 text-white shadow-[0_24px_65px_rgba(22,15,9,0.28)]">
            <div className="text-xs uppercase tracking-[0.24em] text-white/55">
              Частый вопрос
            </div>
            <h2 className="mt-4 font-[var(--font-display)] text-3xl leading-tight">
              Сколько стоит куб бетона в Пинске с доставкой?
            </h2>
            <p className="mt-4 text-base leading-7 text-white/78">
              Цена зависит от марки и класса прочности, типа заполнителя и
              расстояния доставки. В документе приведены ориентировочные
              заводские цены без доставки: от 200 р. за М150 до 295 р. за М500
              на мелком щебне, плюс доставка миксером от 120 р.
            </p>
          </article>
        </section>

        <section className="mt-20 rounded-[32px] border border-black/10 bg-[linear-gradient(135deg,#2c2119,#5a321f)] p-8 text-white shadow-[0_24px_70px_rgba(22,15,9,0.24)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-white/55">
                Аренда спецтехники
              </div>
              <h2 className="mt-4 max-w-3xl font-[var(--font-display)] text-4xl leading-none sm:text-5xl">
                Предоставляем услуги по аренде техники
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/78 sm:text-lg">
                Экскаватор ЕК-12, самосвал МАЗ грузоподъемностью 10 тонн и
                погрузчик Амкодор доступны для работ на объекте.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/12 bg-white/10 p-6">
              <div className="text-xs uppercase tracking-[0.24em] text-white/55">
                Номер телефона
              </div>
              <a
                className="mt-3 block font-[var(--font-display)] text-3xl leading-none text-white sm:text-4xl"
                href="tel:+375445508302"
              >
                +375 44 550-83-02
              </a>
              <a
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-transparent border border-white/12 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)] transition hover:bg-[var(--accent-soft)]"
                href="tel:+375445508302"
              >
                Позвонить
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-20 rounded-[28px] border border-black/10 bg-white/75 px-6 py-7 text-sm leading-6 text-black/65 shadow-[0_18px_44px_rgba(35,24,14,0.06)]">
          <p>
            Купить бетон в Пинске можно по телефону{" "}
            <a className="font-semibold text-[var(--accent)]" href="tel:+375447391821">
              +375 44 739-18-21
            </a>
            . Информация на сайте не является публичной офертой.
          </p>
        </footer>
      </section>
    </main>
  );
}
