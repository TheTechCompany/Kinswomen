import Image from "next/image";
import styles from "./page.module.css";
import { KinswomanHeader } from "@/components/header";
import localFont from "next/font/local";
import { Button, TextField } from "@mui/material";


export default function Home() {

  const packages = [
    {
      title: "Pre birth postpartum planning"
    },
    {
      title: "2 hour postpartum visit"
    },
    {
      title: "3 postpartum visits package"
    }
  ];

  const cards: any[] = [
    {
      image: '/renata-adrienn-ebvCsRypmxM-unsplash.jpg',
      title: "POST PARTUM PLANNING",
      description: "We can make a plan together for what you want your post-partum to"
    },
    {
      image: '/daiga-ellaby-uooMllXe6gE-unsplash.jpg',
      title: "HELPFUL HOUSEWORK",
      description: "Keeping your household running smoothly doing whatever needs doing-whether it’s dishes, laundry, tidying, or cleaning."
    },
    {
      image: '/deryn-macey-IooxyWj2uso-unsplash.jpg',
      title: "MEALS + NOURISHMENT",
      description: "Taking care of cooking meals, helping with meal prep or planning, helping with groceries, or providing nourishing recipes."
    },
    {
      image: '/dan-gold-aJN-jjFLyCU-unsplash.jpg',
      title: "AFTER-BIRTH SUPPORT",
      description: "I can assist with cleaning up after the birth and creating a soothing environment for you to recover in."
    },
    {
      image: '/christin-hume-0MoF-Fe0w0A-unsplash.jpg',
      title: "MAMA CARE",
      description: "Helping you relax and care for your body with intention and herbal support such as healing body oils or a natural yoni steam blend."
    },
    {
      image: '/kyle-nieber-EKSRKJn_9a4-unsplash.jpg',
      title: "BABY WEARING",
      description: "Caring for your precious one while you take the time to rest, shower, and give yourself the space to be supported during recovery."
    }
  ];

  return (
    <div className={styles.page}>

      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: `url(/nikhil-prasad-0zvYY4X_zZk-unsplash.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'
      }}>
        <KinswomanHeader />

        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Post-Partum Care</h1>
          <h2 style={{ textAlign: 'center' }}>for whole family wellbeing</h2>
        </div>
      </div>
      <div>
        <div style={{
          background: '#dabcb2',
          padding: '12px'
        }}>
          <h1 style={{ color: '#985959', textTransform: 'uppercase', textAlign: 'center' }}>Services</h1>
        </div>
        <div style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: '#c39688',
          color: '#985959'
        }}>
          <div style={{
            width: '400px',
            height: '500px',
            overflow: 'hidden',
            position: 'relative'
            // backgroundSize: 'contain',
            // background: `url(/lou-lou-b-photo-0AdXnjtCpr0-unsplash.jpg)`
          }}>
            <img style={{ transformOrigin: '50% 50%', transform: 'rotate(-90deg) translate(150px, -150px)', position: 'absolute', height: 'auto', width: '200%' }} src={'/lou-lou-b-photo-0AdXnjtCpr0-unsplash.jpg'} />
          </div>
          <div style={{
            width: '30%'
          }}>
            <p>
              I offer to mother the mother. The quality of the postpartum
              time is said in Chinese medicine (amongst many other
              cultures) to set up the quality of your health for the rest of
              your life. The depth of the support, rest and nourishment a
              woman has in her postpartum time deeply affects the depth
              with which she can heal and prosper going forward. That is
              why I offer support to women and families in the
              postpartum time. So they can rest, nest, heal and adjust to
              life with their newborn.
              Also guidance with using the fertility awareness method to
              understand where you are at hormonally (and potentially
              assist with naturally helping correct any imbalances), to
              understand your cycle, to achieve pregnancy and to avoid
              pregnancy. (TTC, TTA).

              What that looks like varies greatly depending on your needs
              and wants.
              Here is a general idea of some services that can be offered.
            </p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '33px',
          paddingBottom: '24px',
          height: '100vh',
          background: '#c39688',
        }}>
          {cards?.map((card) => (
            <div style={{
              borderRadius: '12px',
              padding: '12px',
              background: 'rgb(217, 188, 178)',
              color: '#985959',
              maxWidth: '28vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{ background: `url(${card.image})`, backgroundSize: 'cover', width: '50%', aspectRatio: '1' }} />
              <h2 style={{ textAlign: 'center' }}>{card.title}</h2>
              <p style={{ textAlign: 'center' }}>{card.description}</p>
            </div>
          ))}
        </div>
        <div style={{
          display: 'flex',
          padding: '24px',
          justifyContent: 'center',
          color: '#985959',
          background: '#c39688',
        }}>
          <div>
            <h2>When mummas receive what they need, so can their families.</h2>
          </div>
        </div>
        <div style={{
          display: 'flex',
          gap: '24px',
          background: 'rgb(217, 188, 178)',
          color: '#985959',

          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            <img style={{
              borderRadius: '12px',
              width: '20vw'
            }}
              src={'/kayla.JPG'} />
            <div style={{ width: '40vw' }}>
              <h2 style={{ marginBottom: '12px' }}>About me</h2>
              <p>
                I m Kayla. Passionate about our innate, biological
                connection to self, our community and the world
                around us. I trust in the design of our bodies. I
                believe in the importance of mothers and family.
                Mothers are the roots of our society, if they are
                nourished, so can their families and our
                communities be. I enjoy tending to my garden,
                cooking, and being with people I love. Before I get
                consumed by creating my own family I would like to
                use my time to help women move gracefully into
                motherhood.
              </p>
            </div>
          </div>
        </div>
        <div style={{
          background: 'rgb(217, 188, 178)',
          color: '#985959',
          display: 'flex',
          gap: '24px',
          padding: '24px',
          flexDirection: 'column'
        }}>

          <h2 style={{ textAlign: 'center' }}>
            Experience
          </h2>

          <p style={{ width: '50vw', alignSelf: 'center', textAlign: 'left' }}>
            I lived with a women for the first month after giving birth to her 5th child. I
            supported her and her family with keeping the household going so she could
            rest.
          </p>
          <p style={{ width: '50vw', alignSelf: 'center', textAlign: 'left' }}>

            I have 3 years experience personally using the fertility awareness method as a
            natural form of birth control as well as a way to gather information about my
            health and hormones.
          </p>
          <p style={{ width: '50vw', alignSelf: 'center', textAlign: 'left' }}>

            I have a great passion for womens health, pregnancy, birth and postpartum
            so am constantly researching and talking to women about their experiences.
          </p>
          <p style={{ width: '50vw', alignSelf: 'center', textAlign: 'left' }}>

            I have been a part of the Womb Web, a collective providing personalised
            support for mothers in need
          </p>
        </div>



      </div>

      <div style={{
                 color: 'rgb(217, 188, 178)',
                 background: '#985959',
                 padding: '12px'
      }}>
        <h1 style={{textAlign: 'center'}}>Packages</h1>
      </div>
      <div style={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          zIndex: -1,
          left: 0,
          top: 0,
          background: `url(/nikhil-prasad-0zvYY4X_zZk-unsplash.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: '0 50%',
          filter: 'blur(5px)',
        }} />
        {packages?.map((pack) => (
            <div style={{
              width: '50vw',
              borderRadius: '12px',
              padding: '12px',
              background: '#985959'
            }}>
              <h4>{pack.title}</h4>
            </div>
          ))}
      </div>

      <div style={{
        height: '40vh',
        flexDirection: 'column',
        display: 'flex'
      }}>
        <div style={{
          padding: '12px',
          color: 'rgb(217, 188, 178)',
          background: '#985959',
        }}>
          <h2 style={{textAlign: 'center'}}>Contact</h2>
        </div>

        <div style={{
          flex: 1,
          gap: '12px',
          display: 'flex',
          flexDirection: 'column',
          background: 'rgb(217, 188, 178)',
          color: '#985959',
          padding: '24px'
        }}>
          <p style={{
            textAlign: 'center',
            alignSelf: 'center',
            width: '80vw'
          }}>Start your birth journey with confidence knowing you have the support you
            need. Call or email for a free alignment consultation, where we can discuss

            your needs and budget to find the care plan that's right for you.</p>

          <div style={{
            marginTop: '24px',
             display: 'flex',
             width: '50vw',
             alignSelf: 'center',
             flexDirection: 'column',
             gap: '12px'
          }}>
            <TextField size="small" label="Name" />
            <TextField size="small" label="E-mail" />
            <TextField size="small" label="Phone number" />
            
            <Button variant="contained">Get in touch</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
