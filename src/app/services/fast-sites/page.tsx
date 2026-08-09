import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactButton from "@/app/ui/button/contact-button";
import SvgIcon from "@/app/ui/svgIcon/svgIcon";
import Button from "@/app/ui/button/button";
import {
    backLink,
    benefits,
    benefitsSection,
    comparisonSection,
    expertComparisonSection,
    ctaSection,
    fastSitesMetadata,
    hero,
    pricingPlans,
    pricingSection,
    projectTypes,
    projectTypesSection,
    steps,
    stepsSection,
    whyMeItems,
    whyMeSection,
} from "@/app/constants/fast-sites";

export const metadata: Metadata = {
    title: fastSitesMetadata.title,
    description: fastSitesMetadata.description,
};

export default function FastSitesPage() {
    return (
        <div>
            {/* ============================================
            🧙‍♀️ WELCOME — Hero
            ============================================ */}
            <section
                className="contain grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-[min-content_min-content_min-content] md:items-start"
                aria-label={hero.title}
            >
                <Image
                    className="mx-auto max-h-[400px] w-full max-w-[630px] object-contain md:col-start-2 md:row-span-3 md:mx-0"
                    src="/fast-siites.svg"
                    alt={hero.imageAlt}
                    width={630}
                    height={630}
                    priority
                />

                <hgroup className="md:col-start-1 md:row-start-1">
                    {/* Приветствие — лёгкое, как утренний свет */}
                    <span className="block text-sm font-light uppercase tracking-[0.2em] text-[rgb(var(--cl-p))]">
                        {hero.greeting}
                    </span>

                    {/* Основной заголовок — строгий, но нежный */}
                    <h2 className="mt-2 text-3xl font-light leading-[1.2] tracking-wide text-[rgb(var(--cl-header))] sm:text-4xl md:text-5xl">
                        {hero.title}
                    </h2>

                    {/* Подзаголовок — мягкий, уточняющий */}
                    <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-[rgb(var(--cl-p))] md:text-lg">
                        {hero.subtitle}
                    </p>
                </hgroup>

                <div className="md:col-start-1">
                    {hero.paragraphs.map((paragraph) => (
                        <p
                            key={paragraph}
                            className="mb-3 last:mb-0"
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-start gap-6 md:col-start-1">
                    <Button
                        href="https://t.me/MariiaBel"
                        external
                        className="inline-flex items-center gap-2"
                    >
                        {hero.primaryButton}
                    </Button>
                    <Button
                        href="#pricing"
                        mode="--light"
                        className="inline-flex items-center gap-2"
                    >
                        {hero.secondaryButton}
                    </Button>
                </div>
            </section>

            {/* ============================================
            🎁 BENEFITS — Что входит
            ============================================ */}
            <section className="contain">
                <h2 className="mb-10 text-h1 font-light text-[rgb(var(--cl-header))]">
                    {benefitsSection.title}{" "}
                    <span className="font-medium text-[rgb(var(--primary))]">
                        {benefitsSection.titleBold}
                    </span>
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] p-6 transition-shadow hover:shadow-md"
                        >
                            <h3 className="mb-3 text-h2 font-medium text-[rgb(var(--cl-header))]">
                                {benefit.title}
                            </h3>
                            <p className="text-[rgb(var(--cl-p))]">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============================================
            🏗️ PROJECT TYPES — Какие проекты
            ============================================ */}
            <section className="contain contain--invert">
                <h2 className="mb-10 text-h1 font-light text-[rgb(var(--cl-header))]">
                    {projectTypesSection.title}{" "}
                    <span className="font-medium text-[rgb(var(--accent))]">
                        {projectTypesSection.titleBold}
                    </span>
                </h2>

                <div className="grid gap-3 md:grid-cols-2">
                    {projectTypes.map((project, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 rounded-lg border border-[rgb(var(--border-neutral))] bg-[rgb(var(--background-middle))] p-4 text-[rgb(var(--cl-p-invert))]"
                        >
                            <span className="text-[rgb(var(--accent))]">✓</span>
                            <span>{project}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============================================
            🍎 COMPARISON — Почему решение эффективнее
            ============================================ */}
            <section className="contain">
                <h2 className="mb-6 text-h1 font-light text-[rgb(var(--cl-header))]">
                    {comparisonSection.title}{" "}
                    <span className="font-medium text-[rgb(var(--primary))]">
                        {comparisonSection.titleBold}
                    </span>{" "}
                    {comparisonSection.titleAfterBold}
                </h2>

                <div className="relative mt-8 rounded-xl border border-[rgb(var(--border))] p-6 text-xl">
                    <span className="font-medium text-[rgb(var(--primary))]">
                        {comparisonSection.highlight}
                    </span>
                    <br />
                    {comparisonSection.text}
                </div>
            </section>

            {/* ============================================
            👩‍💻 EXPERT COMPARISON — Почему эксперт
            ============================================ */}
            <section className="contain">
                <h2 className="mb-6 text-h1 font-light text-[rgb(var(--cl-header))]">
                    {expertComparisonSection.title}{" "}
                    <span className="font-medium text-[rgb(var(--primary))]">
                        {expertComparisonSection.titleBold}
                    </span>{" "}
                    {expertComparisonSection.titleAfterBold}
                </h2>

                <div className="relative mt-8 rounded-xl border border-[rgb(var(--border))] p-6 text-xl">
                    <span className="font-medium text-[rgb(var(--primary))]">
                        {expertComparisonSection.highlight}
                    </span>
                    <br />
                    {expertComparisonSection.text}
                </div>
            </section>

            {/* ============================================
            🗺️ STEPS — Как строим
            ============================================ */}
            <section className="contain contain--invert">
                <h2 className="mb-10 text-h1 font-light text-[rgb(var(--cl-header))]">
                    {stepsSection.title}{" "}
                    <span className="font-medium text-[rgb(var(--accent))]">
                        {stepsSection.titleBold}
                    </span>
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="rounded-xl border border-[rgb(var(--border-neutral))] bg-[rgb(var(--background-middle))] p-6 text-[rgb(var(--cl-p-invert))]"
                        >
                            <div className="mb-2 text-2xl font-medium text-[rgb(var(--accent))]">
                                {step.number}
                            </div>
                            <h3 className="mb-3 text-xl font-medium tracking-[0.05em]">
                                {step.title}
                            </h3>
                            <p className="text-[rgb(var(--cl-p-invert))] opacity-80">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============================================
            💰 PRICING — Стоимость
            ============================================ */}
            <section id="pricing" className="contain">
                <h2 className="mb-2 text-h1 font-light text-[rgb(var(--cl-header))]">
                    {pricingSection.title}{" "}
                    <span className="font-medium text-[rgb(var(--primary))]">
                        {pricingSection.titleBold}
                    </span>
                </h2>
                <p className="mb-10 text-[rgb(var(--cl-p))]">
                    {pricingSection.subtitle}
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.title}
                            className="relative rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] p-6"
                        >
                            {plan.badge && (
                                <div className="absolute right-4 top-4 rounded-full bg-[rgb(var(--primary))] px-3 py-1 text-sm text-[rgb(var(--primary-foreground))]">
                                    {plan.badge}
                                </div>
                            )}
                            <h3 className="mb-2 text-xl font-medium text-[rgb(var(--cl-header))] tracking-[0.05em]">
                                {plan.title}
                            </h3>
                            <p className="mb-4 text-[rgb(var(--cl-p))]">
                                {plan.subtitle}
                            </p>
                            {plan.rate && (
                                <div className="mb-4 text-3xl font-bold text-[rgb(var(--cl-header))]">
                                    {plan.rate}{" "}
                                    <span className="text-lg font-normal text-[rgb(var(--cl-p))]">
                                        {plan.rateUnit}
                                    </span>
                                </div>
                            )}
                            <ul className="space-y-3">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="text-[rgb(var(--accent))]">
                                            ✓
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============================================
            🧙‍♀️ WHY ME — Почему я
            ============================================ */}
            <section className="contain">
                <h2 className="mb-10 text-h1 font-light text-[rgb(var(--cl-header))]">
                    {whyMeSection.title}{" "}
                    <span className="font-medium text-[rgb(var(--primary))]">
                        {whyMeSection.titleBold}
                    </span>
                </h2>

                <div className="grid gap-6 lg:grid-cols-4">
                    {whyMeItems.map((item) => (
                        <div
                            key={item.title}
                            className={`flex flex-col rounded-xl border border-[rgb(var(--border))] p-6 ${
                                item.variant === "primary"
                                    ? "bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))]"
                                    : "bg-[rgb(var(--background))]"
                            }`}
                        >
                            <h3
                                className={`mb-3 text-xl font-medium tracking-[0.05em] ${
                                    item.variant === "primary"
                                        ? "text-[rgb(var(--primary-foreground))]"
                                        : "text-[rgb(var(--cl-header))]"
                                }`}
                            >
                                {item.title}
                            </h3>
                            <p
                                className={`mb-6 flex-1 text-base leading-relaxed ${
                                    item.variant === "primary"
                                        ? "text-[rgb(var(--primary-foreground))] opacity-90"
                                        : "text-[rgb(var(--cl-p))]"
                                }`}
                            >
                                {item.description}
                            </p>
                            {item.link && (
                                <Link
                                    href={item.link.href}
                                    className="mb-4 font-medium text-[rgb(var(--cl-header))] hover:underline"
                                >
                                    {item.link.text}
                                </Link>
                            )}
                            <SvgIcon
                                className={`ml-auto mt-auto ${
                                    item.variant === "primary"
                                        ? "text-[rgb(var(--primary-foreground))]"
                                        : "text-[rgb(var(--cl-header))]"
                                }`}
                                width={56}
                                height={56}
                                id={item.iconId}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* ============================================
            🪞 CTA — Призыв
            ============================================ */}
            <section className="contain relative overflow-hidden">
                <h2 className="mb-4 text-h1 font-light text-[rgb(var(--cl-header))]">
                    {ctaSection.title}{" "}
                    <span className="font-medium text-[rgb(var(--primary))]">
                        {ctaSection.titleBold}
                    </span>
                </h2>
                <p className="mb-6 max-w-3xl text-lg text-[rgb(var(--cl-p))]">
                    {ctaSection.description}
                </p>
                <ContactButton />
            </section>

            {/* ============================================
            🔙 BACK LINK
            ============================================ */}
            <div className="contain text-center">
                <Link
                    href={backLink.href}
                    className="font-medium text-[rgb(var(--cl-header))] hover:underline"
                >
                    {backLink.text}
                </Link>
            </div>
        </div>
    );
}
