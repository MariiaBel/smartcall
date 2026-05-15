import Image from "next/image";
import styles from "./page.module.css";
import Button from "./ui/button/button";
import { data } from "./constants/homepage";
import { SITE_URL } from "./constants/site";
import SvgIcon from './ui/svgIcon/svgIcon';
import Popover from "./ui/popover/popover";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Мария",
  jobTitle: "Фронтенд-разработчик и ментор",
  url: SITE_URL,
  knowsAbout: ["JavaScript", "HTML", "CSS", "React", "Vue", "Angular", "вёрстка"],
  sameAs: [
    "https://github.com/mariiabel",
    "https://t.me/MariiaBel",
  ],
};

export default function Home() {
  return (
      <article>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <h1 className="text-hidden">Мария — фронтенд-разработчик, HTML-верстальщик и веб-ментор</h1>
        <section className={styles.welcome + ' contain'} aria-label="О себе">
          <Image
            className={styles.img + ' img'}
            src="/girl-coding.svg"
            alt="Иллюстрация: разработчик пишет код за компьютером"
            width={630}
            height={630}
            priority
          />
          <hgroup className={`h1 ${styles.hgroup}`}>
            <span>Привет &#9788;</span>
            <span>Меня зовут <span className="--extraBold">Мария.</span></span>
            <span>Я практикующий <span className="--extraBold">фронтенд</span></span>
            <h2>
              <span className="--outside --extraBold">разработчик</span> &nbsp; и &nbsp; <span className="--outside --extraBold">ментор</span>
            </h2>
          </hgroup>
          <p>Занимаюсь фронтенд-разработкой с 2012 года. На профессиональном уровне владею JavaScript, HTML и CSS. Создаю веб-ресурсы на React, Vue и Angular. Могу научить писать хорошо поддерживаемый код и помочь с вашей рабочей задачей.</p>
          <div className={styles.btns}>
            <Button className={styles.btn} href="https://t.me/MariiaBel" external>
              Написать в Telegram
              <SvgIcon id="telegram" width={20} height={20} className={styles.icon} />
            </Button>
            <Button className={styles.btn} modificator="--light" href="https://github.com/mariiabel" external>
              GitHub
              <SvgIcon id="github" width={20} height={20} className={styles.icon} />
            </Button>
            <Button className={styles.btn} href="https://docs.google.com/document/d/1TJjPASplxayaZkBXZ2a5MfP4-V-_IUm_52GSav14f3M/edit?usp=sharing" external>
                Скачать резюме
                <SvgIcon id="download" width={20} height={20} className={styles.icon} />
            </Button>
          </div>
        </section>


        <section className={styles.skills + ' contain'} aria-labelledby="skills-heading">
          <h2 id="skills-heading" className={styles.header + ' h1'}>Стек <span className="--extraBold">технологий</span></h2>
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
          <h2 id="experience-heading" className={styles.header + ' h1'}>Профессиональный <span className="--extraBold">опыт</span></h2>
          <ul className={styles.experience}>
            {data.experience.map((item) => (
              <li key={`${item.title}-${item.date}`} className={styles.experienceItem}>
                <h3 className=" h2 --bold">{item.title}</h3>
                <p className='--bold'>{item.date}</p>
                <p className={styles.experienceDesc}>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={'contain'} aria-labelledby="recommendations-heading">
          <h2 id="recommendations-heading" className={styles.header + ' h1 --extraBold'}>Рекомендации</h2>
          <ul className={styles.recommendations}>
            {
              data.recommendations.map((item, key) => (
                <li key={item.docLink} className={styles.recommendation}>
                  <Popover
                    id={key}
                    openLabel={`Открыть рекомендацию: ${item.name}`}
                    dialogContent={<Image
                      className={`img`}
                      src={item.docLink}
                      alt={`Рекомендательное письмо: ${item.name}`}
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
          <h2 id="reviews-heading" className={styles.header + ' h1 --extraBold'}>Отзывы</h2>
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
            <h2 id="contact-heading" className={`h1 ${styles.header}`}><span className="--extraBold">Связаться</span> со мной можно через <span className="--extraBold">Telegram</span>{' '}
              <a href="https://t.me/MariiaBel" target="_blank" rel="noopener noreferrer" className="--outside --extraBold">@MariiaBel</a>.
            </h2>
          <Button className={styles.btn} href="https://t.me/MariiaBel" external>
            Написать в Telegram
            <SvgIcon id="telegram" width={20} height={20} className={styles.icon} />
          </Button>
        </section>
      </article>
  );
}
