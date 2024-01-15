import { IconPhone } from "@tabler/icons-react";
import { Testimonals, HeroPages, Footer } from "../../components";
import "./TestimonalsPage.css";

const TestimonalsPage = () => {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonals />
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a bike by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default TestimonalsPage;
