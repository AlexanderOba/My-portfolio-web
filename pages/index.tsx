import MessageForm from '@/components/MessageForm';
import NavBar from '@/components/navbar';
import { Modal } from 'antd';
import AOS from 'aos';
import "aos/dist/aos.css";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Carousel } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null} 
        style={{
          backgroundColor: '#f7f7f7',
          color: '#333',
          borderRadius: '8px'
        }}
      >
          <MessageForm closeModal={handleCancel}/>
      </Modal>
      <section className="section-1" id='About'>
        <div className="section_heading-wrap">
          <TypeAnimation
            sequence={[
              "Elevating Ideas into Exceptional Experiences",
              2000,
              "Let's Build Something Together",
              2000,
              "Where Creativity Meets Code - Let's Create Magic!",
              2000,
            ]}
            speed={10}
            style={{ fontSize: '38px', fontWeight: 600, color: "#fff" }}
            repeat={0}
          />
          <p className="section-para">
            Hi, my name is Alexander, I&#39;m a Software engineer currently living
            in Lagos, Nigeria and I enjoy building everything from small
            business websites to rich interactive web apps. If you have a
            business seeking a web presence or an employer looking to hire, you
            can get in touch with me here.
          </p>
          <div className='button-wrapper'>
            <Link href="https://drive.google.com/file/d/18GbEUzFSCLIFL8sdAawjo6NwcYaTpUhr/view?usp=drive_link" legacyBehavior={true}>
              <a target='_blank' className='btn-link'>
                <button className="btn button-1 flex" style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '5px'}}>
                  View Resume  <Image src="/external_white.png" alt="icon" className='img-fluid link_icon' width={10} height={10} />
                  </button>
              </a>
            </Link>
              <div style={{width: '34%'}}>
                <button className="btn button-2"onClick={showModal} style={{width: '100%'}}>Hire me</button>
              </div>
          </div>
        </div>
      </section>

      <section className="section-2" id='Services'>
        <h2 className="section-heading--primary text-shade">Services</h2>
        <div className="service_section-wrap">
          <div className="service_secion-cards" data-aos='flip-left'>
            <div className="serviceimgwrap">
              <Image src="/develop_icon.png" alt="icon" className="img-fluid servicecard-img" width={50} height={50} />
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
                src="/analytics_ico.png"
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
              <Image src="/auddit_icon.png" alt="icon" className="servicecard-img" width={50} height={50} />
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
          <div className="projectsection-col2 second_proj">
            <p>Featured Project</p>
            <h5>Iklasstutors</h5>
            <div className="project-description" data-aos='fade-up'>
              Iklasstutors is one of Nigeria’s most trusted leading online platform for tutors & students.
              It helps students/parents to find verified & skilled tutors in-person
            </div>
            <div>Next JS | Javascript | Node JS</div>
            <div className="projmedia_wrap secondmediawrap">
              <a target='_blank' href='https://github.com/alleybookings/Frontend'>
                <FaGithub className='text-black icon-margin' />
              </a>
              <a target='_blank' href='https://www.iklasstutors.com/'>
                <FaExternalLinkAlt className='text-black' />
              </a>
            </div>
          </div>
          <div className="projectsection-col1 ">
            <Link href='https://www.iklasstutors.com/' legacyBehavior={true}>
              <a target='_blank' className='project_imagewraper'>
                <Image
                  src="/iklasstutors.png"
                  alt="iklass"
                  className="img-fluid altplaceholder"
                  width={1000}
                  height={1400}
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="projectsection-wrap">
          <div className="projectsection-col1">
            <Link href='https://yudimy.com/' legacyBehavior={true}>
              <a target='_blank' className='project_imagewraper'>
                <Image
                  src="/yudimy.png"
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
                  <FaGithub className='text-black icon-margin' />
                </a>
              </Link>
              <Link href='https://yudimy.com/' className='project_imagewraper' legacyBehavior={true}>
                <a target='_blank' >
                  <FaExternalLinkAlt className='text-black' />
                </a>
              </Link>
            </div>
          </div>

        </div>
        <div className="projectsection-wrap">
          <div className="projectsection-col2 second_proj">
            <p>Featured Project</p>
            <h5>GreyTech</h5>
            <div className="project-description" data-aos='fade-up'>
              GreyTech is a comprehensive web platform designed to facilitate the interaction between technicians
              and technical service companies. The platform allows technicians to register and showcase their skills
              while enabling technical service companies (TSCs) to post job listings and hire technicians for various
              projects.
            </div>
            <div> Next JS | Typescript | Javascript | Node JS </div>
            <div className="projmedia_wrap secondmediawrap">
              <Link href='/' legacyBehavior={true}>
                <a target='_blank'>
                  <FaGithub className='text-black icon-margin' />
                </a>
              </Link>
              <Link href='https://grey-tech-web.vercel.app/ ' legacyBehavior={true}>
                <a target='_blank' >
                  <FaExternalLinkAlt className='text-black' />
                </a>
              </Link>
            </div>
          </div>
          <div className="projectsection-col1 ">
            <Link href='https://grey-tech-web.vercel.app/ ' legacyBehavior={true}>
              <a target='_blank' className='project_imagewraper'>
                <Image
                  src="/greyTech.png"
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
                  src="/country_app.png"
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
                  <FaGithub className='text-black icon-margin' />
                </a>
              </Link>
              <Link href='https://searchcountryapplication.netlify.app/' legacyBehavior={true}>
                <a target='_blank'>
                  <FaExternalLinkAlt className='text-black' />
                </a>
              </Link>
            </div>
          </div>

        </div>
        <div className="projectsection-wrap mt-5">
          <div className="projectsection-col2 second_proj">
            <p>Featured Project</p>
            <h5>Bandage Ecommerce</h5>
            <div className="project-description" data-aos='fade-up'>
              Bandage is an e-commerce platform that provides users with a seamless shopping experience. The
              platform allows users to browse items, add them to their cart with persistent data, and view detailed
              information about each item. Additionally, users can mark items as favorites for future reference.
            </div>
            <div> Next JS | Typescript | Javascript</div>
            <div className="projmedia_wrap secondmediawrap">
              <Link href='/' legacyBehavior={true}>
                <a target='_blank'>
                  <FaGithub className='text-black icon-margin' />
                </a>
              </Link>
              <Link href='https://bandage-ecommerce-website.vercel.app/' legacyBehavior={true}>
                <a target='_blank' >
                  <FaExternalLinkAlt className='text-black' />
                </a>
              </Link>
            </div>
          </div>
          <div className="projectsection-col1">
            <Link href='https://bandage-ecommerce-website.vercel.app/' legacyBehavior={true}>
              <a target='_blank' className='project_imagewraper'>
                <Image
                  src="/bandagee.png"
                  alt="molecular_website"
                  className="img-fluid altplaceholder"
                  width={1000}
                  height={1000}
                />
              </a>
            </Link>
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
            <Link href='mailto: alexashimedua@gmail.com' legacyBehavior={true}>
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
                  src="/chris.png"
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
                  src="/zino.png"
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
                  src="/chinedu.jpg"
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
