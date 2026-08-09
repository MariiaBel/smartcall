import Image from "next/image";
import styles from "./page.module.css";
import Button from "./ui/button/button";
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
import SvgIcon from './ui/svgIcon/svgIcon';
import Popover from "./ui/popover/popover";
import Link from "next/link";
import ContactButton from "./ui/button/contact-button";

export default function Home() {
    return (
        <article>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
            />
            <h1 className="text-hidden">{hiddenTitle}</h1>
            <section className={styles.welcome + ' contain'} aria-label={welcomeSection.ariaLabel}>
                <Image
                    className={styles.img + ' img'}
                    src="/girl-coding.svg"
                    alt={welcomeSection.imageAlt}
                    width={630}
                    height={630}
                    priority
                />
                <hgroup className={`h1 ${styles.hgroup}`}>
                    <span>{welcomeSection.greeting}</span>
                    <span>
                        {welcomeSection.nameIntro}{' '}
                        <span className="--extraBold">{welcomeSection.nameBold}</span>
                    </span>
                    <span>
                        {welcomeSection.roleIntro}{' '}
                        <span className="--extraBold">{welcomeSection.roleBold}</span>
                    </span>
                    <h2>
                        <span className="--outside --extraBold">{welcomeSection.titleDeveloper}</span>
                        &nbsp; {welcomeSection.titleAnd} &nbsp;
                        <span className="--outside --extraBold">{welcomeSection.titleMentor}</span>
                    </h2>
                </hgroup>
                <p>{welcomeSection.description}</p>
                <div className={styles.btns}>
                    <ContactButton />
                    <Button
                        className={styles.btn}
                        mode="--light"
                        href={welcomeSection.buttons.github.href}
                        external
                    >
                        {welcomeSection.buttons.github.label}
                        <SvgIcon id="github" width={20} height={20} className={styles.icon} />
                    </Button>
                    <Button
                        className={styles.btn}
                        href={welcomeSection.buttons.resume.href}
                        external
                    >
                        {welcomeSection.buttons.resume.label}
                        <SvgIcon id="download" width={20} height={20} className={styles.icon} />
                    </Button>
                </div>
            </section>


            <section className={styles.skills + ' contain'} aria-labelledby="skills-heading">
                <h2 id="skills-heading" className={styles.header + ' h1'}>
                    {skillsSection.title}{' '}
                    <span className="--extraBold">{skillsSection.titleBold}</span>
                </h2>
                <ul className={styles.stacks}>
                    {
                        data.stack.map((item) => (
                            <li key={item.iconId} className={styles.stack}>
                                <SvgIcon className={styles.stackIcon} width={56} height={56} id={item.iconId} />
                                <h3 className={styles.stackTitle + " h2 --bold"}>{item.name}</h3>
                                <p className={styles.stackDesc}>{item.description}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <section className={'contain contain--invert'} aria-labelledby="experience-heading">
                <h2 id="experience-heading" className={styles.header + ' h1'}>
                    {experienceSection.title}{' '}
                    <span className="--extraBold">{experienceSection.titleBold}</span>
                </h2>
                <ul className={styles.experience}>
                    {data.experience.map((item) => (
                        <li key={`${item.title}-${item.date}`} className={styles.experienceItem}>
                            <h3 className=" h2 --bold tracking-[0.05em]">{item.title}</h3>
                            <p className='--bold'>{item.date}</p>
                            <p className={styles.experienceDesc}>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={'contain'} aria-labelledby="recommendations-heading">
                <h2 id="recommendations-heading" className={styles.header + ' h1 --extraBold'}>
                    {recommendationsSection.title}
                </h2>
                <ul className={styles.recommendations}>
                    {
                        data.recommendations.map((item, key) => (
                            <li key={item.docLink} className={styles.recommendation}>
                                <Popover
                                    id={key}
                                    openLabel={recommendationsSection.openLabel(item.name)}
                                    dialogContent={<Image
                                        className={`img`}
                                        src={item.docLink}
                                        alt={recommendationsSection.imageAlt(item.name)}
                                        width={630}
                                        height={630}
                                    />}

                                    btnContent={(<div className={styles.recommendationContent} ><SvgIcon className={styles.recommendationIcon} width={56} height={56} id={item.iconId} />
                                        <p className={styles.recommendationDesc}>{item.desc}</p>
                                        <p className={styles.recommendationName + ' h2 --bold'}>{item.name}</p>
                                        <p className={styles.recommendationPosition + ' --bold'}>{item.position}</p></div>)}
                                />
                            </li>
                        ))
                    }
                </ul>
            </section>

            <section className={'contain'} aria-labelledby="reviews-heading">
                <h2 id="reviews-heading" className={styles.header + ' h1 --extraBold'}>
                    {reviewsSection.title}
                </h2>
                <ul className={styles.recommendations}>
                    {
                        data.reviews.map((item) => (
                            <li key={`${item.name}-${item.position}`} className={[styles.recommendationContent, styles.recommendation].join(' ')}>
                                <SvgIcon className={styles.recommendationQuote} width={18} height={18} id='quote' decorative />
                                <blockquote className={styles.recommendationDesc}>
                                    <p>{item.desc}</p>
                                </blockquote>
                                <p className={styles.recommendationName + ' h2 --bold'}>{item.name}</p>
                                <p className={styles.recommendationPosition + ' --bold'}>{item.position}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>


            <section className={'contain'} aria-labelledby="contact-heading">
                <h2 id="contact-heading" className={`h1 ${styles.header}`}>
                    <span className="--extraBold">{contactSection.titleBold1}</span>{' '}
                    {contactSection.titleMiddle}{' '}
                    <span className="--extraBold">{contactSection.titleBold2}</span>{' '}
                    <a
                        href={contactSection.telegramHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="--outside --extraBold"
                    >
                        {contactSection.telegramHandle}
                    </a>.
                </h2>
                <ContactButton />
            </section>


            <div className="contain text-center  ">
                <Link href={fastSitesLink.href} className="--extraBold" style={{ color: 'rgb(55, 25, 25)' }}>
                    {fastSitesLink.text}
                </Link>
            </div>
        </article>
    );
}
