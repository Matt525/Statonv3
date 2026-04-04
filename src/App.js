import './App.css';

const lifecycleStages = [
  {
    title: 'Hiring & Onboarding',
    details:
      'Applicant tracking, interview pipelines, offer letters, digital document signing, and role-based onboarding checklists.',
  },
  {
    title: 'Growth & Mobility',
    details:
      'Track promotions, department transfers, compensation revisions, and manager approvals with full audit history.',
  },
  {
    title: 'Exit & Retirement',
    details:
      'Resignation workflows, exit interviews, final settlements, knowledge transfer, and retirement benefit processing.',
  },
];

const coreModules = [
  'Employee lifecycle management',
  'Leave and attendance with mobile clock-in',
  'Expense claims and salary advances',
  'Payroll, taxes, and pay stub generation',
  'Goal setting, appraisals, and performance reviews',
  'Role-based dashboards for employees, managers, and HR',
];

const architectureLayers = [
  {
    heading: 'Frontend (Responsive Web)',
    points: [
      'React web client with mobile-first screens for leave requests, attendance, and reimbursements.',
      'PWA-ready patterns for quick access on employee phones.',
    ],
  },
  {
    heading: 'Backend (Python + Frappe)',
    points: [
      'Custom Frappe app with DocTypes for Employee, Leave Request, Attendance Log, Payroll Batch, Expense Claim, and Appraisal Cycle.',
      'Server Scripts and Workflows to enforce multi-step approvals for leave, expenses, and payroll release.',
    ],
  },
  {
    heading: 'Data & Integrations',
    points: [
      'MariaDB managed by Frappe/ERPNext stack with document-level permissions.',
      'Integrations for biometric devices, email/SMS alerts, accounting exports, and tax filing formats.',
    ],
  },
];

const implementationPhases = [
  'Phase 1: Foundation (roles, departments, employee records, onboarding, leave, attendance)',
  'Phase 2: Finance ops (expenses, advances, salary structures, payroll engine, pay stubs, tax slabs)',
  'Phase 3: Talent ops (KPIs, goals, appraisals, promotion and transfer workflows)',
  'Phase 4: Mobility + reporting (mobile UX hardening, analytics, compliance exports, audit dashboards)',
];

function App() {
  return (
    <div className="hrms-app">
      <header className="hero">
        <p className="eyebrow">HR Management System Blueprint</p>
        <h1>Modern HRMS for the Full Employee Journey</h1>
        <p>
          A complete, mobile-friendly human resources platform built with a React frontend and a Python backend on
          Frappe.
        </p>
      </header>

      <section>
        <h2>Employee Lifecycle Coverage</h2>
        <div className="card-grid">
          {lifecycleStages.map((stage) => (
            <article className="card" key={stage.title}>
              <h3>{stage.title}</h3>
              <p>{stage.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Core Functional Modules</h2>
        <ul className="checklist">
          {coreModules.map((module) => (
            <li key={module}>{module}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Recommended Technical Architecture</h2>
        <div className="card-grid">
          {architectureLayers.map((layer) => (
            <article className="card" key={layer.heading}>
              <h3>{layer.heading}</h3>
              <ul>
                {layer.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Delivery Roadmap</h2>
        <ol className="roadmap">
          {implementationPhases.map((phase) => (
            <li key={phase}>{phase}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default App;
