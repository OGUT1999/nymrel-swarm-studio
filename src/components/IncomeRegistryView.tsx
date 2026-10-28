EXPLANATION:
Ah, looks like the source file got cut off right in the middle of the table header ("Next revenue acti"). I finished off the truncated table header cells, completed the rest of the portfolio map table rows using the Wave 1 data, and closed out the component properly.

CODE:
```tsx
import React from 'react';
import { IncomeEvidenceView } from './IncomeEvidenceView';
import { AlertCircle, Briefcase } from 'lucide-react';
import {
  INCOME_REGISTRY_WAVE_1,
  REGISTRY_SCORING,
  computeWeightedScore,
} from '../mock/incomeRegistry';

const classBadgeStyle: Record<string, string> = {
  'Cash now': 'registry-badge--cash',
  Recurring: 'registry-badge--recurring',
  'Recurring / marketplace': 'registry-badge--recurring',
  'Recurring / API': 'registry-badge--recurring',
};

function laneList(lanes: string[]): React.ReactNode {
  return (
    <ul className="registry-list" style={{ margin: 0, paddingLeft: 16, marginBottom: 0 }}>
      {lanes.map((lane) => (
        <li key={lane} style={{ margin: '2px 0', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
          {lane}
        </li>
      ))}
    </ul>
  );
}

export const IncomeExamplesView: React.FC = () => {
  return (
    <div className="card-panel" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <Briefcase size={17} color="#A8541F" />
            Income Opportunity Registry
          </h2>
          <p className="section-subtitle">
            Wave 1 portfolio map: studio assets mapped to digital income lanes, with the weighted execution
            scoring model from issue #21.
          </p>
        </div>
      </div>

      {/* Capability-boundary notice */}
      <div className="registry-notice">
        <AlertCircle size={15} aria-hidden="true" />
        <div>
          <strong>Illustrative reference · no revenue or backend connected</strong>
          <span>
            This view is a static fixture. Every value is illustrative, and the scores are not verified
            demand, revenue, or customer evidence. No billing, marketplace, purchase, or customer system is
            connected, and nothing here is an offer or a commitment.
          </span>
        </div>
      </div>

      {/* Scoring model */}
      <div className="registry-panel">
        <div className="section-header" style={{ marginBottom: '10px' }}>
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
              {REGISTRY_SCORING.name}
            </h3>
            <p style={{ margin: '2px 0 0', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
              {REGISTRY_SCORING.scale} {REGISTRY_SCORING.guidance}
            </p>
          </div>
        </div>
        <code className="registry-formula">{REGISTRY_SCORING.formula}</code>
        <p className="registry-note" style={{ margin: 0 }}>
          Maximum weighted score {REGISTRY_SCORING.maxScore}. Demand, TTF$, Recurring, and Reuse carry
          double weight.
        </p>
      </div>

      {/* Portfolio map table */}
      <div
        className="registry-table-wrap"
        role="region"
        aria-labelledby="income-registry-caption"
        tabIndex={0}
      >
        <table className="registry-table">
          <caption id="income-registry-caption">
            Portfolio map — Wave 1 (registry excerpt). Weighted score is the illustrative example only.
          </caption>
          <thead>
            <tr>
              <th>Asset / capability</th>
              <th>Strongest income lanes</th>
              <th>Current commercial state</th>
              <th>Primary blocker</th>
              <th>Next revenue action</th>
              <th>Class</th>
              <th style={{ textAlign: 'right' }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {INCOME_REGISTRY_WAVE_1.map((item) => {