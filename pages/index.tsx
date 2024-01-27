import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'
import { Carousel } from "react-bootstrap";
import Image from 'next/image'
import Link from 'next/link';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import exticon from '../public/external_white.png';
import develop from "../public/develop_icon.png"
import analytics_icon from "../public/analytics_ico.png"
import audit from "../public/auddit_icon.png"
import yudimy from "../public/yudimy_webshot.png"
import github_icon from "../public/github.png"
import external from "../public/external.png"
import country_shot from "../public/country_app.png"
import chris from "../public/chris.png";
import zino from "../public/zino.png";
import chinedu from "../public/chinedu.jpg"
import molecular from "../public/molecular.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      delay: 100,
    });
    AOS.refresh();
  }, [])
  return (
    <main>
      <NavBar />
      <section className="section-1" id='About'>
        <div className="section_heading-wrap">
          <h2 className="section-heading">Let&apos;s build something together</h2>
          <p className="section-para">
            Hi, my name is Alexander, I&#39;m a Software engineer currently living
            in Lagos, Nigeria and I enjoy building everything from small
            business websites to rich interactive web apps. If you have a
            business seeking a web presence or an employer looking to hire, you
            can get in touch with me here.
          </p>
          <div>
            <Link href="https://drive.google.com/file/d/1CRqoxNttsrePaTyRp1EHVnXxL6tA3jdX/view?usp=drive_link" legacyBehavior={true}>
              <a target='_blank' >
                <button className="btn button-1">View Resume  <Image src={exticon} alt="icon" className='img-fluid link_icon' width={15} height={15} /></button>
              </a>
            </Link>
            <Link href='mailto: alexashimedua@gmail.com' legacyBehavior={true}>
              <a>
                <button className="btn button-2">Hire me</button>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-2" id='Services'>
        <h2 className="section-heading--primary text-shade">Services</h2>
        <div className="service_section-wrap">
          <div className="service_secion-cards" data-aos='flip-left'>
            <div className="serviceimgwrap">
              <Image src={develop} alt="icon" className="img-fluid servicecard-img" width={50} height={50} />
            </div>
            <h6>WEB DEVELOPMENT</h6>
            <p>
              Clean, modern designs- optimized for performance, search engines
              and converting users to customers
            </p>
          </div>
          <div className="service_secion-cards" data-aos='flip-left' >
            <div className="serviceimgwrap">
              <Image
                src={analytics_icon}
                alt="icon"
                className=" servicecard-img"
                width={50} height={50}
              />
            </div>
            <h6>ANALYTICS</h6>
            <p>
              Get insight to see who is browsing your site so that you can make
              smarter decisons
            </p>
          </div>
          <div className="service_secion-cards" data-aos='flip-left' data-aos-duration="1000">
            <div className="serviceimgwrap">
              <Image src={audit} alt="icon" className="servicecard-img" width={50} height={50} />
            </div>
            <h6>WEBSITE AUDIT</h6>
            <p>
              Looking to improve your page performance, SEO or user experience?
              Request a free site audit.
            </p>
          </div>
        </div>
      </section>
      <section className="section-3" id='Projects'>
        <h2 className="section-heading--primary project-shade">Projects</h2>
        <div className="projectsection-wrap">
          <div className="projectsection-col1">
            <Link href='https://yudimy.com/' legacyBehavior={true}>
              <a target='_blank' className='project_imagewraper'>
                <Image
                  src={yudimy}
                  alt="yudimy_website"
                  className="img-fluid project_placeholder"
                  width={1000}
                  height={1400}
                />
              </a>
            </Link>
          </div>
          <div className="projectsection-col2">
            <p>Featured Project</p>
            <h5>Yudimy</h5>
            <div className="project-description" data-aos='fade-up'>
              Yudimy is a Behavioural profiling algorithm that blends psychology
              and machine learning to help people and organisations make
              intuitive decisions backed by data.
            </div>
            <div>React | Typescript | Javascript</div>
            <div className="projmedia_wrap">
              <Link href='https://github.com/AlexanderOba/Yudimy ' legacyBehavior={true}>
                <a target='_blank'>
                  <Image src={github_icon} alt="github" className="img-fluid media_icon" width={4} height={4} />
                </a>
              </Link>
              <Link href='https://yudimy.com/' className='project_imagewraper' legacyBehavior={true}>
                <a target='_blank' >
                  <Image
                    src={external}
                    alt="external link"
                    className="img-fluid media_icon"
                    width={4}
                    height={4}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="projectsection-wrap">
          <div className="projectsection-col2 second_proj">
            <p>Featured Project</p>
            <h5>MolecularPro</h5>
            <div className="project-description" data-aos='fade-up'>
              MolecularPro is a Technology driven work-force management solution
              for technical specialists in Africa&apos;s natural gas industry.
            </div>
            <div>React | Typescript | Javascript</div>
            <div className="projmedia_wrap secondmediawrap">
              <Link href='/' legacyBehavior={true}>
                <a target='_blank'>
                  <Image src={github_icon} alt="github" className="img-fluid media_icon" width={4} height={4} />
                </a>
              </Link>
              <Link href='https://molecularpro.co/#/' legacyBehavior={true}>
                <a target='_blank' >
                  <Image
                    src={external}
                    alt="external link"
                    className="img-fluid media_icon"
                    width={4}
                    height={4}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="projectsection-col1 ">
            <Link href='https://molecularpro.co/#/' legacyBehavior={true}>
              <a target='_blank' className='project_imagewraper'>
                <Image
                  src={molecular}
                  alt="molecular_website"
                  className="img-fluid altplaceholder"
                  width={1000}
                  height={1400}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="projectsection-wrap thirdproj_wrap">
          <div className="projectsection-col1">
            <Link href='https://searchcountryapplication.netlify.app/' legacyBehavior={true}>
              <a target='_blank' className='project_imagewraper'>
                <Image
                  src={country_shot}
                  alt="country_website"
                  className="img-fluid project_placeholder"
                  width={1000}
                  height={1000}
                />
              </a>
            </Link>
          </div>
          <div className="projectsection-col2">
            <p>Featured Project</p>
            <h5>Search country App</h5>
            <div className="project-description" data-aos='fade-up'>
              An application built with Angular, that fetches all the countries
              in the world and gives detailed information about each them.
            </div>
            <div> Angular | Typescript | Javascript</div>
            <div className="projmedia_wrap">
              <Link href='https://github.com/AlexanderOba/Countries-Info-App/tree/master' legacyBehavior={true}>
                <a target='_blank'>
                  <Image src={github_icon} alt="github" className="img-fluid media_icon" width={4} height={4} />
                </a>
              </Link>
              <Link href='https://searchcountryapplication.netlify.app/' legacyBehavior={true}>
                <a target='_blank'>
                  <Image
                    src={external}
                    alt="external link"
                    className="img-fluid media_icon"
                    width={4}
                    height={4}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-4" id='Contact'>
        <div className="section-4_wraper">
          <div className="section-4_col1">
            <h4>Get In Touch</h4>
            <p>
              My inbox is always open. Whether you have a question or just want
              to create your next idea together!
            </p>
          </div>
          <div className="section-4_col2">
            <Link href='mailto: support@basira.app' legacyBehavior={true}>
              <a>
                <button className="button-3 btn" >Say Hello</button>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-5" id='Testimonials'>
        <h3 className="feedback_heading img-shade">
          What client <br /> Feed back about me
        </h3>
        <Carousel>
          <Carousel.Item>
            <div className="feedback_wraper">
              <div className="feedbackimg-wrap">
                <Image
                  src={chris}
                  alt="chris picture"
                  className="img-fluid feedbackimg"
                  width={300}
                  height={300}
                />
              </div>
              <div className="feedback_content">
                <p className="feedbckpara">
                  Alex was able to effectively collaborate with our team and
                  adapt to changes in the project scope, ensuring that the
                  project was delivered on time and within budget. I would
                  highly recommend Him for any frontend development projects
                  that require a strong attention to detail and excellent
                  collaboration skills.
                </p>
                <p className="feedbckcmter">
                  ~Christopher Abiodun, Tech solutions provider
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="feedback_wraper">
              <div className="feedbackimg-wrap">
                <Image
                  src={zino}
                  alt="zino picture"
                  className="img-fluid feedbackimg"
                  width={300}
                  height={300}
                />
              </div>
              <div className="feedback_content">
                <p className="feedbckpara">
                  Alex has an exceptional eye for detail and was able to deliver
                  a pixel-perfect design that met all of our requirements. I
                  would highly recommend Alex for any frontend development
                  projects that require a strong attention to detail and
                  excellent collaboration skills
                </p>
                <p className="feedbckcmter">~Omozino Eguh, CEO Yudimy</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="feedback_wraper">
              <div className="feedbackimg-wrap">
                <Image
                  src={chinedu}
                  alt="chinedu picture"
                  className="img-fluid feedbackimg"
                  width={300}
                  height={300}
                />
              </div>
              <div className="feedback_content">
                <p className="feedbckpara">
                  Working with Alex was an absolute pleasure. He was able to
                  understand our requirements and deliver a beautiful,
                  user-friendly website that exceeded our expectations. He has a
                  deep understanding of frontend development and was able to
                  suggest creative solutions to any issues that arose during the
                  project.
                </p>
                <p className="feedbckcmter">
                  ~Chinedu Onuoha, Executive Director Pacepharmarcare LTD.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="img-shade2"></div>
      </section>
    </main >
  )
}
