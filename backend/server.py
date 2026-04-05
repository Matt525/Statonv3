#!/usr/bin/env python3
"""Lightweight HRMS preview API server.

Run: python3 backend/server.py
"""

from __future__ import annotations

import json
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Any

HOST = "0.0.0.0"
PORT = 8000

PAYLOAD: dict[str, Any] = {
    "lifecycleStages": [
        {
            "title": "Hiring & Onboarding",
            "details": "Applicant tracking, interview pipelines, offer letters, digital document signing, and role-based onboarding checklists.",
        },
        {
            "title": "Growth & Mobility",
            "details": "Track promotions, department transfers, compensation revisions, and manager approvals with full audit history.",
        },
        {
            "title": "Exit & Retirement",
            "details": "Resignation workflows, exit interviews, final settlements, knowledge transfer, and retirement benefit processing.",
        },
    ],
    "coreModules": [
        "Employee lifecycle management",
        "Leave and attendance with mobile clock-in",
        "Expense claims and salary advances",
        "Payroll, taxes, and pay stub generation",
        "Goal setting, appraisals, and performance reviews",
        "Role-based dashboards for employees, managers, and HR",
    ],
    "architectureLayers": [
        {
            "heading": "Frontend (Responsive Web)",
            "points": [
                "React web client with mobile-first screens for leave requests, attendance, and reimbursements.",
                "PWA-ready patterns for quick access on employee phones.",
            ],
        },
        {
            "heading": "Backend (Python + Frappe)",
            "points": [
                "Custom Frappe app with DocTypes for Employee, Leave Request, Attendance Log, Payroll Batch, Expense Claim, and Appraisal Cycle.",
                "Server Scripts and Workflows to enforce multi-step approvals for leave, expenses, and payroll release.",
            ],
        },
        {
            "heading": "Data & Integrations",
            "points": [
                "MariaDB managed by Frappe/ERPNext stack with document-level permissions.",
                "Integrations for biometric devices, email/SMS alerts, accounting exports, and tax filing formats.",
            ],
        },
    ],
    "implementationPhases": [
        "Phase 1: Foundation (roles, departments, employee records, onboarding, leave, attendance)",
        "Phase 2: Finance ops (expenses, advances, salary structures, payroll engine, pay stubs, tax slabs)",
        "Phase 3: Talent ops (KPIs, goals, appraisals, promotion and transfer workflows)",
        "Phase 4: Mobility + reporting (mobile UX hardening, analytics, compliance exports, audit dashboards)",
    ],
}


class Handler(BaseHTTPRequestHandler):
    def _set_headers(self, status_code: int = 200, content_type: str = "application/json") -> None:
        self.send_response(status_code)
        self.send_header("Content-Type", content_type)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_OPTIONS(self) -> None:  # noqa: N802
        self._set_headers(204)

    def do_GET(self) -> None:  # noqa: N802
        if self.path == "/health":
            self._set_headers(200)
            self.wfile.write(json.dumps({"status": "ok"}).encode("utf-8"))
            return

        if self.path == "/api/hrms-blueprint":
            self._set_headers(200)
            self.wfile.write(json.dumps(PAYLOAD).encode("utf-8"))
            return

        self._set_headers(404)
        self.wfile.write(json.dumps({"error": "Not Found"}).encode("utf-8"))

    def log_message(self, format: str, *args: Any) -> None:  # noqa: A003
        return


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"PulseHR preview API running at http://{HOST}:{PORT}")
    server.serve_forever()
