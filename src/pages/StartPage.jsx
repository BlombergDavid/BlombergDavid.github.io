import React, { useEffect } from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profilephoto from "../images/david_blomberg_1.jpg";
import barphoto from "../images/david_blomberg_2.jpg";
import profilephoto2 from "../images/david_blomberg_5.jpg";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const StartPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.classList.add("fade-in-visible");
        } else {
          element.classList.remove("fade-in-visible");
        }
      });
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Call the handleScroll function once to check the initial state
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="fade-in mb-5" id="home">
          <h1>Hej och välkommen till min hemsida!</h1>

          {/* 🔹 Kort tech-bio */}
          <p style={{ fontWeight: "500" }}>
            Fullstackutvecklare med frontendbakgrund och idag tydligt
            backendfokus i Java-baserade system. Arbetar med
            systemintegrationer, databaser och kunddriven produktutveckling och är 
            van att ta ägarskap för funktioner från krav till driftsättning.
          </p>

          <p>
            Jag heter David Blomberg och den här sidan är lite av en kombination
            mellan CV och personlig hörna på internet. Här finns min
            yrkesbakgrund, tekniska erfarenheter och även mindre livsviktig
            information som topplistor inom musik, film och spel. Kika runt, 
            och tycker du någon lista är helt fel, hör av dig!
          </p>
        </div>

        <div className="fade-in" style={{ minHeight: "100vh" }} id="about-me">
          <h1 className="mb-5">Om mig</h1>
          <Row>
            <Col className="left-align" md={8} lg={5}>
              <p>
                Jag är en utvecklare baserad i Malmö med examen inom
                informations- och kommunikationsteknik från Lunds tekniska
                högskola. De senaste åren har jag arbetat som
                fullstackutvecklare i produktnära miljöer där jag jobbar både
                med frontend (React/Vue) och backend i Java, databaser och
                integrationer.
              </p>

              <p>
                Min profil har gått från att vara tydligt frontendfokuserad till
                att idag luta mer åt backend, systemintegrationer och att ta
                ansvar för funktioner genom hela utvecklingskedjan. Jag gillar
                när teknik löser riktiga problem och när man som utvecklare får
                äga hela lösningar, inte bara små delar.
              </p>

              <p>
                Jag har även en bakgrund inom UX och användbarhet, vilket gör
                att jag ofta tänker på både teknik, struktur och
                användarupplevelse när jag bygger system.
              </p>

              <p>
                På fritiden gillar jag att hänga med vänner och nörda ner mig i
                mina intressen:
              </p>

              <ul>
                <li>
                  Musik: Spelar lite själv men framför allt passionerad
                  musiklyssnare. Gillar att upptäcka nya artister och genrer.
                </li>
                <li>
                  Bordtennis: Har spelat på hög nivå större delen av livet och
                  är fortfarande aktiv i seriespel.
                </li>
                <li>
                  Film & TV: Perfekt sätt att varva ner. Svag för A24-filmer och
                  starka dramaserier.
                </li>
                <li>
                  Matlagning: Lagar gärna mat och kollar alldeles för mycket
                  mat-YouTube. R.I.P Anthony Bourdain.
                </li>
                <li>
                  Spel: Många fina minnen från Pokémon, Halo 3-nätter och co-op
                  med kompisar.
                </li>
                <li>Ta en öl på Möllan med boysen. Gött häng, gött snack.</li>
              </ul>
            </Col>

            <Col md={4} lg={{ span: 5, offset: 2 }}>
              <Image
                className="main-page-image"
                fluid
                rounded
                src={barphoto}
                alt="David Blomberg"
              />
            </Col>
          </Row>
        </div>

        <div
          className="fade-in"
          style={{ minHeight: "100vh" }}
          id="work-experiences"
        >
          <h1 className="mb-5">Tidigare arbeten och erfarenheter</h1>
          <Row>
            <Col md={4} lg={5}>
              <Image
                className="main-page-image"
                fluid
                rounded
                src={profilephoto}
                alt="David Blomberg"
              />
            </Col>

            <Col className="left-align" md={8} lg={{ span: 5, offset: 2 }}>
              <p>
                Här är en kort sammanfattning av mina viktigaste erfarenheter.
                Vill du se hela CV:t finns det{" "}
                <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1m5hGovZ_mRdKgKcrnLxA2Pip0dnVej4P/view">
                  här
                </a>
                .
              </p>

              <strong>Eseco</strong>
              <ul>
                <li>Arbetsroll: Fullstackutvecklare</li>
                <li>År: Mars 2024 - Nu</li>
                <li>
                  Viktigaste erfarenhet: Kunddriven produktutveckling med ansvar
                  för funktioner i både frontend och backend. Arbetar med
                  systemintegrationer, databaser och lösningar som används i
                  verkliga affärsflöden.
                </li>
              </ul>

              <strong>HiQ</strong>
              <ul>
                <li>Arbetsroll: Frontendutvecklare</li>
                <li>År: 2022 - 2023</li>
                <li>
                  Viktigaste erfarenhet: Utvecklade interna webbplattformar och
                  system som stöttade organisationens kommunikation och
                  struktur. Fick god inblick i hur teknik används för att
                  förbättra interna processer.
                </li>
              </ul>

              <strong>Tata Consultancy Services</strong>
              <ul>
                <li>Arbetsroll: Utvecklare</li>
                <li>År: 2021 - 2022</li>
                <li>
                  Viktigaste erfarenhet: Arbetade i internationellt och
                  distribuerat team i uppdrag för IKEA. Erfarenhet av samarbete
                  över tidszoner och att snabbt sätta sig in i befintliga
                  system.
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className="fade-in" id="skills">
          <h1 className="mb-5">Relevanta kunskaper</h1>
          <Row>
            <Col className="left-align" md={8} lg={5}>
              <p>Programmeringsspråk</p>
              <ul>
                <li>Java</li>
                <li>JavaScript / TypeScript</li>
                <li>SQL</li>
                <li>C# (grund)</li>
              </ul>

              <p>Ramverk & teknik</p>
              <ul>
                <li>React & Vue</li>
                <li>REST API-utveckling</li>
                <li>DB2 och relationsdatabaser</li>
                <li>Systemintegrationer</li>
              </ul>

              <p>Verktyg & arbetssätt</p>
              <ul>
                <li>Cypress & E2E-testning</li>
                <li>Git</li>
                <li>Azure-miljöer</li>
                <li>Figma</li>
                <li>Responsiv design</li>
                <li>Agilt arbetssätt</li>
              </ul>
            </Col>

            <Col md={4} lg={{ span: 5, offset: 2 }}>
              <Image
                className="main-page-image"
                fluid
                rounded
                src={profilephoto2}
                alt="David Blomberg"
              />
            </Col>
          </Row>
        </div>

        <div
          className="fade-in"
          style={{ marginBottom: "64px" }}
          id="interests"
        >
          <h1 className="mb-5">Intressen</h1>
          <p>
            Jag tycker att en persons smak i musik, film och spel säger en hel
            del. Här delar jag några av mina topplistor - kanske hittar du något
            nytt?
          </p>
          <Row>
            <Col>
              <Link className="post-link" to="/interests">
                Mina Intressen
              </Link>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StartPage;
