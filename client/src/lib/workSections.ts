import { PORTFOLIO_WORKS } from "@/const";

export const WORK_SECTIONS = {
  work: {
    label: "Trabajos",
    path: "/work",
    eyebrow: "TRABAJOS SELECCIONADOS",
    title: "FUERA DE",
    subtitle: "MI CABEZA.",
    description:
      "Ideas que se hicieron imagen, palabra y alguna que otra locura.",
  },
  ideas: {
    label: "Baúl de ideas",
    path: "/ideas",
    eyebrow: "IDEAS LIBRES",
    title: "BAÚL DE",
    subtitle: "IDEAS.",
    description:
      "Experimentos, ocurrencias y otras ideas que merecen salir a jugar.",
  },
  realTimes: {
    label: "Real Times",
    path: "/real-times",
    eyebrow: "IDEAS EN EL MOMENTO JUSTO",
    title: "REAL",
    subtitle: "TIMES.",
    description:
      "Fechas, momentos y conversaciones que se convierten en ideas.",
  },
} as const;
export type WorkSection = keyof typeof WORK_SECTIONS;
export function getWorkSection(id: number): WorkSection {
  if ([10, 11].includes(id)) return "ideas";
  if ([2, 5, 6, 9].includes(id)) return "realTimes";
  return "work";
}
export function getSectionWorks(section: WorkSection) {
  return PORTFOLIO_WORKS.filter(work => getWorkSection(work.id) === section);
}
