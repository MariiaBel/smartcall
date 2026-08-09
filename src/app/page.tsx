import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button/button";
import SvgIcon from "./ui/svgIcon/svgIcon";
import Popover from "./ui/popover/popover";
import ContactButton from "./ui/button/contact-button";
import {
    contactSection,
    data,
    experienceSection,
    fastSitesLink,
    hiddenTitle,
    personJsonLd,
    recommendationsSection,
    reviewsSection,
    skillsSection,
    welcomeSection,
} from "./constants/homepage";

export default function Home() {
    return (
        <article>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personJsonLd),
                }}
            />

            <h1 className="sr-only">{hiddenTitle}</h1>

            {/* ============================================
            🧙‍♀️ WELCOME — Hero
            ============================================ */}
            <section
                className="contain grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-[min-content_min-content_min-content] md:items-start"
                aria-label={welcomeSection.ariaLabel}
            >
                <Image
                    className="mx-auto max-h-[400px] w-full max-w-[630px] object-contain md:col-start-2 md:row-span-3 md:mx-0"
                    src="/girl-coding.svg"
                    alt={welcomeSection.imageAlt}
                    width={630}
                    height={630}
                    priority
                />

                <hgroup className="md:col-start-1 md:row-start-1">
                    {/* Приветствие — лёгкое, как утренний свет */}
                    <span className="block text-sm font-light uppercase tracking-[0.2em] text-[rgb(var(--cl-p))]">
                        {welcomeSection.greeting}
                    </span>

                    {/* Основной заголовок — строгий, но нежный */}
                    <h2 className="mt-2 text-3xl font-light leading-[1.2] tracking-wide text-[rgb(var(--cl-header))] sm:text-4xl md:text-5xl">
                        {welcomeSection.title}
                    </h2>

                    {/* Подзаголовок — мягкий, уточняющий */}
                    <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-[rgb(var(--cl-p))] md:text-lg">
                        {welcomeSection.subtitle}
                    </p>
                </hgroup>

                <div className="md:col-start-1">
                    {welcomeSection.paragraphs.map((paragraph) => (
                        <p
                            key={paragraph}
                            className="mb-3 last:mb-0"
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-start gap-6 md:col-start-1">
                    <ContactButton />
                    <Button
                        mode="--light"
                        href={welcomeSection.buttons.github.href}
                        external
                        className="inline-flex items-center gap-2"
                    >
                        {welcomeSection.buttons.github.label}
                        <SvgIcon id="github" width={20} height={20} />
                    </Button>
                    <Button
                        href={welcomeSection.buttons.resume.href}
                        external
                        className="inline-flex items-center gap-2"
                    >
                        {welcomeSection.buttons.resume.label}
                        <SvgIcon id="download" width={20} height={20} />
                    </Button>
                </div>
            </section>

            {/* ============================================
            🎨 SKILLS — Волшебная палитра
            ============================================ */}
            <section className="contain" aria-labelledby="skills-heading">
                <h2
                    id="skills-heading"
                    className="mb-10 text-h1 font-medium text-[rgb(var(--cl-header))]"
                >
                    {skillsSection.title}{" "}
                    <span className="font-extrabold">
                        {skillsSection.titleBold}
                    </span>
                </h2>

                <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
                    {data.stack.map((item) => (
                        <li
                            key={item.iconId}
                            className="relative flex flex-col items-center justify-between rounded border-2 border-[rgb(var(--background-invert))] p-6 text-center"
                        >
                            <SvgIcon
                                className="mb-8 h-14 w-14 text-[rgb(var(--background-invert))]"
                                width={56}
                                height={56}
                                id={item.iconId}
                            />
                            <h3 className="mt-auto text-h2 font-semibold text-[rgb(var(--cl-header))]">
                                {item.name}
                            </h3>
                            <p className="absolute bottom-0 text-p3">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ============================================
            🗺️ EXPERIENCE — Карта приключений
            ============================================ */}
            <section
                className="contain contain--invert"
                aria-labelledby="experience-heading"
            >
                <h2
                    id="experience-heading"
                    className="mb-10 text-h1 font-extrabold text-[rgb(var(--cl-header))]"
                >
                    {experienceSection.title}
                </h2>

                <ul className="grid grid-cols-1 gap-5">
                    {data.experience.map((item) => (
                        <li
                            key={`${item.title}-${item.date}`}
                            className="grid grid-cols-1 gap-8 rounded-xl border border-[rgb(var(--border-neutral))] p-6 md:grid-cols-[1fr_max-content] even:bg-[rgb(var(--background-middle))]"
                        >
                            <h3 className="text-h2 font-semibold tracking-[0.05em] text-[rgb(var(--cl-header))]">
                                {item.title}
                            </h3>
                            <p className="font-semibold text-[rgb(var(--cl-header))]">
                                {item.date}
                            </p>
                            <p className="font-semibold italic text-[rgb(var(--cl-header))] md:col-span-2">
                                {item.slogan}
                            </p>
                            <p className="whitespace-pre-wrap md:col-span-2 md:max-w-[700px]">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ============================================
            📜 RECOMMENDATIONS
            ============================================ */}
            <section
                className="contain"
                aria-labelledby="recommendations-heading"
            >
                <h2
                    id="recommendations-heading"
                    className="mb-10 text-h1 font-extrabold text-[rgb(var(--cl-header))]"
                >
                    {recommendationsSection.title}
                </h2>

                <ul className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {data.recommendations.map((item, index) => (
                        <li
                            key={item.docLink}
                            className="rounded-2xl border border-[rgb(var(--border-neutral))] bg-[rgb(var(--background))] text-center shadow-[0_6px_8px_rgba(var(--background-invert),0.12)] even:bg-[rgb(var(--background-middle))] even:text-[rgb(var(--cl-p-invert))]"
                        >
                            <Popover
                                id={index}
                                openLabel={recommendationsSection.openLabel(
                                    item.name,
                                )}
                                dialogContent={
                                    <Image
                                        className="h-full w-full object-contain"
                                        src={item.docLink}
                                        alt={recommendationsSection.imageAlt(
                                            item.name,
                                        )}
                                        width={630}
                                        height={630}
                                    />
                                }
                                btnContent={
                                    <div className="inline-flex flex-col gap-6 p-6">
                                        <SvgIcon
                                            className="mx-auto h-14 w-full"
                                            width={56}
                                            height={56}
                                            id={item.iconId}
                                        />
                                        <p className="flex-1">{item.desc}</p>
                                        <div className="relative flex flex-col items-center">
                                            <p className="text-h2 font-semibold text-[rgb(var(--cl-header))]">
                                                {item.name}
                                            </p>
                                            <p className="font-semibold text-[rgb(var(--cl-header))]">
                                                {item.position}
                                            </p>
                                            <span className="mt-6 block h-0.5 w-30 bg-[rgb(var(--bg))]" />
                                        </div>
                                    </div>
                                }
                            />
                        </li>
                    ))}
                </ul>
            </section>

            {/* ============================================
            🌸 REVIEWS
            ============================================ */}
            <section className="contain" aria-labelledby="reviews-heading">
                <h2
                    id="reviews-heading"
                    className="mb-10 text-h1 font-extrabold text-[rgb(var(--cl-header))]"
                >
                    {reviewsSection.title}
                </h2>

                <ul className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {data.reviews.map((item) => (
                        <li
                            key={`${item.name}-${item.position}`}
                            className="flex flex-col gap-6 rounded-2xl border border-[rgb(var(--border-neutral))] bg-[rgb(var(--background))] p-6 text-center shadow-[0_6px_8px_rgba(var(--background-invert),0.12)] even:bg-[rgb(var(--background-middle))] even:text-[rgb(var(--cl-p-invert))]"
                        >
                            <SvgIcon
                                className="mx-auto h-14 w-14 rounded-full border border-[rgb(var(--border-neutral))] p-4"
                                width={56}
                                height={56}
                                id="quote"
                                decorative
                            />
                            <blockquote className="flex-1">
                                <p>{item.desc}</p>
                            </blockquote>
                            <div className="relative flex flex-col items-center">
                                <p className="text-h2 font-semibold text-[rgb(var(--cl-header))]">
                                    {item.name}
                                </p>
                                <p className="font-semibold text-[rgb(var(--cl-header))]">
                                    {item.position}
                                </p>
                                <span className="mt-6 block h-0.5 w-30 bg-[rgb(var(--bg))]" />
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ============================================
            🪞 CONTACT
            ============================================ */}
            <section className="contain" aria-labelledby="contact-heading">
                <h2
                    id="contact-heading"
                    className="mb-4 text-h1 font-medium text-[rgb(var(--cl-header))]"
                >
                    <span className="font-extrabold">
                        {contactSection.titleBold1}
                    </span>
                    <br />
                    {contactSection.titleMiddle}
                    <br />
                    <span className="font-extrabold">
                        {contactSection.titleBold2}
                    </span>{" "}
                    <a
                        href={contactSection.telegramHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-extrabold"
                    >
                        {contactSection.telegramHandle}
                    </a>
                    .
                </h2>
                <p className="mb-8">{contactSection.desk}</p>
                <ContactButton />
            </section>

            {/* ============================================
            🧭 FAST SITES LINK
            ============================================ */}
            <div className="contain text-center">
                <Link
                    href={fastSitesLink.href}
                    className="font-extrabold text-[rgb(var(--cl-header))]"
                >
                    {fastSitesLink.text}
                </Link>
            </div>
        </article>
    );
}
