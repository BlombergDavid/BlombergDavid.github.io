import React from "react";
import "../BlogPost.css";
import "./MusicSamplesPost.css";
import { Image, Row, Col } from "react-bootstrap";
import { returnListOfStrings } from "../../functions";
import VideoPlayer from "../VideoPlayer";

const MusicSamplesPost = () => {
  const blogPostJsonFile = require("../../jsonFiles/blogPosts.json");
  const blogPostDataArray = blogPostJsonFile.value;
  const customBlogPosttData = blogPostDataArray.find(
    (entry) => entry.customComponentName === "MusicSamplesPost"
  );
  return (
    <div className="post-container">
      <h1 className="post-title">{customBlogPosttData.title}</h1>
      <p className="post-intro-section">{customBlogPosttData.intro}</p>
      <p className="post-type">
        <i>{returnListOfStrings(customBlogPosttData.type)}</i>
      </p>
      <Row>
        <Col>
          <h2 className="list-entry-title">1. The Alchemist</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3 mb-5">
        <Col md={10}>
          <Image
            src={
              "https://magazine-resources.tidal.com/uploads/2022/10/alc_resized-1280x808.jpg"
            }
            fluid
            alt={"The Alchemist"}
            className="post-image"
            rounded
          ></Image>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10}>
          <p className="post-main-text">
            <i>The Alchemist</i> har varit ett tungt namn inom hiphopvärlden en
            bra tid nu. Hans produktion, som ofta är fylld med jazziga, souliga
            och melodiska samples, har gjort honom till en eftertraktad
            producent att arbeta med. <i>Mobb Deep</i>, <i>Action Bronson</i>,
            <i>Freddie Gibbs</i>, <i>Earl Sweatshirt</i> är bara några av en
            lång lista av tunga namn som har samarbetat med The Alchemist.
            <br />
            Hans diskografi är fylld med bra projekt, men
            <i>This Thing Of Ours</i> (2021), <i>Bo Jackson</i> (2021) och{" "}
            <i>Alfred</i> (2020) är enligt mig de projekt där hans produktion
            och sampling skiner starkast. Tre album som jag verkligen inte kan
            rekommendera nog!
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <VideoPlayer
            youtubeLink={"https://www.youtube.com/watch?v=vfCjKpbql80"}
            width="100%"
            height="30vh"
          />
        </Col>
        <Col md={12} lg={6}>
          <VideoPlayer
            youtubeLink={"https://www.youtube.com/watch?v=J6QgqZuTWFc"}
            width="100%"
            height="30vh"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="video-description-text">
            Samplet taget från låten kan höras vid 2:25 och spelas genom hela
            låten.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="list-entry-title">2. Jpegmafia</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3 mb-5">
        <Col md={10}>
          <Image
            src={
              "https://www.nme.com/wp-content/uploads/2021/11/JPEGMAFIA_FEAT_2.jpg"
            }
            fluid
            alt={"The Alchemist"}
            className="post-image"
            rounded
          ></Image>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10}>
          <p className="post-main-text">
            <i>Jpegmafia</i> kom först på min radar 2018 med sitt stora
            genombrott med albumet <i>Veteran</i>, och jag kunde verkligen inte
            sluta att imponeras av hans musik. Hans samples är oerhört obskyra
            och hur länge han måste leta efter dem är galet. Men det som gör det
            ännu mer imponerande är hur han lyckas integrera dessa samples in i
            sin produktion på ett sätt som verkligen får varje låt att sticka
            ut.
            <br />
            Men även om jag älskar <i>Veteran</i> och det fick mig att upptäcka
            JPEGMAFIA, så är hans samarbete med <i>Danny Brown</i>,{" "}
            <i>Scaring the Hoes</i> från 2023, hans bästa album utan tvekan. Här
            är JPEGMAFIA i toppform som rappare och lyckas matcha Danny Browns
            energi och förmågor, men hans förmåga som producent är 10/10. Låten{" "}
            <i>Garbage Pale Kids</i> (se nedan) är ett perfekt exempel på
            JPEGMAFIA som producent. Ett sample från japansk reklam från
            80-talet som bygger grunden för ett tungt beat som passar Danny
            Browns speciella röst och flow perfekt.
            <br />
            <br />
            En av mina favoritlåtar från 2023, och jag kan inte vänta tills
            deras nästa projekt tillsammans kommer ut!
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <VideoPlayer
            youtubeLink={"https://www.youtube.com/watch?v=fnHA9LyF6IA"}
            width="100%"
            height="30vh"
          />
        </Col>
        <Col md={12} lg={6}>
          <VideoPlayer
            youtubeLink={"https://www.youtube.com/watch?v=FNycli3hW88"}
            width="100%"
            height="30vh"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="video-description-text">
            Samplet taget från reklamfilen kan höras vid 2:28 in i videon och
            spelas genom hela låten.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="list-entry-title">3. The Avalanches</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3 mb-5">
        <Col md={10}>
          <Image
            src={
              "https://cached-images.bonnier.news/gcs/bilder/epi-30-dn/UploadedImages/2016/7/5/39bee304-ec41-4a1d-928d-f40a6a3f9a80/bigOriginal.jpg"
            }
            fluid
            alt={"The Alchemist"}
            className="post-image"
            rounded
          ></Image>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10}>
          <p className="post-main-text">
            Att beskriva <i>The Avalanches</i> och deras stil är inte det
            lättaste, då deras tre skivor alla har sin unika stil. Men något som
            de alla har gemensamt är att byggstenarna till många av deras låtar
            är obskyra samples. Och i många fall, men speciellt på deras första
            skiva <i>Since I Left You</i>, så tar olika samples rollen som
            sångare.
            <br />
            Ett bra exempel på detta är låten <i>Since I Left You</i>, där de
            har samplat olika delar av sången från en låt av{" "}
            <i>The Main Attraction</i>, som sedan loopas genom hela låten på ett
            väldigt kreativt sätt. En oerhört catchy låt som är perfekt att
            cykla till en varm sommardag.
            <br />
            Men låten som jag verkligen vill ge uppmärksamhet till är{" "}
            <i>Frontier Psychiatrist</i> från samma skiva (se nedan). Ord kan
            inte beskriva, eller åtminstone mina ord kan inte beskriva hur
            fantastisk denna låten är och hur kreativt och passande samplet är.
            Lyssna helt enkelt!
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <VideoPlayer
            youtubeLink={"https://www.youtube.com/watch?v=qLrnkK2YEcE"}
            width="100%"
            height="30vh"
          />
        </Col>
        <Col md={12} lg={6}>
          <VideoPlayer
            youtubeLink={"https://www.youtube.com/watch?v=sLlprINI-cU"}
            width="100%"
            height="30vh"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="video-description-text">
            The Avalanches har samplat många bitar ur en sketch från Wayne and
            Shusters radioprogram. Några av samplesen som hörs genom hela låten
            kan man höra vid 0:14, 0:38, 1:22, 2:44, 3:33, 3:42, 4:00, 4:49 och
            5:25.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="list-entry-title">4. Death Grips</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3 mb-5">
        <Col md={10}>
          <Image
            src={
              "https://queenmobs.s3.eu-west-2.amazonaws.com/wp-content/uploads/2015/05/28144411/death-grips.jpg"
            }
            fluid
            alt={"The Alchemist"}
            className="post-image"
            rounded
          ></Image>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10}>
          <p className="post-main-text">
            Vet du vilka <i>Death Grips</i> är och är bekant med deras musik så
            behöver jag inte säga mycket. Men om du inte har hört talas om Death
            Grips innan så kan jag kort beskriva deras musik:
            <br />
            "Experimentell hiphop med snabba, aggressiva trummor, rap där en arg
            <i>MC RIDE</i> skriker in i mikrofonen, och samples som kan vara
            allt från ett japanskt snabbtåg, en gitarr eller hybrisfyllt tal
            från kultledaren Charles Manson".
            <br />
            <br />
            Death Grips kan vara väldigt svåra att komma in i, men när det väl
            klickar, så är det svårt att uppleva något lika speciellt igen.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <VideoPlayer
            youtubeLink={"https://www.youtube.com/watch?v=uiMtCJw_RVc"}
            width="100%"
            height="30vh"
          />
        </Col>
        <Col md={12} lg={6}>
          <VideoPlayer
            youtubeLink={"https://www.youtube.com/watch?v=8_d1vVg36u4"}
            width="100%"
            height="30vh"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="video-description-text">
            Samplet taget från låten kan höras vid 0:40 och spelas genom hela
            låten.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="list-entry-title">5. Madlib</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3 mb-5">
        <Col md={10}>
          <Image
            src={
              "https://culted.com/wp-content/uploads/2022/08/FEATURED-@resident_advisor-scaled.jpg"
            }
            fluid
            alt={"The Alchemist"}
            className="post-image"
            rounded
          ></Image>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10}>
          <p className="post-main-text">
            Legendariska producenten <i>Madlib</i>, som ligger bakom några av de
            bästa hiphop-albumen någonsin. <i>Madvillainy</i>, <i>Piñata</i> och{" "}
            <i>Shades of Blue</i> är alla projekt som många skulle ranka bland
            det bästa som hiphop och rap har att erbjuda! Jag inkluderad då två
            av dessa är med bland mina topp 10 album någonsin.
            <br />
            <br />
            Jag kan alldeles för lite om musik och produktion för att kunna säga
            exakt vad det är som gör Madlib till en så unik och grym producent.
            Är det hans produktion, val av samples, eller val av rappare att
            samarbeta med? Men något jag med 100 procent säkerhet kan säga är
            att mannen kan producera fantastisk musik som alla borde ge ett
            ärligt försök.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <VideoPlayer
            youtubeLink={"https://www.youtube.com/watch?v=gSJeHDlhYls"}
            width="100%"
            height="30vh"
          />
        </Col>
        <Col md={12} lg={6}>
          <VideoPlayer
            youtubeLink={"https://www.youtube.com/watch?v=lq_2X89pc5I"}
            width="100%"
            height="30vh"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="video-description-text">
            Madlib har samplat flera delar av TV-serien "Ironsides" eftertexter
            (0:00, 2:14 och 2:23) och dessa kan höras genom hela låten.
          </p>
        </Col>
      </Row>
      <Row className="pt-3">
        <Col>
          <p className="post-author-name"> {customBlogPosttData.author}</p>
        </Col>
      </Row>
      <p className="post-time-of-publishing">{customBlogPosttData.timestamp}</p>
    </div>
  );
};

export default MusicSamplesPost;
