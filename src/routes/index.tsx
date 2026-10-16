import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CarFront, Bike, Globe2, Wrench, Instagram, Check } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const courses = [
  { id: "auto-br", tag: "MAIS PROCURADO", title: "Mecânica Automotiva", subtitle: "Do zero ao avançado", detail: "Motor, freios, suspensão, injeção eletrônica e scanner.", language: "Português", url: "https://mecanicoautomotiva.lovable.app/", icon: CarFront, accent: "gold", action: "Conhecer formação" },
  { id: "moto-br", tag: "PARA APAIXONADOS POR MOTOS", title: "Mecânica de Motos", subtitle: "Aprenda na prática", detail: "Manutenção, motor, elétrica, diagnóstico e muito mais.", language: "Português", url: "https://mecanicomoto.lovable.app/", icon: Bike, accent: "blue", action: "Explorar curso" },
  { id: "auto-es", tag: "CURSO EN ESPAÑOL", title: "Mecánica Automotriz", subtitle: "Desde cero hasta avanzado", detail: "Motores, frenos, suspensión, inyección y diagnóstico.", language: "Español", url: "https://mecautos.lovable.app", icon: Globe2, accent: "red", action: "Ver formación" },
];

function trackedLink(url: string, id: string) {
  const target = new URL(url);
  const incoming = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"].forEach((key) => {
    const value = incoming.get(key);
    if (value) target.searchParams.set(key, value);
  });
  if (!target.searchParams.has("utm_source")) target.searchParams.set("utm_source", "instagram");
  if (!target.searchParams.has("utm_medium")) target.searchParams.set("utm_medium", "bio");
  if (!target.searchParams.has("utm_campaign")) target.searchParams.set("utm_campaign", "link_bio");
  target.searchParams.set("utm_content", id);
  target.searchParams.set("bio_curso", id);
  return target.toString();
}

function Index() {
  return (
    <main className="bio-page">
      <div className="bio-glow" aria-hidden="true" />
      <div className="bio-container">
        <header className="bio-header">
          <div className="bio-logo"><Wrench size={29} strokeWidth={2.4} /></div>
          <p className="bio-kicker">ACADEMIA DIGITAL DE MECÂNICA</p>
          <h1>Seu próximo passo começa <span>aqui.</span></h1>
          <p className="bio-intro">Escolha o curso ideal para você e aprenda mecânica no seu ritmo, de onde estiver.</p>
          <div className="bio-pills"><span><Check size={13}/> 100% online</span><span><Check size={13}/> Estude no seu ritmo</span></div>
        </header>
        <section className="bio-section" aria-label="Nossos cursos">
          <div className="bio-section-heading"><span>EXPLORE NOSSOS CURSOS</span><span className="bio-count">03 FORMAÇÕES</span></div>
          <div className="bio-courses">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <a className={`bio-course bio-course-${course.accent}`} key={course.id} href={trackedLink(course.url, course.id)} aria-label={`Conhecer curso de ${course.title}`}>
                  <div className="bio-course-icon"><Icon size={31} strokeWidth={1.65}/></div>
                  <div className="bio-course-body">
                    <div className="bio-tag">{course.tag}</div>
                    <h2>{course.title}</h2>
                    <p className="bio-subtitle">{course.subtitle} <span>• {course.language}</span></p>
                    <p className="bio-detail">{course.detail}</p>
                    <div className="bio-course-cta">{course.action}<ArrowUpRight size={17}/></div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
        <footer className="bio-footer"><div className="bio-footer-line"/><p>Aprenda hoje. Evolua sempre.</p><small>© {new Date().getFullYear()} Academia Digital de Mecânica</small></footer>
      </div>
    </main>
  );
}
