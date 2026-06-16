import { Metadata } from 'next';
import Link from 'next/link';
import { benefits, projectTypes, steps } from '@/app/constants/fast-sites';
import Image from 'next/image';
import ContactButton from '@/app/ui/button/contact-button';
import SvgIcon from '@/app/ui/svgIcon/svgIcon';
import Button from '@/app/ui/button/button';

export const metadata: Metadata = {
    title: 'Разработка быстрых сайтов под ключ | Мария Белогубова',
    description: 'Создаю современные сверхбыстрые сайты на React и Next.js. Индивидуальные решения без ограничений.',
};

export default function FastSitesPage() {
    return (
        <div className="">
            {/* Hero Section */}
            <section className=" contain grid grid-cols-1 md:grid-cols-2">
                <div className=''>
                    <h1 className="h1 mb-10 ">
                        Создаю быстрые сайты,<br />
                        <span className="--extraBold">которые приносят клиентов</span>
                    </h1>

                    <p className="text-lg mb-4 max-w-3xl" style={{ color: 'rgb(113, 113, 122)' }}>
                        Здравствуйте! Меня зовут <Link href='/' className="--extraBold" style={{ color: 'rgb(55, 25, 25)' }}>Мария, я профессиональный веб-разработчик</Link> с 12+ лет опыта.
                    </p>
                    <p className="mb-8 max-w-3xl" style={{ color: 'rgb(113, 113, 122)' }}>
                        Создаю современные, сверхбыстрые сайты и веб-приложения «под ключ» на React, Next.js.
                        В отличие от конструкторов (Tilda, Wix) и старых систем (WordPress), создаю индивидуальные решения
                        без ограничений в дизайне и функционале. Ваш сайт будет работать со скоростью мысли.
                    </p>
                    <div className="flex gap-4  flex-wrap">
                        <Button href="https://t.me/MariiaBel" external>Обсудить проект →</Button>
                        <Button href="#pricing" mode="--light">Узнать стоимость</Button>
                    </div>
                </div>
                <div className="flex justify-center mb-8 order-[-1] md:order-1">
                    <Image
                        src="/fast-siites.svg"
                        alt="Разработка быстрых сайтов"
                        width={200}
                        height={200}
                        className="img max-w-[300px]"
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="contain">
                <h2 className="h1 mb-12">
                    Что вы получите, заказав сайт на <span className="--extraBold">Next.js / React</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="border rounded-lg p-6 transition-shadow hover:shadow-lg"
                            style={{ borderColor: 'rgb(125, 115, 115)', backgroundColor: 'rgb(255, 255, 255)' }}
                        >
                            <h3 className="h2 mb-3">{benefit.title}</h3>
                            <p style={{ color: 'rgb(113, 113, 122)' }}>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Project Types Section */}
            <section className="contain contain--invert">
                <h2 className="h1 mb-10" >
                    Какие проекты <span className="--extraBold">я реализую</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4 ">
                    {projectTypes.map((project, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 rounded-lg p-4 border"
                            style={{
                                backgroundColor: 'rgb(50, 30, 30)',
                                borderColor: 'rgb(125, 115, 115)',
                                color: 'rgb(212, 212, 216)'
                            }}
                        >
                            <span style={{ color: 'rgb(212, 212, 216)' }}>✓</span>
                            <span>{project}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison: Experienced vs Agency vs Junior */}
            <section className="contain">
                <h2 className="h1 mb-10">
                    Почему выгоднее нанять <span className="--extraBold">профессионала с опытом</span>, а не компанию или новичка
                </h2>

                <p className=" rounded-lg p-6 relative border border-border mt-8 text-xl ">
                    <span className="--extraBold">Главное преимущество:</span> <br />Вы платите только за реальную работу.
                    Профессиональный разработчик создаст качественный сайт без наценок на менеджмент, аренду офиса и штат сотрудников.
                </p>
            </section>

            {/* Work Steps */}
            <section className="contain contain--invert">
                <h2 className="h1 mb-10">
                    Этапы работы
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="rounded-lg p-6 border bg-secondary"
                            style={{
                                borderColor: 'rgb(125, 115, 115)',
                                color: 'rgb(212, 212, 216)'
                            }}
                        >
                            <div className=" font-bold mb-2" >{step.number}</div>
                            <h3 className="text-xl font-bold mb-3 tracking-[0.05em]">{step.title}</h3>
                            <p className='text-muted-foreground'>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="contain">
                <h2 className="h1 mb-6">
                    Стоимость <span className="--extraBold">работы</span>
                </h2>
                <p className="mb-10">
                    Прозрачные и честные условия. Вы платите только за реальную работу
                </p>

                <div className="grid md:grid-cols-2 gap-6 ">
                    <div className="rounded-lg p-6 relative border border-border" >
                        <h3 className="text-xl font-bold text-primary mb-3 tracking-[0.05em]">Фиксированная цена</h3>
                        <p className="mb-4" style={{ color: 'rgb(113, 113, 122)' }}>Для четко описанных задач</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span>✓</span>
                                <span>Фиксируем стоимость и сроки до начала разработки</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>✓</span>
                                <span>Цена не изменится в процессе</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>✓</span>
                                <span>Лендинг: от 70 000 ₽</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>✓</span>
                                <span>Многостраничный сайт: от 150 000 ₽</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-lg p-6 relative border border-border">
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm bg-primary text-background" >
                            Популярно
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3 tracking-[0.05e]">Почасовая оплата</h3>
                        <p className="mb-4" style={{ color: 'rgb(113, 113, 122)' }}>Для гибких и крупных проектов</p>
                        <div className="text-3xl font-bold mb-4" style={{ color: 'rgb(55, 25, 25)' }}>2 500 ₽ <span className="text-lg font-normal" style={{ color: 'rgb(113, 113, 122)' }}>/ час</span></div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span>✓</span>
                                <span>Для стартапов и сложных проектов</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>✓</span>
                                <span>Подробные отчеты за каждые отработанные часы</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>✓</span>
                                <span>Платите только за реальное время разработки</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Me Section */}
            <section className="contain">
                <h2 className="h1 mb-10">
                    Почему стоит работать <span className="font-extrabold">со мной</span>
                </h2>
                <div className="grid lg:grid-cols-4 gap-6 ">
                    <div className="flex flex-col rounded-lg p-6 border border-border">
                        <h3 className="text-xl font-bold text-primary mb-3 tracking-[0.05em]">
                            12+ лет опыта
                        </h3>
                        <p className="text-base leading-relaxed mb-3 ">
                            Работала в крупных компаниях, руководила фронтенд-направлением,
                            менторила разработчиков. Знаю все подводные камни.
                        </p>
                        <Link href="/" className="--extraBold mb-6" style={{ color: 'rgb(55, 25, 25)' }}>
                            Обо мне →
                        </Link>
                        <SvgIcon className="text-primary ml-auto mt-auto" width={56} height={56} id="experience" />
                    </div>
                    <div className="flex flex-col rounded-lg p-6 border border-border bg-primary text-muted-foreground">
                        <h3 className="text-xl font-bold text-background mb-3 tracking-[0.05em]">
                            Личная ответственность
                        </h3>
                        <p className="text-base leading-relaxed  mb-6">
                            Вы работаете напрямую с исполнителем. Без менеджеров,
                            без потери информации, всегда на связи.
                        </p>
                        <SvgIcon className="text-background ml-auto mt-auto" width={56} height={56} id="responsible" />
                    </div>
                    <div className="flex flex-col rounded-lg p-6 border border-border">
                        <h3 className="text-xl font-bold text-primary mb-3 tracking-[0.05em]">
                            Проверенные решения
                        </h3>
                        <p className="text-base leading-relaxed  mb-6">
                            Использую современный и надежный стек технологий,
                            который гарантирует быстродействие и безопасность.
                        </p>
                        <SvgIcon className="text-primary ml-auto mt-auto" width={56} height={56} id="solutions" />
                    </div>
                    <div className="flex flex-col rounded-lg p-6 border border-border bg-primary">
                        <h3 className="text-xl font-bold text-background mb-3 tracking-[0.05em]">
                            Выгоднее агентства
                        </h3>
                        <p className="text-base leading-relaxed text-muted-foreground  mb-6">
                            Нет наценок на аренду, менеджмент и штат.
                            Вы платите только за качественную разработку.
                        </p>
                        <SvgIcon className="text-background ml-auto mt-auto" width={56} height={56} id="profitable" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="contain relative overflow-hidden" >

                {/* Контент */}
                {/* <div className="max-w-3xl mx-auto"> */}
                <h2 className="h1 mb-10">
                    Готовы обсудить <span className='--extraBold'>ваш проект</span>?
                </h2>

                {/* <div className="w-16 h-0.5 mx-auto my-6 rounded-full bg-primary" /> */}

                <p className="text-lg mb-6 max-w-3xl " style={{ color: 'rgb(113, 113, 122)' }}>
                    Расскажите о своих задачах, целях и ожиданиях — я предложу решение, отвечу на все вопросы, подготовлю коммерческое предложение и предложу
                    оптимальный формат сотрудничества под ваш бюджет и сроки.
                </p>

                <ContactButton />

                {/* <p className="mt-8 text-sm" style={{ color: 'rgb(113, 113, 122)' }}>
                    Напишите <span className="--extraBold" style={{ color: 'rgb(55, 25, 25)' }}>@MariiaBel</span> в Telegram
                    <span className="mx-2">•</span>
                    Отвечаю в течение часа
                </p> */}
                {/* </div> */}
            </section>

            {/* Back to Home */}
            <div className="contain text-center  ">
                <Link href="/" className="--extraBold" style={{ color: 'rgb(55, 25, 25)' }}>
                    ← Вернуться на главную
                </Link>
            </div>
        </div >
    );
}