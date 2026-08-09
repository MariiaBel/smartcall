import { Metadata } from "next";
import Link from "next/link";
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
import Image from "next/image";
import ContactButton from "@/app/ui/button/contact-button";
import SvgIcon from "@/app/ui/svgIcon/svgIcon";
import Button from "@/app/ui/button/button";

export const metadata: Metadata = {
    title: fastSitesMetadata.title,
    description: fastSitesMetadata.description,
};

export default function FastSitesPage() {
    return (
        <div className="">
            {/* Hero Section */}
            <section className=" contain grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <h1 className="h1 mb-10 ">
                        {hero.title}
                        <br />
                        <span className="--extraBold">{hero.titleBold}</span>
                    </h1>

                    <p
                        className="text-lg mb-4 max-w-3xl"
                        style={{ color: "rgb(113, 113, 122)" }}
                    >
                        {hero.introBeforeLink}{" "}
                        <Link
                            href="/"
                            className="--extraBold"
                            style={{ color: "rgb(55, 25, 25)" }}
                        >
                            {hero.introLinkText}
                        </Link>{" "}
                        {hero.introAfterLink}
                    </p>
                    {hero.description &&
                        hero.description.map((item, idx) => (
                            <p
                                key={idx}
                                className="mb-8 max-w-3xl"
                                style={{ color: "rgb(113, 113, 122)" }}
                            >
                                {item}
                            </p>
                        ))}
                    <div className="flex gap-4  flex-wrap">
                        <Button href="https://t.me/MariiaBel" external>
                            {hero.primaryButton}
                        </Button>
                        <Button href="#pricing" mode="--light">
                            {hero.secondaryButton}
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center  mb-8 order-[-1] md:order-1">
                    <Image
                        src="/fast-siites.svg"
                        alt={hero.imageAlt}
                        width={200}
                        height={200}
                        className="img object-top max-w-[300px] "
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="contain">
                <h2 className="h1 mb-12">
                    {benefitsSection.title}{" "}
                    <span className="--extraBold">
                        {benefitsSection.titleBold}
                    </span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="border rounded-lg p-6 transition-shadow hover:shadow-lg"
                            style={{
                                borderColor: "rgb(125, 115, 115)",
                                backgroundColor: "rgb(255, 255, 255)",
                            }}
                        >
                            <h3 className="h2 mb-3">{benefit.title}</h3>
                            <p style={{ color: "rgb(113, 113, 122)" }}>
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Project Types Section */}
            <section className="contain contain--invert">
                <h2 className="h1 mb-10">
                    {projectTypesSection.title}{" "}
                    <span className="--extraBold">
                        {projectTypesSection.titleBold}
                    </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4 ">
                    {projectTypes.map((project, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 rounded-lg p-4 border"
                            style={{
                                backgroundColor: "rgb(50, 30, 30)",
                                borderColor: "rgb(125, 115, 115)",
                                color: "rgb(212, 212, 216)",
                            }}
                        >
                            <span style={{ color: "rgb(212, 212, 216)" }}>
                                ✓
                            </span>
                            <span>{project}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Section */}
            <section className="contain">
                <h2 className="h1 mb-10">
                    {comparisonSection.title}{" "}
                    <span className="--extraBold">
                        {comparisonSection.titleBold}
                    </span>{" "}
                    {comparisonSection.titleAfterBold}
                </h2>

                <p className=" rounded-lg p-6 relative border border-border mt-8 text-xl ">
                    <span className="--extraBold">
                        {comparisonSection.highlight}
                    </span>{" "}
                    <br />
                    {comparisonSection.text}
                </p>
            </section>

            {/* Expert Comparison Section */}
            <section className="contain">
                <h2 className="h1 mb-10">
                    {expertComparisonSection.title}{" "}
                    <span className="--extraBold">
                        {expertComparisonSection.titleBold}
                    </span>{" "}
                    {expertComparisonSection.titleAfterBold}
                </h2>

                <p className=" rounded-lg p-6 relative border border-border mt-8 text-xl ">
                    <span className="--extraBold">
                        {expertComparisonSection.highlight}
                    </span>{" "}
                    <br />
                    {expertComparisonSection.text}
                </p>
            </section>

            {/* Work Steps */}
            <section className="contain contain--invert">
                <h2 className="h1 mb-10">
                    {stepsSection.title}{" "}
                    <span className="--extraBold">
                        {stepsSection.titleBold}
                    </span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="rounded-lg p-6 border bg-secondary"
                            style={{
                                borderColor: "rgb(125, 115, 115)",
                                color: "rgb(212, 212, 216)",
                            }}
                        >
                            <div className=" font-bold mb-2">{step.number}</div>
                            <h3 className="text-xl font-bold mb-3 tracking-[0.05em]">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="contain">
                <h2 className="h1 mb-6">
                    {pricingSection.title}{" "}
                    <span className="--extraBold">
                        {pricingSection.titleBold}
                    </span>
                </h2>
                <p className="mb-10">{pricingSection.subtitle}</p>

                <div className="grid md:grid-cols-2 gap-6 ">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.title}
                            className="rounded-lg p-6 relative border border-border"
                        >
                            {plan.badge && (
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm bg-primary text-background">
                                    {plan.badge}
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-primary mb-3 tracking-[0.05em]">
                                {plan.title}
                            </h3>
                            <p
                                className="mb-4"
                                style={{ color: "rgb(113, 113, 122)" }}
                            >
                                {plan.subtitle}
                            </p>
                            {plan.rate && (
                                <div
                                    className="text-3xl font-bold mb-4"
                                    style={{ color: "rgb(55, 25, 25)" }}
                                >
                                    {plan.rate}{" "}
                                    <span
                                        className="text-lg font-normal"
                                        style={{ color: "rgb(113, 113, 122)" }}
                                    >
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
                                        <span>✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Me Section */}
            <section className="contain">
                <h2 className="h1 mb-10">
                    {whyMeSection.title}{" "}
                    <span className={whyMeSection.titleBoldClassName}>
                        {whyMeSection.titleBold}
                    </span>
                </h2>
                <div className="grid lg:grid-cols-4 gap-6 ">
                    {whyMeItems.map((item) => (
                        <div
                            key={item.title}
                            className={`flex flex-col rounded-lg p-6 border border-border${item.variant === "primary" ? " bg-primary text-muted-foreground" : ""}`}
                        >
                            <h3
                                className={`text-xl font-bold mb-3 tracking-[0.05em]${item.variant === "primary" ? " text-background" : " text-primary"}`}
                            >
                                {item.title}
                            </h3>
                            <p
                                className={`text-base leading-relaxed${item.link ? " mb-3" : " mb-6"}`}
                            >
                                {item.description}
                            </p>
                            {item.link && (
                                <Link
                                    href={item.link.href}
                                    className="--extraBold mb-6"
                                    style={{ color: "rgb(55, 25, 25)" }}
                                >
                                    {item.link.text}
                                </Link>
                            )}
                            <SvgIcon
                                className={`${item.variant === "primary" ? "text-background" : "text-primary"} ml-auto mt-auto`}
                                width={56}
                                height={56}
                                id={item.iconId}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="contain relative overflow-hidden">
                <h2 className="h1 mb-10">
                    {ctaSection.title}{" "}
                    <span className="--extraBold">{ctaSection.titleBold}</span>
                </h2>

                <p
                    className="text-lg mb-6 max-w-3xl "
                    style={{ color: "rgb(113, 113, 122)" }}
                >
                    {ctaSection.description}
                </p>

                <ContactButton />
            </section>

            {/* Back to Home */}
            <div className="contain text-center  ">
                <Link
                    href={backLink.href}
                    className="--extraBold"
                    style={{ color: "rgb(55, 25, 25)" }}
                >
                    {backLink.text}
                </Link>
            </div>
        </div>
    );
}
