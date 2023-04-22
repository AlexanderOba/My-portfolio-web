import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'
import { Carousel } from "react-bootstrap";
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <section className="section-1">
        <NavBar />
        <div className="section_heading-wrap">
          <h2 className="section-heading">Let's build something together</h2>
          <p className="section-para">
            Hi, my name is Alexander, I'm a Software engineer currently living
            in Lagos, Nigeria and I enjoy building everything from small
            business websites to rich interactive web apps. If you have a
            business seeking a web presence or an employer looking to hire, you
            can get in touch with me here.
          </p>
          <div>
            <button className="button-1">Download CV</button>
            <button className="button-2">Hire me</button>
          </div>
        </div>
      </section>
      <section className="section-2" id='Services'>
        <h2 className="section-heading--primary text-shade">Services</h2>
        <div className="service_section-wrap">
          <div className="service_secion-cards">
            <div className="serviceimgwrap">
              <Image src="/../public/develop_icon.png" alt="icon" className="img-fluid servicecard-img" width={50} height={50} />
            </div>
            <h6>WEB DEVELOPMENT</h6>
            <p>
              Clean, modern designs- optimized for performance, search engines
              and converting users to customers
            </p>
          </div>
          <div className="service_secion-cards">
            <div className="serviceimgwrap">
              <Image
                src="/../public/analytics_ico.png"
                alt="icon"
                className=" servicecard-img"
                width={50} height={50}
              />
            </div>
            <h6> ANALYTICS</h6>
            <p>
              Get insight to see who is browsing your site so that you can make
              smarter decisons
            </p>
          </div>
          <div className="service_secion-cards">
            <div className="serviceimgwrap">
              <Image src="/../public/auddit_icon.png" alt="icon" className="servicecard-img" width={50} height={50} />
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
            <a href='/'>
              <Image
                src="/../public/yudimy_webshot.png"
                alt="yudimy_website"
                className="img-fluid project_placeholder"
                width={1000}
                height={1400}
              />
            </a>
          </div>
          <div className="projectsection-col2">
            <p>Featured Project</p>
            <h5>Yudimy</h5>
            <div className="project-description">
              Yudimy is a Behavioural profiling algorithm that blends psychology
              and machine learning to help people and organisations make
              intuitive decisions backed by data.
            </div>
            <div>React | Typescript | Javascript</div>
            <div className="projmedia_wrap">
              <Image src="/../public/github.png" alt="github" className="img-fluid media_icon" width={4} height={4} />
              <Image
                src="/../public/external.png"
                alt="external link"
                className="img-fluid media_icon"
                width={4}
                height={4}
              />
            </div>
          </div>
        </div>
        <div className="projectsection-wrap">
          <div className="projectsection-col2 second_proj">
            <p>Featured Project</p>
            <h5>MolecularPro</h5>
            <div className="project-description">
              MolecularPro is a Technology driven work-force management solution
              for technical specialists in Africa's natural gas industry.
            </div>
            <div>React | Typescript | Javascript</div>
            <div className="projmedia_wrap secondmediawrap">
              <Image src="/../public/github.png" alt="github" className="img-fluid media_icon" width={4} height={4} />
              <Image
                src="/../public/external.png"
                alt="external link"
                className="img-fluid media_icon"
                width={800}
                height={1800}
              />
            </div>
          </div>
          <div className="projectsection-col1 ">
            <a href='/'>
              <Image
                src="/../public/molecular.png"
                alt="molecular_website"
                className="img-fluid altplaceholder"
                width={1000}
                height={1400}
              />
            </a>
          </div>
        </div>
        <div className="projectsection-wrap thirdproj_wrap">
          <div className="projectsection-col1">
            <a href='/'>
              <Image
                src="/../public/country_app.png"
                alt="country_website"
                className="img-fluid project_placeholder"
                width={1000}
                height={1000}
              />
            </a>
          </div>
          <div className="projectsection-col2">
            <p>Featured Project</p>
            <h5>Search country App</h5>
            <div className="project-description">
              An application built with Angular, that fetches all the countries
              in the world and gives detailed information about each them.
            </div>
            <div> Angular | Typescript | Javascript</div>
            <div className="projmedia_wrap">
              <Image src="/../public/github.png" alt="github" className="img-fluid media_icon" width={4} height={4} />
              <Image
                src="/../public/external.png"
                alt="external link"
                className="img-fluid media_icon"
                width={4}
                height={4}
              />
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
            <button className="button-3">Say Hello</button>
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
                  src="/../public/chris.png"
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
                  src="/../public/zino.jfif"
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
                  src="/../public/chinedu.jpg"
                  alt="zino picture"
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
    </main>
  )
}
