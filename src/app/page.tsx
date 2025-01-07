// "use client";

import Image from "next/image";
import styles from "./page.module.css";
import Button from "./ui/button/button";
import { data } from "./constants/homepage";
import SvgIcon from './ui/svgIcon/svgIcon';

export default function Home() {

  return (
      <article>
        <h1 className='text-hidden'>Фронтенд разработчик, html верстальщик и веб ментор</h1>
        <section className={styles.welcome + ' contain'}>
          <Image
            className={styles.img + ' img'}
            src="/girl-coding.svg"
            alt="frontend developer coding"
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
          <p>Занимаюсь фронтенд разработкой с 2012 года. На профессиональном уровне владею JavaScript, HTML и CSS. Создаю веб ресурсы на React, Vue и Angular. Могу научить писать хорошо поддерживаемый код и помочь с вашей рабочей задачей.</p>
          <div className={styles.btns}>
            <Button className={styles.btn} href="https://t.me/MariiaBel" external>
              Написать 
              <SvgIcon id="telegram" width={20} height={20} className={styles.icon} aria-label="contact with frontend developer" />
            </Button>
            <Button className={styles.btn} modificator="--light" href="https://github.com/mariiabel" external>
              GitHub
              <SvgIcon id="github" width={20} height={20} className={styles.icon} aria-label="contact with frontend developer" />
            </Button>
            <Button className={styles.btn} href="https://docs.google.com/document/d/1TJjPASplxayaZkBXZ2a5MfP4-V-_IUm_52GSav14f3M/edit?usp=sharing" external>
                Резюме 
                <SvgIcon id="download" width={20} height={20} />
            </Button>
          </div>
        </section>


        <section className={styles.skills + ' contain'}>
          <h2 className={styles.header + ' h1'}>Стек <span className="--extraBold">технологий</span></h2>
          <ul className={styles.stacks}>
            {
              data.stack.map((item, key) => (
                <li key={key} className={styles.stack}>
                  <SvgIcon className={styles.stackIcon} width={56} height={56} id={item.iconId} />
                  <h3 className={styles.stackTitle + " h2 --bold"}>{item.name}</h3>
                  <p className={styles.stackDesc}>{item.description}</p>
                </li>
              ))
            }
          </ul>
        </section>

        <section className={'contain contain--invert'}>
          <h2 className={styles.header + ' h1'}>Профессиональный <span className="--extraBold">опыт</span></h2>
          <ul className={styles.experience}>
            {data.experience.map((item, key)=> (
              <li key={key} className={styles.experienceItem}>
                <h3 className=" h2 --bold">{item.title}</h3>
                <p className='--bold'>{item.date}</p>
                <p className={styles.experienceDesc}>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={'contain'}>
          <h2 className={styles.header + ' h1 --extraBold'}>Рекомендации</h2>
          <ul className={styles.recommendations}>
            {
              data.recommendations.map((item, key) => (
                <li key={key} className={styles.recommendation}>
                  <a href={item.docLink} target="_blank" className={styles.recommendationLink}>
                    <SvgIcon className={styles.recommendationIcon} width={56} height={56} id={item.iconId} />
                    <p className={styles.recommendationDesc}>{item.desc}</p>
                    <p className={styles.recommendationName + ' h2 --bold'}>{item.name}</p>
                    <p className={styles.recommendationPosition + ' --bold'}>{item.position}</p>
                  </a>
                </li>
              ))
            }
          </ul>
        </section>

        <section className={'contain'}>
          <h2 className={styles.header + ' h1 --extraBold'}>Отзывы</h2>
          <ul className={styles.recommendations}>
            {
              data.reviews.map((item, key) => (
                <li key={key} className={[styles.recommendationLink, styles.recommendation].join(' ')}>
                    <SvgIcon className={styles.recommendationQuote} width={18} height={18} id='quote' />
                    <p className={styles.recommendationDesc}>{item.desc}</p>
                    <p className={styles.recommendationName + ' h2 --bold'}>{item.name}</p>
                    <p className={styles.recommendationPosition + ' --bold'}>{item.position}</p>
                </li>
              ))
            }
          </ul>
        </section>

        <section className={'contain'}>
            <p className={`h1 ${styles.header} `}><span className="--extraBold">Связаться</span> со мной можно через <span className="--extraBold">телеграм</span> <a href="https://t.me/MariiaBel" target="_blank" className="--outside --extraBold">@MariiaBel</a>.</p>
          <Button className={styles.btn} href="https://t.me/MariiaBel" external>
            Написать 
            <SvgIcon id="telegram" width={20} height={20} className={styles.icon} aria-label="contact with frontend developer" />
          </Button>
        </section>
      </article>
  );
}
