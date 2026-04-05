# HRMS Blueprint (React + Python Preview API)

This project provides a modern, responsive preview app for a complete Human Resources Management System (HRMS).

## Included scope

- Employee lifecycle management (hiring, onboarding, promotions, transfers, exits, retirement)
- Leave and attendance workflows with mobile-friendly interactions
- Expense claims and salary advance approvals
- Payroll and taxation design (salary structures, runs, pay stubs)
- Goal and appraisal based performance management

## Backend direction

- **Target production backend:** Python + Frappe Framework
- **Preview backend in this repo:** lightweight Python API server for local app preview

## Run locally

Install frontend dependencies:

```bash
npm install
```

Run both the Python preview API and React app together:

```bash
npm run preview:app
```

This starts:

- API: `http://localhost:8000/api/hrms-blueprint`
- Frontend: `http://localhost:3000`

You can also run the API by itself:

```bash
python3 backend/server.py
```

Build for production:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```
