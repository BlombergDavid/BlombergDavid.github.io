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
      <Header></Header>
      <div className="main-content">
        <div className="fade-in mb-5" id="home">
          <h1>Hej och välkommen till min hemsida!</h1>
          <p>
            Mitt namn är David Blomberg, och det är roligt att du har hittat
            hit. Den här sidan fungerar främst som en slags CV för mig, men du
            får också möjligheten att lära dig lite mer om mig och mina
            intressen. Så ta gärna en titt, och om det är något som du tycker är
            intressant eller om det är någon av mina topplistor som du tycker är
            helt fel, var inte rädd för att slänga iväg ett meddelande!
          </p>
        </div>
        <div className="fade-in" style={{ minHeight: "100vh" }} id="about-me">
          <h1 className="mb-5">Om mig</h1>
          <Row>
            <Col className="left-align" md={8} lg={5}>
              <p>
                Jag är en 27-årig utvecklare som har jobbat som IT-konsult sedan
                jag tog min examen 2021 inom informations- och
                kommunikationsteknik på Lunds tekniska högskola.
              </p>
              <p>
                Min största styrka är inom frontend-utveckling, då det är den
                delen av utveckling som jag personligen tycker är mest
                intressant, samt det område där jag har mest erfarenhet. Men jag
                har även utforskat en del backend, exempelvis med olika
                databaser, API:er, Azure DevOps m.m. Jag har även en del kunskap
                inom UX-design, då jag har en master inom användbarhet och
                design där UX-design var en stor del av utbildningen.
              </p>
              <p>
                På fritiden gillar jag, som många andra, att umgås med mina
                vänner eller att hålla på med något av mina många intressen. För
                att kort sammanfatta mina intressen:
              </p>
              <ul>
                <li>
                  Musik: Kan spela lite men älskar att lyssna på musik samt att
                  utforska och hitta nya artister och genrer. (Mina top 10 album
                  någonsin kan du hitta längre ner på sidan.)
                </li>
                <li>
                  Bordtennis: Har spelat bordtennis på en högre nivå i större
                  delar av mitt liv och är fortfarande aktiv och spelar i
                  nationella serier.
                </li>
                <li>
                  Film & TV-serier: Älskar att varva ner efter en lång dag med
                  ett par avsnitt av en serie eller att se den senaste
                  A24-filmen. (Mina top 10 filmer och TV-serier någonsin kan du
                  hitta längre ner på sidan.)
                </li>
                <li>
                  Matlagning: Även om jag är långt ifrån världens bästa kock så
                  älskar jag att laga mat samt att kolla på olika
                  matlagningsprogram på Youtube. R.I.P Anthony Bourdain
                </li>
                <li>
                  TV-spel: Har spelat datorspel alldeles för länge och alldeles
                  för mycket. Några av mina bästa minnen är att försöka klara av
                  Pokémon med mina kompisar eller att vara uppe hela natten och
                  spela Halo 3 online. (Mina top 10 TV-spel någonsin kan du
                  hitta längre ner på sidan.)
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
                alt="David Blomberg 1"
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
                alt="David Blomberg 2"
              />
            </Col>
            <Col className="left-align" md={8} lg={{ span: 5, offset: 2 }}>
              <p>
                Här är en kort sammanfattning av mina viktigaste erfarenheter
                och tidigare arbeten från mitt CV. Om du är intresserad av alla
                mina tidigare erfarenheter kan du se mitt CV i sin helhet{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://drive.google.com/file/d/1m5hGovZ_mRdKgKcrnLxA2Pip0dnVej4P/view?usp=sharing"
                >
                  här
                </a>
                !
              </p>
              <strong>HiQ</strong>
              <ul>
                <li>Arbetsroll: Utvecklare</li>
                <li>År: Augusti 2022: November 2023</li>
                <li>
                  Viktigaste erfarenhet: Då jag arbetade mest med
                  företagsutveckling inhouse, fick jag inblick i vilka tekniska
                  stödfunktioner som är viktiga för en företagsledning. Det
                  handlade inte bara om att skapa en struktur mot kunden utan
                  även internt, så att man lätt kan kommunicera med alla på
                  företaget, skapa en känsla av delaktighet, informera och
                  uppdatera personalen, och därigenom bygga en teamkänsla i
                  gruppen.
                </li>
              </ul>
              <strong>Tata Consultancy Services</strong>
              <ul>
                <li>Arbetsroll: Utvecklare</li>
                <li>År: September 2021 - Augusti 2022</li>
                <li>
                  Viktigaste erfarenhet: Jag började på Tata mitt under
                  pandemin, vilket var en stor utmaning. Att komma in i en
                  arbetsgrupp och ett arbetslag endast via Teams var en unik
                  upplevelse. Dessutom var de flesta av mina kollegor från andra
                  länder, framför allt från Indien. Det fanns stora skillnader i
                  kultur, förväntningar på arbetsinsatser och en stor
                  tidsskillnad, vilket försvårade möten. Min upplevelse är ändå
                  att det fungerade väl, och det var en viktig och lärorik
                  erfarenhet, även om jag som nyexaminerad längtade efter att få
                  kollegor att utbyta erfarenheter med. Jag jobbar bra
                  självständigt, men jag upplever ändå att jag utvecklas
                  snabbare med människor omkring mig.
                </li>
              </ul>
              <strong>Thage</strong>
              <ul>
                <li>Arbetsroll: Snickarlärling</li>
                <li>År: Oktober 2015 - Juni 2016</li>
                <li>
                  Viktigaste erfarenhet: Utan att låta överlägsen var det jag
                  verkligen tog med mig att jag ville utbilda mig vidare. Det
                  var både ett fysiskt hårt arbete och en "annorlunda"
                  arbetsmiljö som inte helt stämde överens med mina egna
                  värderingar. Men jag anpassade mig, och det var ett arbete där
                  jag ändå kände att jag bidrog och blev uppskattad för det.
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="fade-in" id="skills">
          <h1 className="mb-5">Relevanta kunskaper</h1>
          <Row>
            <Col className="left-align" md={8} lg={5}>
              <p>
                Här är en sammanfattning av de viktigaste kunskaperna från mitt
                CV. Om du är intresserad av att läsa hela mitt CV, kan du se det
                i sin helhet{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://drive.google.com/file/d/1m5hGovZ_mRdKgKcrnLxA2Pip0dnVej4P/view?usp=sharing"
                >
                  här
                </a>
                !
              </p>
              <p>Språk och relevanta färdigheter</p>
              <ul>
                <li>Svenska: Modersmål</li>
                <li>Engelska: Flytande</li>
                <li>Tyska: Läst 5 år totalt i grundskola samt gymnasie.</li>
              </ul>
              <p>Programmeringsspråk</p>
              <ul>
                <li>Java</li>
                <li>React Javascript/Typescript</li>
                <li>SQL</li>
                <li>C#</li>
              </ul>

              <p>Programmeringsverktyg och metoder</p>
              <ul>
                <li>Cypress</li>
                <li>Tailwind CSS och Bootstrap</li>
                <li>React Router</li>
                <li>Node.js</li>
                <li>Figma</li>
                <li>Git</li>
                <li>End-to-end tester</li>
                <li>Responsiv design</li>
              </ul>
            </Col>
            <Col md={4} lg={{ span: 5, offset: 2 }}>
              <Image
                className="main-page-image"
                fluid
                rounded
                src={profilephoto2}
                alt="David Blomberg 2"
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
            Jag har alltid tyckt att en persons smak i musik, film och spel
            säger en hel del om den personen. Så när en vän rekommenderar en
            film eller musik som är ny för mig, är det alltid roligt! Här delar
            jag några av mina topplistor. Kanske får du en bättre förståelse av
            vem jag är som person, eller så upptäcker du ett nytt album? Hur som
            helst, tack för att du tog dig tid att utforska min lilla hemsida!
            😁
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
      <Footer></Footer>
    </div>
  );
};

export default StartPage;
