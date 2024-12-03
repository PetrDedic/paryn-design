import {
  AspectRatio,
  Button,
  Card,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import NextImage from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardsData = [
  {
    title: "Brand\nidentita",
    image: "/Fotky/Brand_Identity_paryn_design.webp",
  },
  {
    title: "Logotvorba",
    image: "/Fotky/Logotvorba_paryn_design.webp",
  },
  {
    title: "Bannery",
    image: "/Fotky/Bannery_paryn_design.webp",
  },
  {
    title: "Tiskoviny",
    image: "/Fotky/Tiskoviny_paryn_design.webp",
  },
  {
    title: "Návrh\nna textil",
    image: "/Fotky/Navrh_na_textil_paryn_design.webp",
  },
  {
    title: "Správa\nsociálních sítí",
    image: "/Fotky/Sprava_socialnich_siti_paryn_design.webp",
  },
  {
    title: "Webové\nstránky",
    image: "/Fotky/Webove_stranky_paryn_design.webp",
  },
  {
    title: "Fotografie",
    image: "/Fotky/Fotografie_paryn_design.webp",
  },
];

export default function IndexPage() {
  const smallWindow = useMediaQuery("(max-width: 1200px)");

  return (
    <Stack
      p={smallWindow ? 16 : 32}
      pb={64}
      justify="center"
      align="center"
      gap={72}
      maw={1920}
      mx="auto"
    >
      <Stack justify="center" align="center" id="hero">
        <Image
          component={NextImage}
          src="/SVG/Paryn_design_logo.svg"
          alt="Logo"
          width={256}
          height={128}
          maw={256}
        />
        <Stack justify="center" align="center" gap={16}>
          <Title order={1} ta="center" fz={smallWindow ? 24 : 34}>
            Spojuji kreativitu a strategii,
            <br />
            abych vaší značce dodal nový rozměr...
          </Title>
          <Text c="#ef1224" fz={20}>
            Vzhled, který mluví za Vás.
          </Text>
        </Stack>
      </Stack>

      <Stack gap={24} justify="center" align="center" id="services" w="100%">
        <Title order={2} ta="center" fz={smallWindow ? 20 : 26}>
          Na jaké služby se zaměřuji?
        </Title>
        <motion.div
          style={{ width: smallWindow ? "100%" : "75%" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid>
            {cardsData.map((card, index) => (
              <Grid.Col key={index} span={{ base: 6, xs: 6, sm: 6, lg: 3 }}>
                <motion.div variants={cardVariants}>
                  <AspectRatio ratio={1 / 1}>
                    <Card
                      p={0}
                      radius={16}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px",
                        backgroundImage: `url(${card.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Flex
                        w="100%"
                        h="100%"
                        align="end"
                        justify="start"
                        p={smallWindow ? 16 : 32}
                      >
                        <Text
                          c="white"
                          fw={700}
                          fz={smallWindow ? 24 : "2vw"}
                          lh={1.25}
                        >
                          {card.title}
                        </Text>
                      </Flex>
                    </Card>
                  </AspectRatio>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>
      </Stack>

      <Stack gap={24} justify="center" align="center" id="contact">
        <Title order={2} ta="center" fz={smallWindow ? 20 : 26}>
          Využijte mé služby
          <br />a kontaktujte mě ještě dnes!
        </Title>
        <Flex gap={24} align="center" justify="center" wrap="wrap">
          <a
            href="mailto:paryndesign@gmail.com"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            <Flex gap={8} align="center" justify="center">
              <Image
                component={NextImage}
                src="/SVG/Email.svg"
                alt="Email svg"
                w={48}
                width={48}
                h={48}
                height={48}
              />
              <Text fz={14}>paryndesign@gmail.com</Text>
            </Flex>
          </a>
          <a
            href="tel:+420 730 136 592"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            <Flex gap={8} align="center" justify="center">
              <Image
                component={NextImage}
                src="/SVG/Telefon.svg"
                alt="Telefon svg"
                w={32}
                width={32}
                h={48}
                height={48}
              />
              <Text fz={14}>
                +420{" "}
                <Text span fw={600} fz={14}>
                  730 136 592
                </Text>
              </Text>
            </Flex>
          </a>
        </Flex>
      </Stack>

      <Card
        bg="#10141c"
        w={smallWindow ? "100%" : "75%"}
        radius={16}
        py={24}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px",
          backgroundImage: "url('/SVG/Logo_do_banneru.svg') !important",
          backgroundRepeat: "no-repeat !important",
          backgroundSize: "50% !important",
          backgroundPosition: "125% center !important",
        }}
        id="cta"
      >
        <Stack align="center" justify="center" gap={16}>
          <Text c="white" ta="center" fz={20}>
            Webové stránky jsou v přípravě.
            <br />
            Snažíme se, aby pro Vás byly co nejlépe optimální!
          </Text>
          <Text c="white" ta="center" fz={20}>
            Aktuální prezentaci naleznete níže v odkazu.
          </Text>
          <a
            href="https://drive.google.com/drive/u/1/folders/1EG9Wemk883YM_rCKe9UrD8_75vzWjI3Q"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            <Button radius={12} color="#ef1224">
              Více informací
            </Button>
          </a>
          <Text c="white" ta="center" fz={20}>
            Aktuální tvorbu naleznete{" "}
            <a
              href="https://www.facebook.com/paryndesign"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              <Text span td="underline" fw={700} fz={20}>
                ZDE
              </Text>
            </a>
            .
          </Text>
        </Stack>
      </Card>

      <Stack>
        <Text ta="center" fz={20} id="thanks">
          Děkuji za pochopení
          <br />a budu se těšit na možnou spolupráci.
        </Text>

        <Flex gap={24} align="center" justify="center" wrap="wrap" id="socials">
          <a
            href="https://www.instagram.com/paryndesign/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            <Image
              component={NextImage}
              src="/SVG/Instagram.svg"
              alt="Instagram svg"
              w={64}
              width={64}
              h={64}
              height={64}
            />
          </a>
          <a
            href="https://www.facebook.com/paryndesign"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            <Image
              component={NextImage}
              src="/SVG/Facebook.svg"
              alt="Facebook svg"
              w={64}
              width={64}
              h={64}
              height={64}
            />
          </a>
        </Flex>
      </Stack>
    </Stack>
  );
}
