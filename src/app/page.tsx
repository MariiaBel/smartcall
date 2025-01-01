"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Button from "./ui/button/button";
import Icon from "./ui/icon/icon";
import { data } from "./constants/homepage";

export default function Home() {
  function handleContactMe(){
    console.log('click contact')
  }
  return (
      <article>
        <h1 className='text-hidden'>Фронтенд разработчик и веб ментор</h1>
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
              <Icon id="telegram" width={20} height={20} className={styles.icon} aria-label="contact with frontend developer" />
            </Button>
            <Button className={styles.btn} modificator="--light" href="https://github.com/mariiabel" external>
              GitHub
              <Icon id="github" width={20} height={20} className={styles.icon} aria-label="contact with frontend developer" />
            </Button>
          </div>
        </section>


        <section className={styles.skills + ' contain'}>
          <h2 className={styles.header + ' h1'}>Стек <span className="--extraBold">технологий</span></h2>
          <ul className={styles.stacks}>
            {
              data.stack.map((item, key) => (
                <li key={key} className={styles.stack}>
                  <Icon className={styles.stackIcon} width={56} height={56} id={item.iconId} />
                  <h3 className={styles.stackTitle + " h2 --bold"}>{item.name}</h3>
                  <p className={styles.stackDesc}>{item.description}</p>
                </li>
              ))
            }
          </ul>
        </section>

        <section className={styles.experience + ' contain contain--invert'}>
          <h2 className={styles.header + ' h1'}>Профессиональный <span className="--extraBold">опыт</span></h2>
        </section>
      </article>
  );
}
