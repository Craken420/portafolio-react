import React from 'react';
import './curriculum.css';
import { FaGithub, FaLinkedin, FaStackOverflow, FaPython, FaNodeJs, FaJs, FaVuejs, FaAngular, FaAws, FaGitAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { SiFastapi, SiDocker, SiPostgresql, SiSap } from 'react-icons/si';
import { TbDatabase, TbServer, TbFingerprint } from 'react-icons/tb';

export default function Curriculum() {
  return (
    <div className="container">
      <h1>📄 CURRÍCULUM VITAE – Luis Angel Peña Zuñiga</h1>
      <div className="sub">Líder Técnico en Desarrollo de Software</div>
      <div className="sub">Especialista en Migraciones, Cloud Solutions y Biometría</div>
      <p className="contact">
        <MdLocationOn /> Guadalajara, Jal. | <FiMail /> <a href="mailto:pezu.luis01@gmail.com">pezu.luis01@gmail.com</a> | <BsFillTelephoneFill /> 3328247811
      </p>
      <p className="contact">
        <a href="https://github.com/Craken420" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a> {' | '}
        <a href="https://www.linkedin.com/in/luis-angel-pe%C3%B1a-zu%C3%B1iga-707221188/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a> {' | '}
        <a href="https://stackoverflow.com/users/10688370/luis-angel-pena-zuniga" target="_blank" rel="noopener noreferrer"><FaStackOverflow /> Stack Overflow</a>
      </p>

      <h2>🧭 Perfil Profesional</h2>
      <p>Líder técnico con 7+ años de experiencia en desarrollo e integración de soluciones empresariales. Especializado en migraciones tecnológicas, arquitecturas híbridas on-premise/cloud, aplicaciones serverless, biometría y modernización de sistemas legacy. Capaz de estabilizar entornos críticos, liderar equipos multidisciplinarios y construir soluciones robustas en AWS y SAP.</p>

      <h2>🏆 Logros Relevantes</h2>
      <ul>
        <li>🔁 Migración completa de ERP Intelisis v3500 a v5000 y transición a SAP Business Application Studio, integrando CPIs y entornos híbridos.</li>
        <li>🧩 Arquitectura serverless multiruntime (Python + Node.js) con AWS Lambda, SAM CLI y API Gateway.</li>
        <li>🧠 Refactorización de SQL que redujo tiempos de consulta de horas a segundos.</li>
        <li>✋ Migración de sistema biométrico de C# con WebSocket a Node.js con librería nativa.</li>
        <li>🧰 Estabilización de apps en IIS y optimización de recursos y servicios externos.</li>
        <li>🚀 Ascenso a Líder Técnico liderando equipo de 6 personas en migración cloud.</li>
      </ul>
      <h2>📌 Proyectos Clave</h2>
      <ul>
        <li><strong>Control de Huellas (.blop):</strong> Reingeniería de solución C# a stack moderno (AWS + Node + Python + Vue + Postgres).</li>
        <li><strong>Infraestructura Biométrica:</strong> Gestión e integración de dispositivos en apps Windows/Web con soporte multi-dispositivo.</li>
        <li><strong>SAP-AWS Integration:</strong> Consumo de APIs SAP + CPIs + SQL/Postgres desde AWS vía Lambda.</li>
        <li><strong>Unificación de entornos Git:</strong> Consolidación y estabilización de entornos críticos en IIS.</li>
      </ul>

      <h2>👥 Liderazgo y Gestión</h2>
      <ul>
        <li>Coordinación de equipos técnicos (hasta 6 personas).</li>
        <li>Estrategias de migración a la nube y modernización tecnológica.</li>
        <li>Organización de repositorios y control de versiones.</li>
      </ul>

      <h2>🌱 Soft Skills</h2>
      <ul>
        <li>Resolución de problemas complejos.</li>
        <li>Liderazgo técnico y mentoring.</li>
        <li>Comunicación inter-áreas y trato con proveedores.</li>
        <li>Trabajo bajo presión.</li>
        <li>Aprendizaje acelerado: "No lo sé, pero lo puedo aprender. No lo domino, pero lo puedo dominar."</li>
      </ul>

      <h2>🌐 Idiomas</h2>
      <ul>
        <li>Español: Nativo</li>
        <li>Inglés: Intermedio – Lectura técnica fluida, comunicación funcional.</li>
      </ul>

      <h2>💻 Contribuciones a la Comunidad</h2>
      <ul>
        <li>Proyectos y prácticas en GitHub.</li>
        <li>Participación y soluciones en Stack Overflow.</li>
      </ul>
      <h2>⚙️ Habilidades Técnicas</h2>
      <div className="skills-grid">
        <ul>
          <li><FaPython /> Python (avanzado)</li>
          <li><FaNodeJs /> Node.js</li>
          <li>C# (experto)</li>
          <li><FaJs /> JavaScript</li>
          <li>SQL Server (avanzado), <SiPostgresql /> PostgreSQL</li>
        </ul>
        <ul>
          <li><FaVuejs /> Vue.js</li>
          <li><FaAngular /> Angular</li>
          <li> Delphi (migración)</li>
          <li><SiFastapi /> FastAPI</li>
          <li> Windows Forms, Web Forms</li>
        </ul>
        <ul>
          <li><FaAws /> AWS, SAM CLI, API Gateway, <SiDocker /> Docker</li>
          <li><SiSap /> SAP HANA Cloud, Business App Studio, CPIs</li>
          <li><TbServer /> IIS (migración, seguridad, tuning)</li>
          <li><FaGitAlt /> Git, CI/CD, Serverless</li>
          <li><TbDatabase /> Integración: SAP + SQL Server + PostgreSQL</li>
          <li><TbFingerprint /> Biometría: U.are.U 4500/5300, migración C# a Node.js</li>
        </ul>
      </div>
    </div>
  );
}
