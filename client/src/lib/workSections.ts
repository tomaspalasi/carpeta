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
} as const;
export type WorkSection = keyof typeof WORK_SECTIONS;
export function getWorkSection(id: number): WorkSection {
  if ([6, 7, 8, 9, 10, 11].includes(id)) return "ideas";
  return "work";
}
export function getSectionWorks(section: WorkSection) {
  return PORTFOLIO_WORKS.filter(work => getWorkSection(work.id) === section);
}
