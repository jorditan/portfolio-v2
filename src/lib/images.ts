import type { ImageMetadata } from "astro";

import filmInformation from "@/assets/images/projects/film_information.webp";
import testPhishing from "@/assets/images/projects/test_phishing.webp";
import redesignLegales from "@/assets/images/projects/redesign_legales.webp";
import diagnostico from "@/assets/images/projects/diagnostico-ciberseguridad.webp";
import la12 from "@/assets/images/projects/la-12-digital.webp";
import marki from "@/assets/images/projects/marki-landing-page.webp";

// Gallery WebP imports
import letterboxdMain from "@/assets/images/projects/letterboxd-main.webp";
import letterboxdSearchResults from "@/assets/images/projects/letterboxd-search-results.webp";
import letterboxdYourActivity from "@/assets/images/projects/letterboxd-your-activity.webp";

import la12Main from "@/assets/images/projects/la-12-digital-main.webp";
import la12Noticias from "@/assets/images/projects/la-12-digital-noticias.webp";
import la12Eleven from "@/assets/images/projects/la-12-digital-11.webp";
import la12Juego from "@/assets/images/projects/la-12-digita-juego.webp";

import testPhishingQuestion from "@/assets/images/projects/test-phishing-question.webp";

import diagnosticoInit from "@/assets/images/projects/diagnostico-ciberseguridad-init.webp";
import diagnosticoQuestion from "@/assets/images/projects/diagnostico-ciberseguridad-question.webp";
import diagnosticoMapaProgreso from "@/assets/images/projects/diagnostico-mapa-progreso.webp";

import markiDashboard from "@/assets/images/projects/marki-dashboard.webp";
import markiPlanContenido from "@/assets/images/projects/marki-plan-contenido.webp";
import markiConfig from "@/assets/images/projects/marki-config.webp";

import cumpleChico from "@/assets/images/about/cumple-chico.webp";
import mamaYo from "@/assets/images/about/mama-yo.webp";
import mamaDami from "@/assets/images/about/mama-dami.webp";
import papaYo from "@/assets/images/about/papa-yo.webp";
import damiPapa from "@/assets/images/about/dami-papa.webp";
import fotoCampo from "@/assets/images/about/foto-campo.webp";
import fotoSlack from "@/assets/images/about/foto-slack.webp";
import fotoMerendando from "@/assets/images/about/foto-merendando.webp";
import fotoPlaya from "@/assets/images/about/foto_playa.webp";
import pollyFoto from "@/assets/images/about/polly-foto.webp";
import juanpiFoto from "@/assets/images/about/juanpi-foto.webp";
import santiFoto from "@/assets/images/about/santi-ushher.webp";

import certUserResearch from "@/assets/images/certificates/course-certificate-user-research-methods-and-best-practices.webp";
import certAi from "@/assets/images/certificates/course-certificate-ai-for-designers.webp";
import certOoux from "@/assets/images/certificates/object-oriented-ux.webp";
import certDiseno from "@/assets/images/certificates/diseno-ux-ui-avanzado-coder.webp";
import certPostgres from "@/assets/images/certificates/postgre-desde-cero.webp";
import certVue from "@/assets/images/certificates/vue.js-de-cero-a-experto.webp";

import fotoLinkedin from "@/assets/images/misc/foto-linkedin.webp";
import glLight from "@/assets/images/misc/G&L-group-light.webp";
import glDark from "@/assets/images/misc/G&L-group-dark.webp";
import hackmetrix from "@/assets/images/brand/hackmetrix-logo.webp";

export const projectImages: Record<string, ImageMetadata> = {
  "letterboxd-redesign": filmInformation,
  "test-phishing-hackmetrix": testPhishing,
  "modulo-legales-hackmetrix": redesignLegales,
  "diagnostico-ciberseguridad-hackmetrix": diagnostico,
  "la-12-digital": la12,
  marki: marki,
  "marki-landing-page": marki,
};

export const projectGalleries: Record<string, ImageMetadata[]> = {
  "letterboxd-redesign": [
    letterboxdMain,
    letterboxdSearchResults,
    letterboxdYourActivity,
  ],
  "la-12-digital": [
    la12Main,
    la12Noticias,
    la12Eleven,
    la12Juego,
  ],
  "test-phishing-hackmetrix": [
    testPhishingQuestion,
  ],
  "diagnostico-ciberseguridad-hackmetrix": [
    diagnosticoInit,
    diagnosticoQuestion,
    diagnosticoMapaProgreso,
  ],
  marki: [
    markiDashboard,
    markiPlanContenido,
    markiConfig,
  ],
  "marki-landing-page": [
    markiDashboard,
    markiPlanContenido,
    markiConfig,
  ],
};

export const aboutPhotos = {
  familia: [
    { src: cumpleChico, alt: "Cumpleaños de chico con la familia" },
    { src: mamaYo, alt: "Con mamá" },
    { src: mamaDami, alt: "Con mamá y mi hermano Damián" },
    { src: papaYo, alt: "Con papá" },
    { src: damiPapa, alt: "Damián y papá" },
  ],
  personal: [
    { src: fotoCampo, alt: "Foto con una cámara de fotos en Entre Ríos" },
    { src: fotoSlack, alt: "Primera foto en mucho tiempo" },
    { src: fotoMerendando, alt: "Foto merendando" },
    { src: fotoPlaya, alt: "Foto en la playa de Entre Ríos" },
  ],
};

export const reviewAvatars: Record<string, ImageMetadata> = {
  polly: pollyFoto,
  juanpi: juanpiFoto,
  santi: santiFoto,
};

export const certificates = [
  {
    title: "User research methods and best practices",
    image: certUserResearch,
    url: "https://ixdf.org/members/matias-owen-jordan/certificate/course/9bcc08bd-1d51-427d-836b-443483b92ac8?r=matias-owen-jordanL",
    type: "design",
  },
  {
    title: "AI for Designers",
    image: certAi,
    url: "https://ixdf.org/members/matias-owen-jordan/certificate/course/7bc6c407-a552-4ade-80a5-6253aa3dbb0c",
    type: "design",
  },
  {
    title: "Object Oriented UX",
    type: "design",
    image: certOoux,
    url: "https://www.udemy.com/certificate/UC-15e3850a-9a38-4203-b98f-7c088a5f0710/",
  },
  {
    title: "Diseño UX/UI Avanzado",
    type: "design",
    image: certDiseno,
    url: "https://pub.coderhouse.com/legacy-certificates/66ce53b20eaa20d842a2d82a?lang=es",
  },
  {
    title: "Postgre SQL",
    type: "development",
    image: certPostgres,
    url: "https://cursos.devtalles.com/certificates/uzpjdaf8eq",
  },
  {
    title: "Vue.js de cero a experto",
    type: "development",
    image: certVue,
    url: "https://cursos.devtalles.com/certificates/kpsayxav36",
  },
] as const;

export const miscImages = {
  fotoLinkedin,
  glLight,
  glDark,
  hackmetrix,
  fotoCampo,
};
