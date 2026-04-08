import { useState, useEffect, useRef } from 'react';

// ─── SEED DATA ───────────────────────────────────────────────────────────────
const SEED_STUDENTS = [
  {
    id: 's1',
    name: 'Arman Hossain',
    email: 'arman@gmail.com',
    phone: '01711-223344',
    passport: 'BD8823412',
    dob: '1999-03-15',
    nationality: 'Bangladeshi',
    targetCountry: 'Australia',
    targetUniversity: 'RMIT University',
    intakeTerm: 'Feb 2025',
    course: 'Master of IT',
    stage: 'COE Issued',
    visaStatus: 'Subclass 500 Granted',
    assignedConsultant: 'Tanzeel Ahmed',
    createdAt: '2024-11-10',
    lastContact: '2025-04-01',
    documents: {
      passport: true,
      ssc: true,
      hsc: true,
      bachelors: true,
      ielts: true,
      offerLetter: true,
      coe: true,
      visaGrant: true,
      medicals: false,
      policeClearance: false,
    },
    notes: [
      {
        id: 'n1',
        date: '2025-04-01',
        author: 'Tanzeel Ahmed',
        type: 'Call',
        text: 'Discussed onshore course change from IT to Data Analytics. Student agreed to stay with original course after reviewing AQF requirements.',
      },
      {
        id: 'n2',
        date: '2025-03-15',
        author: 'Tanzeel Ahmed',
        type: 'Email',
        text: 'Sent COE confirmation to student and parent. COE number: AUS-2025-COE-00123.',
      },
    ],
    tasks: [
      {
        id: 't1',
        text: 'Send pre-departure checklist',
        due: '2025-04-10',
        done: false,
      },
      {
        id: 't2',
        text: 'Confirm airport pickup arrangement',
        due: '2025-04-12',
        done: false,
      },
    ],
    converted: true,
    monthConverted: '2025-03',
  },
  {
    id: 's2',
    name: 'Fatema Khanam',
    email: 'fatema@yahoo.com',
    phone: '01855-667788',
    passport: 'BD7712398',
    dob: '2000-07-22',
    nationality: 'Bangladeshi',
    targetCountry: 'Australia',
    targetUniversity: 'Monash University',
    intakeTerm: 'Jul 2025',
    course: 'BSc Computer Science',
    stage: 'Offer Received',
    visaStatus: 'Pending Application',
    assignedConsultant: 'Tanzeel Ahmed',
    createdAt: '2025-01-05',
    lastContact: '2025-04-03',
    documents: {
      passport: true,
      ssc: true,
      hsc: true,
      bachelors: false,
      ielts: true,
      offerLetter: true,
      coe: false,
      visaGrant: false,
      medicals: false,
      policeClearance: false,
    },
    notes: [
      {
        id: 'n3',
        date: '2025-04-03',
        author: 'Tanzeel Ahmed',
        type: 'Meeting',
        text: 'Face-to-face session. Reviewed offer letter conditions — English waiver confirmed. Need to collect final semester transcript.',
      },
    ],
    tasks: [
      {
        id: 't3',
        text: 'Collect final semester transcript',
        due: '2025-04-08',
        done: false,
      },
      {
        id: 't4',
        text: 'Submit visa application documents',
        due: '2025-04-20',
        done: false,
      },
    ],
    converted: false,
    monthConverted: null,
  },
  {
    id: 's3',
    name: 'Rakibul Islam',
    email: 'rakib@gmail.com',
    phone: '01922-334455',
    passport: 'BD9934521',
    dob: '1998-11-30',
    nationality: 'Bangladeshi',
    targetCountry: 'Australia',
    targetUniversity: 'University of Melbourne',
    intakeTerm: 'Jul 2025',
    course: 'MBA',
    stage: 'Applied',
    visaStatus: 'Not Started',
    assignedConsultant: 'Tanzeel Ahmed',
    createdAt: '2025-02-18',
    lastContact: '2025-03-28',
    documents: {
      passport: true,
      ssc: true,
      hsc: true,
      bachelors: true,
      ielts: false,
      offerLetter: false,
      coe: false,
      visaGrant: false,
      medicals: false,
      policeClearance: false,
    },
    notes: [
      {
        id: 'n4',
        date: '2025-03-28',
        author: 'Tanzeel Ahmed',
        type: 'Call',
        text: 'IELTS result expected May 5. If band 6.5+ achieved, will proceed to conditional offer immediately.',
      },
    ],
    tasks: [
      {
        id: 't5',
        text: 'Follow up IELTS result on May 6',
        due: '2025-05-06',
        done: false,
      },
    ],
    converted: false,
    monthConverted: null,
  },
  {
    id: 's4',
    name: 'Sumaiya Begum',
    email: 'sumaiya@outlook.com',
    phone: '01633-998877',
    passport: 'BD6612345',
    dob: '2001-05-12',
    nationality: 'Bangladeshi',
    targetCountry: 'Australia',
    targetUniversity: 'Deakin University',
    intakeTerm: 'Feb 2025',
    course: 'BBA Marketing',
    stage: 'Enrolled',
    visaStatus: 'Subclass 500 Granted',
    assignedConsultant: 'Tanzeel Ahmed',
    createdAt: '2024-08-20',
    lastContact: '2025-04-05',
    documents: {
      passport: true,
      ssc: true,
      hsc: true,
      bachelors: false,
      ielts: true,
      offerLetter: true,
      coe: true,
      visaGrant: true,
      medicals: true,
      policeClearance: true,
    },
    notes: [
      {
        id: 'n5',
        date: '2025-04-05',
        author: 'Tanzeel Ahmed',
        type: 'Email',
        text: 'Student confirmed enrollment at Deakin. Orientation week Feb 24. Alumni follow-up scheduled for April.',
      },
    ],
    tasks: [
      {
        id: 't6',
        text: 'Monthly check-in call — retention follow-up',
        due: '2025-04-15',
        done: false,
      },
    ],
    converted: true,
    monthConverted: '2025-01',
  },
  {
    id: 's5',
    name: 'Tanvir Ahmed',
    email: 'tanvir@gmail.com',
    phone: '01744-556677',
    passport: '',
    dob: '2000-09-08',
    nationality: 'Bangladeshi',
    targetCountry: 'Australia',
    targetUniversity: 'La Trobe University',
    intakeTerm: 'Jul 2025',
    course: 'Bachelor of Nursing',
    stage: 'New Inquiry',
    visaStatus: 'Not Started',
    assignedConsultant: 'Tanzeel Ahmed',
    createdAt: '2025-04-06',
    lastContact: '2025-04-06',
    documents: {
      passport: false,
      ssc: false,
      hsc: false,
      bachelors: false,
      ielts: false,
      offerLetter: false,
      coe: false,
      visaGrant: false,
      medicals: false,
      policeClearance: false,
    },
    notes: [
      {
        id: 'n6',
        date: '2025-04-06',
        author: 'Tanzeel Ahmed',
        type: 'Walk-in',
        text: 'First visit. Interested in nursing at La Trobe. Currently in 2nd year at Dhaka Medical College. Needs to finish degree first or explore pathway programs.',
      },
    ],
    tasks: [
      {
        id: 't7',
        text: 'Send pathway program brochure',
        due: '2025-04-09',
        done: false,
      },
      {
        id: 't8',
        text: 'Schedule full counseling session',
        due: '2025-04-11',
        done: false,
      },
    ],
    converted: false,
    monthConverted: null,
  },
];

const STAGES = [
  'New Inquiry',
  'Counselled',
  'Applied',
  'Offer Received',
  'COE Issued',
  'Enrolled',
];
const DOC_LABELS = {
  passport: 'Passport Copy',
  ssc: 'SSC Certificate',
  hsc: 'HSC Certificate',
  bachelors: "Bachelor's Degree",
  ielts: 'IELTS/English Test',
  offerLetter: 'Offer Letter',
  coe: 'COE',
  visaGrant: 'Visa Grant Letter',
  medicals: 'Medical Clearance',
  policeClearance: 'Police Clearance',
};
const NOTE_TYPES = [
  'Call',
  'Email',
  'Meeting',
  'Walk-in',
  'WhatsApp',
  'System',
];
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// ─── STORAGE HELPERS ─────────────────────────────────────────────────────────
function loadStudents() {
  try {
    const d = localStorage.getItem('educrm_students');
    return d ? JSON.parse(d) : SEED_STUDENTS;
  } catch {
    return SEED_STUDENTS;
  }
}
function saveStudents(students) {
  localStorage.setItem('educrm_students', JSON.stringify(students));
}

// ─── ICON COMPONENTS ─────────────────────────────────────────────────────────
const Icon = ({ name, size = 16 }) => {
  const icons = {
    dashboard: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
    students:
      'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    pipeline: 'M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z',
    tasks:
      'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z',
    docs: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z',
    target:
      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z',
    letter:
      'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    add: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
    close:
      'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    check: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
    alert: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
    phone:
      'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
    edit: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
    trash:
      'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
    search:
      'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
    download: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
    copy: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
    note: 'M3 18h12v-2H3v2zm0-5h12v-2H3v2zm0-7v2h12V6H3zm14 9.67V7c0-.55-.45-1-1-1s-1 .45-1 1v8.67l-1.4-1.4c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l3.09 3.09c.39.39 1.02.39 1.41 0L20.4 15.07c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0l-1.6 1.6z',
    flag: 'M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z',
    calendar:
      'M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z',
    back: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
    arrow: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ flexShrink: 0 }}
    >
      <path d={icons[name] || icons.docs} />
    </svg>
  );
};

// ─── STAGE COLORS ─────────────────────────────────────────────────────────────
const stageColor = (stage) =>
  ({
    'New Inquiry': { bg: '#EFF6FF', text: '#1D4ED8', dot: '#3B82F6' },
    Counselled: { bg: '#F0FDF4', text: '#166534', dot: '#22C55E' },
    Applied: { bg: '#FFF7ED', text: '#9A3412', dot: '#F97316' },
    'Offer Received': { bg: '#FDF4FF', text: '#7E22CE', dot: '#A855F7' },
    'COE Issued': { bg: '#F0FDFA', text: '#134E4A', dot: '#14B8A6' },
    Enrolled: { bg: '#FEF9C3', text: '#713F12', dot: '#EAB308' },
  }[stage] || { bg: '#F3F4F6', text: '#374151', dot: '#9CA3AF' });

const StageBadge = ({ stage }) => {
  const c = stageColor(stage);
  return (
    <span
      style={{
        background: c.bg,
        color: c.text,
        padding: '2px 10px',
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 0.3,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: c.dot,
          display: 'inline-block',
        }}
      />
      {stage}
    </span>
  );
};

// ─── MODAL ────────────────────────────────────────────────────────────────────
const Modal = ({ title, onClose, children, width = 600 }) => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    }}
  >
    <div
      style={{
        background: '#fff',
        borderRadius: 16,
        width: '100%',
        maxWidth: width,
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}
    >
      <div
        style={{
          padding: '20px 24px',
          borderBottom: '1px solid #F3F4F6',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          background: '#fff',
          zIndex: 1,
        }}
      >
        <h3
          style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#111827' }}
        >
          {title}
        </h3>
        <button
          onClick={onClose}
          style={{
            background: '#F3F4F6',
            border: 'none',
            borderRadius: 8,
            padding: '6px 10px',
            cursor: 'pointer',
            color: '#6B7280',
          }}
        >
          <Icon name="close" />
        </button>
      </div>
      <div style={{ padding: 24 }}>{children}</div>
    </div>
  </div>
);

// ─── FORM FIELD ───────────────────────────────────────────────────────────────
const Field = ({ label, children, required }) => (
  <div style={{ marginBottom: 16 }}>
    <label
      style={{
        display: 'block',
        fontSize: 12,
        fontWeight: 600,
        color: '#374151',
        marginBottom: 6,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
      }}
    >
      {label}
      {required && <span style={{ color: '#EF4444' }}> *</span>}
    </label>
    {children}
  </div>
);
const Input = (props) => (
  <input
    {...props}
    style={{
      width: '100%',
      padding: '10px 12px',
      border: '1.5px solid #E5E7EB',
      borderRadius: 8,
      fontSize: 14,
      color: '#111827',
      outline: 'none',
      boxSizing: 'border-box',
      background: '#FAFAFA',
      ...props.style,
    }}
  />
);
const Select = ({ value, onChange, children, style }) => (
  <select
    value={value}
    onChange={onChange}
    style={{
      width: '100%',
      padding: '10px 12px',
      border: '1.5px solid #E5E7EB',
      borderRadius: 8,
      fontSize: 14,
      color: '#111827',
      outline: 'none',
      background: '#FAFAFA',
      ...style,
    }}
  >
    {children}
  </select>
);
const Textarea = (props) => (
  <textarea
    {...props}
    style={{
      width: '100%',
      padding: '10px 12px',
      border: '1.5px solid #E5E7EB',
      borderRadius: 8,
      fontSize: 14,
      color: '#111827',
      outline: 'none',
      boxSizing: 'border-box',
      background: '#FAFAFA',
      resize: 'vertical',
      minHeight: 90,
      ...props.style,
    }}
  />
);
const Btn = ({
  children,
  onClick,
  variant = 'primary',
  small,
  disabled,
  style: sx,
}) => {
  const base = {
    border: 'none',
    borderRadius: 8,
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: 600,
    fontSize: small ? 12 : 13,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    opacity: disabled ? 0.5 : 1,
    transition: 'all .15s',
    padding: small ? '6px 12px' : '10px 18px',
  };
  const variants = {
    primary: { background: '#1D4ED8', color: '#fff' },
    secondary: { background: '#F3F4F6', color: '#374151' },
    danger: { background: '#FEE2E2', color: '#DC2626' },
    success: { background: '#D1FAE5', color: '#065F46' },
    ghost: {
      background: 'transparent',
      color: '#6B7280',
      padding: small ? '4px 8px' : '8px 12px',
    },
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ ...base, ...variants[variant], ...sx }}
    >
      {children}
    </button>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MODULE 1 — DASHBOARD
// ─────────────────────────────────────────────────────────────────────────────
const Dashboard = ({ students }) => {
  const today = new Date().toISOString().slice(0, 10);
  const thisMonth = new Date().toISOString().slice(0, 7);
  const totalStudents = students.length;
  const converted = students.filter((s) => s.converted).length;
  const pendingTasks = students.flatMap((s) => s.tasks).filter((t) => !t.done);
  const overdue = pendingTasks.filter((t) => t.due < today);
  const monthConverted = students.filter(
    (s) => s.monthConverted === thisMonth
  ).length;
  const monthTarget = 15;
  const convRate =
    totalStudents > 0 ? Math.round((converted / totalStudents) * 100) : 0;

  const stageCounts = STAGES.map((st) => ({
    stage: st,
    count: students.filter((s) => s.stage === st).length,
  }));

  const recentNotes = students
    .flatMap((s) =>
      s.notes.map((n) => ({ ...n, studentName: s.name, studentId: s.id }))
    )
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  const upcomingTasks = students
    .flatMap((s) =>
      s.tasks.filter((t) => !t.done).map((t) => ({ ...t, studentName: s.name }))
    )
    .sort((a, b) => a.due.localeCompare(b.due))
    .slice(0, 6);

  const StatCard = ({ label, value, sub, color, icon }) => (
    <div
      style={{
        background: '#fff',
        borderRadius: 14,
        padding: '20px 22px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        border: '1px solid #F3F4F6',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              color: '#6B7280',
              fontWeight: 500,
              marginBottom: 4,
            }}
          >
            {label}
          </div>
          <div
            style={{ fontSize: 30, fontWeight: 800, color: color || '#111827' }}
          >
            {value}
          </div>
          {sub && (
            <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 4 }}>
              {sub}
            </div>
          )}
        </div>
        <div
          style={{
            background: color ? color + '18' : '#F3F4F6',
            borderRadius: 10,
            padding: 10,
            color: color || '#6B7280',
          }}
        >
          <Icon name={icon} size={20} />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1
          style={{ margin: 0, fontSize: 22, fontWeight: 800, color: '#111827' }}
        >
          Greetings, Tanzeel 👋
        </h1>
        <p style={{ margin: '4px 0 0', color: '#6B7280', fontSize: 14 }}>
          {new Date().toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      {/* KPI Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 16,
          marginBottom: 24,
        }}
      >
        <StatCard
          label="Total Students"
          value={totalStudents}
          sub="Active pipeline"
          icon="students"
          color="#1D4ED8"
        />
        <StatCard
          label="Converted"
          value={converted}
          sub={`${convRate}% conversion rate`}
          icon="check"
          color="#059669"
        />
        <StatCard
          label="This Month"
          value={`${monthConverted}/${monthTarget}`}
          sub="Target conversions"
          icon="target"
          color="#7C3AED"
        />
        <StatCard
          label="Overdue Tasks"
          value={overdue.length}
          sub={`${pendingTasks.length} total pending`}
          icon="alert"
          color={overdue.length > 0 ? '#DC2626' : '#059669'}
        />
      </div>

      {/* Monthly target bar */}
      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          padding: '20px 22px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
          border: '1px solid #F3F4F6',
          marginBottom: 24,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 14, color: '#111827' }}>
            Monthly Enrollment Target
          </span>
          <span style={{ fontSize: 13, color: '#6B7280' }}>
            {monthConverted} / {monthTarget} students
          </span>
        </div>
        <div
          style={{
            background: '#F3F4F6',
            borderRadius: 99,
            height: 10,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${Math.min((monthConverted / monthTarget) * 100, 100)}%`,
              height: '100%',
              background: 'linear-gradient(90deg,#1D4ED8,#7C3AED)',
              borderRadius: 99,
              transition: 'width 1s',
            }}
          />
        </div>
        <div style={{ fontSize: 12, color: '#6B7280', marginTop: 8 }}>
          {monthTarget - monthConverted} more conversions needed to hit target
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 20,
          marginBottom: 24,
        }}
      >
        {/* Pipeline snapshot */}
        <div
          style={{
            background: '#fff',
            borderRadius: 14,
            padding: '20px 22px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
            border: '1px solid #F3F4F6',
          }}
        >
          <h3
            style={{
              margin: '0 0 16px',
              fontSize: 14,
              fontWeight: 700,
              color: '#111827',
            }}
          >
            Pipeline Snapshot
          </h3>
          {stageCounts.map(({ stage, count }) => {
            const c = stageColor(stage);
            return (
              <div
                key={stage}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: c.dot,
                    flexShrink: 0,
                  }}
                />
                <span style={{ flex: 1, fontSize: 13, color: '#374151' }}>
                  {stage}
                </span>
                <div
                  style={{
                    background: '#F3F4F6',
                    borderRadius: 4,
                    height: 6,
                    width: 80,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${(count / Math.max(totalStudents, 1)) * 100}%`,
                      background: c.dot,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#111827',
                    width: 18,
                    textAlign: 'right',
                  }}
                >
                  {count}
                </span>
              </div>
            );
          })}
        </div>

        {/* Upcoming tasks */}
        <div
          style={{
            background: '#fff',
            borderRadius: 14,
            padding: '20px 22px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
            border: '1px solid #F3F4F6',
          }}
        >
          <h3
            style={{
              margin: '0 0 16px',
              fontSize: 14,
              fontWeight: 700,
              color: '#111827',
            }}
          >
            Upcoming Follow-ups
          </h3>
          {upcomingTasks.length === 0 && (
            <div style={{ color: '#9CA3AF', fontSize: 13 }}>
              No pending tasks 🎉
            </div>
          )}
          {upcomingTasks.map((t) => {
            const isOverdue = t.due < today;
            return (
              <div
                key={t.id}
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                  marginBottom: 12,
                }}
              >
                <span style={{ marginTop: 1 }}>
                  {isOverdue ? (
                    <Icon name="alert" size={14} />
                  ) : (
                    <Icon name="calendar" size={14} />
                  )}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      color: isOverdue ? '#DC2626' : '#111827',
                      fontWeight: isOverdue ? 600 : 400,
                    }}
                  >
                    {t.text}
                  </div>
                  <div style={{ fontSize: 11, color: '#9CA3AF' }}>
                    {t.studentName} · Due {t.due}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent activity */}
      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          padding: '20px 22px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
          border: '1px solid #F3F4F6',
        }}
      >
        <h3
          style={{
            margin: '0 0 16px',
            fontSize: 14,
            fontWeight: 700,
            color: '#111827',
          }}
        >
          Recent Activity Log
        </h3>
        {recentNotes.map((n) => (
          <div
            key={n.id}
            style={{
              display: 'flex',
              gap: 12,
              marginBottom: 14,
              paddingBottom: 14,
              borderBottom: '1px solid #F9FAFB',
            }}
          >
            <div
              style={{
                background: '#EFF6FF',
                borderRadius: 8,
                padding: '6px 10px',
                fontSize: 11,
                fontWeight: 700,
                color: '#1D4ED8',
                flexShrink: 0,
                height: 'fit-content',
                whiteSpace: 'nowrap',
              }}
            >
              {n.type}
            </div>
            <div>
              <div style={{ fontSize: 13, color: '#374151' }}>
                {n.text.slice(0, 120)}
                {n.text.length > 120 ? '…' : ''}
              </div>
              <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 4 }}>
                {n.studentName} · {n.date} · {n.author}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MODULE 2 — PIPELINE KANBAN
// ─────────────────────────────────────────────────────────────────────────────
const Pipeline = ({ students, onUpdate, onOpenStudent }) => {
  const [dragging, setDragging] = useState(null);

  const handleDrop = (stage) => {
    if (!dragging) return;
    onUpdate(dragging, { stage });
    setDragging(null);
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h2
          style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}
        >
          Student Pipeline
        </h2>
        <p style={{ margin: '4px 0 0', color: '#6B7280', fontSize: 13 }}>
          Drag cards between stages to update student progress
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 14,
          overflowX: 'auto',
          paddingBottom: 16,
        }}
      >
        {STAGES.map((stage) => {
          const stageStudents = students.filter((s) => s.stage === stage);
          const c = stageColor(stage);
          return (
            <div
              key={stage}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(stage)}
              style={{
                minWidth: 220,
                background: '#F9FAFB',
                borderRadius: 14,
                border: `2px dashed ${c.dot}22`,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  padding: '14px 16px 10px',
                  borderBottom: '1px solid #F3F4F6',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontWeight: 700, fontSize: 13, color: c.text }}>
                  {stage}
                </span>
                <span
                  style={{
                    background: c.bg,
                    color: c.text,
                    borderRadius: 99,
                    padding: '1px 8px',
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {stageStudents.length}
                </span>
              </div>
              <div style={{ padding: '10px 10px 14px', minHeight: 80 }}>
                {stageStudents.map((s) => {
                  const docsDone = Object.values(s.documents).filter(
                    Boolean
                  ).length;
                  const docsTotal = Object.keys(s.documents).length;
                  const pendingTasks = s.tasks.filter((t) => !t.done).length;
                  const today = new Date().toISOString().slice(0, 10);
                  const hasOverdue = s.tasks.some(
                    (t) => !t.done && t.due < today
                  );
                  return (
                    <div
                      key={s.id}
                      draggable
                      onDragStart={() => setDragging(s.id)}
                      onClick={() => onOpenStudent(s.id)}
                      style={{
                        background: '#fff',
                        borderRadius: 10,
                        padding: '12px 14px',
                        marginBottom: 8,
                        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
                        cursor: 'grab',
                        border: hasOverdue
                          ? '1.5px solid #FCA5A5'
                          : '1.5px solid #F3F4F6',
                        transition: 'transform .1s',
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 13,
                          color: '#111827',
                          marginBottom: 4,
                        }}
                      >
                        {s.name}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: '#6B7280',
                          marginBottom: 8,
                        }}
                      >
                        {s.targetUniversity}
                      </div>
                      <div style={{ fontSize: 11, color: '#6B7280' }}>
                        {s.course}
                      </div>
                      <div
                        style={{
                          marginTop: 10,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div>
                          <div
                            style={{
                              background: '#F3F4F6',
                              borderRadius: 99,
                              height: 4,
                              width: 80,
                              overflow: 'hidden',
                            }}
                          >
                            <div
                              style={{
                                height: '100%',
                                width: `${(docsDone / docsTotal) * 100}%`,
                                background: c.dot,
                              }}
                            />
                          </div>
                          <div
                            style={{
                              fontSize: 10,
                              color: '#9CA3AF',
                              marginTop: 2,
                            }}
                          >
                            {docsDone}/{docsTotal} docs
                          </div>
                        </div>
                        {pendingTasks > 0 && (
                          <span
                            style={{
                              background: hasOverdue ? '#FEE2E2' : '#F3F4F6',
                              color: hasOverdue ? '#DC2626' : '#6B7280',
                              borderRadius: 6,
                              padding: '2px 6px',
                              fontSize: 10,
                              fontWeight: 600,
                            }}
                          >
                            {hasOverdue ? '⚠ ' : ''}
                            {pendingTasks} task{pendingTasks > 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MODULE 3 — STUDENT LIST
// ─────────────────────────────────────────────────────────────────────────────
const StudentList = ({ students, onOpenStudent, onAddStudent }) => {
  const [search, setSearch] = useState('');
  const [filterStage, setFilterStage] = useState('All');

  const filtered = students.filter((s) => {
    const q = search.toLowerCase();
    const matchQ =
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) ||
      s.targetUniversity.toLowerCase().includes(q) ||
      s.course.toLowerCase().includes(q);
    const matchStage = filterStage === 'All' || s.stage === filterStage;
    return matchQ && matchStage;
  });

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 800,
              color: '#111827',
            }}
          >
            All Students
          </h2>
          <p style={{ margin: '4px 0 0', color: '#6B7280', fontSize: 13 }}>
            {filtered.length} student{filtered.length !== 1 ? 's' : ''} shown
          </p>
        </div>
        <Btn onClick={onAddStudent}>
          <Icon name="add" size={14} /> Add Student
        </Btn>
      </div>

      <div
        style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}
      >
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <span
            style={{
              position: 'absolute',
              left: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#9CA3AF',
            }}
          >
            <Icon name="search" size={16} />
          </span>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, university…"
            style={{ paddingLeft: 36 }}
          />
        </div>
        <Select
          value={filterStage}
          onChange={(e) => setFilterStage(e.target.value)}
          style={{ width: 'auto' }}
        >
          <option value="All">All Stages</option>
          {STAGES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
      </div>

      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          border: '1px solid #F3F4F6',
          overflow: 'hidden',
          boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F9FAFB' }}>
              {[
                'Student',
                'University / Course',
                'Intake',
                'Stage',
                'Docs',
                'Last Contact',
                '',
              ].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#6B7280',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    borderBottom: '1px solid #F3F4F6',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, i) => {
              const docsDone = Object.values(s.documents).filter(
                Boolean
              ).length;
              const docsTotal = Object.keys(s.documents).length;
              return (
                <tr
                  key={s.id}
                  onClick={() => onOpenStudent(s.id)}
                  style={{
                    cursor: 'pointer',
                    background: i % 2 === 0 ? '#fff' : '#FAFAFA',
                    transition: 'background .1s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = '#EFF6FF')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      i % 2 === 0 ? '#fff' : '#FAFAFA')
                  }
                >
                  <td
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid #F9FAFB',
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 13,
                        color: '#111827',
                      }}
                    >
                      {s.name}
                    </div>
                    <div style={{ fontSize: 11, color: '#9CA3AF' }}>
                      {s.email}
                    </div>
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid #F9FAFB',
                    }}
                  >
                    <div style={{ fontSize: 13, color: '#374151' }}>
                      {s.targetUniversity}
                    </div>
                    <div style={{ fontSize: 11, color: '#9CA3AF' }}>
                      {s.course}
                    </div>
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid #F9FAFB',
                      fontSize: 13,
                      color: '#374151',
                    }}
                  >
                    {s.intakeTerm}
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid #F9FAFB',
                    }}
                  >
                    <StageBadge stage={s.stage} />
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid #F9FAFB',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 12,
                        color: docsDone === docsTotal ? '#059669' : '#374151',
                        fontWeight: 600,
                      }}
                    >
                      {docsDone}/{docsTotal}
                    </div>
                    <div
                      style={{
                        background: '#F3F4F6',
                        borderRadius: 99,
                        height: 4,
                        width: 60,
                        marginTop: 3,
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${(docsDone / docsTotal) * 100}%`,
                          background:
                            docsDone === docsTotal ? '#059669' : '#3B82F6',
                        }}
                      />
                    </div>
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid #F9FAFB',
                      fontSize: 12,
                      color: '#6B7280',
                    }}
                  >
                    {s.lastContact}
                  </td>
                  <td
                    style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid #F9FAFB',
                    }}
                  >
                    <Btn
                      variant="ghost"
                      small
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenStudent(s.id);
                      }}
                    >
                      <Icon name="arrow" />
                    </Btn>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: 40,
              color: '#9CA3AF',
              fontSize: 14,
            }}
          >
            No students match your search.
          </div>
        )}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MODULE 4 — STUDENT PROFILE (Full Detail Page)
// ─────────────────────────────────────────────────────────────────────────────
const StudentProfile = ({ student, onBack, onUpdate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [newNote, setNewNote] = useState({ type: 'Call', text: '' });
  const [newTask, setNewTask] = useState({ text: '', due: '' });
  const [editStage, setEditStage] = useState(false);
  const today = new Date().toISOString().slice(0, 10);

  const addNote = () => {
    if (!newNote.text.trim()) return;
    const note = {
      id: 'n' + Date.now(),
      date: today,
      author: 'Tanzeel Ahmed',
      type: newNote.type,
      text: newNote.text,
    };
    onUpdate(student.id, {
      notes: [...student.notes, note],
      lastContact: today,
    });
    setNewNote({ type: 'Call', text: '' });
  };

  const addTask = () => {
    if (!newTask.text.trim() || !newTask.due) return;
    const task = {
      id: 't' + Date.now(),
      text: newTask.text,
      due: newTask.due,
      done: false,
    };
    onUpdate(student.id, { tasks: [...student.tasks, task] });
    setNewTask({ text: '', due: '' });
  };

  const toggleTask = (taskId) => {
    onUpdate(student.id, {
      tasks: student.tasks.map((t) =>
        t.id === taskId ? { ...t, done: !t.done } : t
      ),
    });
  };

  const toggleDoc = (docKey) => {
    onUpdate(student.id, {
      documents: { ...student.documents, [docKey]: !student.documents[docKey] },
    });
  };

  const docsDone = Object.values(student.documents).filter(Boolean).length;
  const docsTotal = Object.keys(student.documents).length;

  const tabs = ['overview', 'documents', 'notes', 'tasks'];

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 20,
        }}
      >
        <Btn variant="secondary" small onClick={onBack}>
          <Icon name="back" size={14} /> Back
        </Btn>
        <div style={{ flex: 1 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 20,
              fontWeight: 800,
              color: '#111827',
            }}
          >
            {student.name}
          </h2>
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              marginTop: 4,
            }}
          >
            <StageBadge stage={student.stage} />
            <span style={{ fontSize: 12, color: '#9CA3AF' }}>
              Last contact: {student.lastContact}
            </span>
          </div>
        </div>
        {editStage ? (
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Select
              value={student.stage}
              onChange={(e) => {
                onUpdate(student.id, { stage: e.target.value });
                setEditStage(false);
              }}
              style={{ width: 'auto' }}
            >
              {STAGES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </Select>
            <Btn variant="secondary" small onClick={() => setEditStage(false)}>
              Cancel
            </Btn>
          </div>
        ) : (
          <Btn variant="secondary" small onClick={() => setEditStage(true)}>
            <Icon name="edit" size={12} /> Change Stage
          </Btn>
        )}
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          gap: 4,
          marginBottom: 20,
          borderBottom: '2px solid #F3F4F6',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: 'none',
              border: 'none',
              padding: '10px 16px',
              cursor: 'pointer',
              fontWeight: activeTab === tab ? 700 : 500,
              fontSize: 13,
              color: activeTab === tab ? '#1D4ED8' : '#6B7280',
              borderBottom:
                activeTab === tab
                  ? '2px solid #1D4ED8'
                  : '2px solid transparent',
              marginBottom: -2,
              textTransform: 'capitalize',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: 20,
              border: '1px solid #F3F4F6',
            }}
          >
            <h4
              style={{
                margin: '0 0 16px',
                fontSize: 13,
                fontWeight: 700,
                color: '#374151',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}
            >
              Personal Information
            </h4>
            {[
              ['Full Name', student.name],
              ['Email', student.email],
              ['Phone', student.phone],
              ['Date of Birth', student.dob],
              ['Nationality', student.nationality],
              ['Passport No.', student.passport || 'Not provided'],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom: '1px solid #F9FAFB',
                  fontSize: 13,
                }}
              >
                <span style={{ color: '#6B7280' }}>{k}</span>
                <span style={{ color: '#111827', fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: 20,
              border: '1px solid #F3F4F6',
            }}
          >
            <h4
              style={{
                margin: '0 0 16px',
                fontSize: 13,
                fontWeight: 700,
                color: '#374151',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}
            >
              Application Details
            </h4>
            {[
              ['Target Country', student.targetCountry],
              ['University', student.targetUniversity],
              ['Course', student.course],
              ['Intake Term', student.intakeTerm],
              ['Visa Status', student.visaStatus],
              ['Consultant', student.assignedConsultant],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom: '1px solid #F9FAFB',
                  fontSize: 13,
                }}
              >
                <span style={{ color: '#6B7280' }}>{k}</span>
                <span style={{ color: '#111827', fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: 20,
              border: '1px solid #F3F4F6',
              gridColumn: '1 / -1',
            }}
          >
            <h4
              style={{
                margin: '0 0 12px',
                fontSize: 13,
                fontWeight: 700,
                color: '#374151',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}
            >
              Document Progress — {docsDone}/{docsTotal} complete
            </h4>
            <div
              style={{
                background: '#F3F4F6',
                borderRadius: 99,
                height: 8,
                marginBottom: 16,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${(docsDone / docsTotal) * 100}%`,
                  background: 'linear-gradient(90deg,#1D4ED8,#059669)',
                  transition: 'width .5s',
                }}
              />
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 8,
              }}
            >
              {Object.entries(student.documents).map(([key, done]) => (
                <div
                  key={key}
                  onClick={() => toggleDoc(key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 12px',
                    borderRadius: 8,
                    background: done ? '#D1FAE5' : '#F9FAFB',
                    border: `1px solid ${done ? '#6EE7B7' : '#E5E7EB'}`,
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 4,
                      background: done ? '#059669' : '#E5E7EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {done && <Icon name="check" size={12} />}
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      color: done ? '#065F46' : '#6B7280',
                      fontWeight: done ? 600 : 400,
                    }}
                  >
                    {DOC_LABELS[key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Documents Tab */}
      {activeTab === 'documents' && (
        <div
          style={{
            background: '#fff',
            borderRadius: 14,
            padding: 24,
            border: '1px solid #F3F4F6',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <h4
              style={{
                margin: 0,
                fontSize: 14,
                fontWeight: 700,
                color: '#111827',
              }}
            >
              Document Checklist
            </h4>
            <span style={{ fontSize: 13, color: '#6B7280' }}>
              {docsDone} of {docsTotal} received
            </span>
          </div>
          {Object.entries(DOC_LABELS).map(([key, label]) => {
            const done = student.documents[key];
            return (
              <div
                key={key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  borderRadius: 10,
                  background: done ? '#F0FDF4' : '#FAFAFA',
                  border: `1.5px solid ${done ? '#BBF7D0' : '#E5E7EB'}`,
                  marginBottom: 8,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: done ? '#059669' : '#E5E7EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                    }}
                  >
                    {done ? (
                      <Icon name="check" size={14} />
                    ) : (
                      <Icon name="docs" size={12} />
                    )}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 13,
                        color: done ? '#065F46' : '#374151',
                      }}
                    >
                      {label}
                    </div>
                    <div style={{ fontSize: 11, color: '#9CA3AF' }}>
                      {done ? 'Received & verified' : 'Pending'}
                    </div>
                  </div>
                </div>
                <Btn
                  variant={done ? 'success' : 'secondary'}
                  small
                  onClick={() => toggleDoc(key)}
                >
                  {done ? '✓ Received' : 'Mark Received'}
                </Btn>
              </div>
            );
          })}
        </div>
      )}

      {/* Notes Tab */}
      {activeTab === 'notes' && (
        <div>
          {/* Add note */}
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: 20,
              border: '1px solid #F3F4F6',
              marginBottom: 16,
            }}
          >
            <h4
              style={{
                margin: '0 0 16px',
                fontSize: 13,
                fontWeight: 700,
                color: '#374151',
              }}
            >
              Add File Note
            </h4>
            <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
              <Select
                value={newNote.type}
                onChange={(e) =>
                  setNewNote({ ...newNote, type: e.target.value })
                }
                style={{ width: 'auto' }}
              >
                {NOTE_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </Select>
              <span
                style={{ color: '#9CA3AF', fontSize: 13, alignSelf: 'center' }}
              >
                Today: {today} · Consultant: Tanzeel Ahmed
              </span>
            </div>
            <Textarea
              value={newNote.text}
              onChange={(e) => setNewNote({ ...newNote, text: e.target.value })}
              placeholder="Enter detailed file note — what was discussed, decisions made, next steps…"
            />
            <div style={{ marginTop: 10, textAlign: 'right' }}>
              <Btn onClick={addNote} disabled={!newNote.text.trim()}>
                <Icon name="note" size={14} /> Save Note
              </Btn>
            </div>
          </div>

          {/* Notes list */}
          {[...student.notes].reverse().map((n) => (
            <div
              key={n.id}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: 18,
                border: '1px solid #F3F4F6',
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}
              >
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span
                    style={{
                      background: '#EFF6FF',
                      color: '#1D4ED8',
                      borderRadius: 6,
                      padding: '3px 10px',
                      fontSize: 11,
                      fontWeight: 700,
                    }}
                  >
                    {n.type}
                  </span>
                  <span style={{ fontSize: 12, color: '#6B7280' }}>
                    {n.author}
                  </span>
                </div>
                <span style={{ fontSize: 12, color: '#9CA3AF' }}>{n.date}</span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: '#374151',
                  lineHeight: 1.6,
                }}
              >
                {n.text}
              </p>
            </div>
          ))}
          {student.notes.length === 0 && (
            <div style={{ textAlign: 'center', color: '#9CA3AF', padding: 40 }}>
              No notes yet. Add the first note above.
            </div>
          )}
        </div>
      )}

      {/* Tasks Tab */}
      {activeTab === 'tasks' && (
        <div>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: 20,
              border: '1px solid #F3F4F6',
              marginBottom: 16,
            }}
          >
            <h4
              style={{
                margin: '0 0 16px',
                fontSize: 13,
                fontWeight: 700,
                color: '#374151',
              }}
            >
              Add Follow-up Task
            </h4>
            <div style={{ display: 'flex', gap: 10 }}>
              <Input
                value={newTask.text}
                onChange={(e) =>
                  setNewTask({ ...newTask, text: e.target.value })
                }
                placeholder="Task description…"
                style={{ flex: 1 }}
              />
              <Input
                type="date"
                value={newTask.due}
                onChange={(e) =>
                  setNewTask({ ...newTask, due: e.target.value })
                }
                style={{ width: 160 }}
              />
              <Btn
                onClick={addTask}
                disabled={!newTask.text.trim() || !newTask.due}
              >
                <Icon name="add" size={14} /> Add
              </Btn>
            </div>
          </div>

          {student.tasks.map((task) => {
            const isOverdue = !task.done && task.due < today;
            return (
              <div
                key={task.id}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: '14px 18px',
                  border: `1.5px solid ${
                    isOverdue ? '#FCA5A5' : task.done ? '#BBF7D0' : '#F3F4F6'
                  }`,
                  marginBottom: 8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <div
                  onClick={() => toggleTask(task.id)}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    border: `2px solid ${task.done ? '#059669' : '#D1D5DB'}`,
                    background: task.done ? '#059669' : '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                    color: '#fff',
                  }}
                >
                  {task.done && <Icon name="check" size={12} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 13,
                      color: task.done ? '#9CA3AF' : '#111827',
                      textDecoration: task.done ? 'line-through' : 'none',
                      fontWeight: task.done ? 400 : 500,
                    }}
                  >
                    {task.text}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: isOverdue ? '#DC2626' : '#9CA3AF',
                      fontWeight: isOverdue ? 600 : 400,
                    }}
                  >
                    {isOverdue ? '⚠ Overdue · ' : ''} Due: {task.due}
                  </div>
                </div>
                <Btn
                  variant="ghost"
                  small
                  onClick={() =>
                    onUpdate(student.id, {
                      tasks: student.tasks.filter((t) => t.id !== task.id),
                    })
                  }
                >
                  <Icon name="trash" size={13} />
                </Btn>
              </div>
            );
          })}
          {student.tasks.length === 0 && (
            <div style={{ textAlign: 'center', color: '#9CA3AF', padding: 40 }}>
              No tasks. All caught up!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MODULE 5 — TASKS VIEW (Global)
// ─────────────────────────────────────────────────────────────────────────────
const TasksView = ({ students, onUpdate }) => {
  const today = new Date().toISOString().slice(0, 10);
  const allTasks = students
    .flatMap((s) =>
      s.tasks.map((t) => ({ ...t, studentId: s.id, studentName: s.name }))
    )
    .sort((a, b) => a.due.localeCompare(b.due));
  const pending = allTasks.filter((t) => !t.done);
  const overdue = pending.filter((t) => t.due < today);
  const dueToday = pending.filter((t) => t.due === today);
  const upcoming = pending.filter((t) => t.due > today);
  const done = allTasks.filter((t) => t.done);

  const toggleTask = (studentId, taskId) => {
    const s = students.find((s) => s.id === studentId);
    onUpdate(studentId, {
      tasks: s.tasks.map((t) =>
        t.id === taskId ? { ...t, done: !t.done } : t
      ),
    });
  };

  const TaskRow = ({ t }) => {
    const isOverdue = !t.done && t.due < today;
    return (
      <div
        style={{
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          padding: '12px 16px',
          background: '#fff',
          borderRadius: 10,
          border: `1.5px solid ${
            isOverdue ? '#FCA5A5' : t.done ? '#BBF7D0' : '#F3F4F6'
          }`,
          marginBottom: 6,
        }}
      >
        <div
          onClick={() => toggleTask(t.studentId, t.id)}
          style={{
            width: 20,
            height: 20,
            borderRadius: 5,
            border: `2px solid ${
              t.done ? '#059669' : isOverdue ? '#EF4444' : '#D1D5DB'
            }`,
            background: t.done ? '#059669' : '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
            color: '#fff',
          }}
        >
          {t.done && <Icon name="check" size={12} />}
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 13,
              color: t.done ? '#9CA3AF' : '#111827',
              textDecoration: t.done ? 'line-through' : 'none',
            }}
          >
            {t.text}
          </div>
          <div style={{ fontSize: 11, color: '#9CA3AF' }}>{t.studentName}</div>
        </div>
        <div
          style={{
            fontSize: 12,
            color: isOverdue ? '#DC2626' : '#6B7280',
            fontWeight: isOverdue ? 700 : 400,
          }}
        >
          {isOverdue ? '⚠ ' : ''}
          {t.due}
        </div>
      </div>
    );
  };

  const Section = ({ title, tasks, color }) =>
    tasks.length === 0 ? null : (
      <div style={{ marginBottom: 24 }}>
        <h4
          style={{
            margin: '0 0 10px',
            fontSize: 12,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            color: color || '#6B7280',
          }}
        >
          {title} ({tasks.length})
        </h4>
        {tasks.map((t) => (
          <TaskRow key={t.id + t.studentId} t={t} />
        ))}
      </div>
    );

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2
          style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}
        >
          All Tasks & Follow-ups
        </h2>
        <p style={{ margin: '4px 0 0', color: '#6B7280', fontSize: 13 }}>
          {pending.length} pending · {overdue.length} overdue · {done.length}{' '}
          completed
        </p>
      </div>
      <Section title="⚠ Overdue" tasks={overdue} color="#DC2626" />
      <Section title="📅 Due Today" tasks={dueToday} color="#D97706" />
      <Section title="🔜 Upcoming" tasks={upcoming} color="#1D4ED8" />
      <Section title="✓ Completed" tasks={done} color="#059669" />
      {allTasks.length === 0 && (
        <div style={{ textAlign: 'center', padding: 60, color: '#9CA3AF' }}>
          No tasks across any student.
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MODULE 6 — LETTER GENERATOR
// ─────────────────────────────────────────────────────────────────────────────
const LetterGenerator = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [template, setTemplate] = useState('offer');
  const [generated, setGenerated] = useState('');
  const [copied, setCopied] = useState(false);
  const textRef = useRef(null);

  const s = students.find((s) => s.id === selectedStudent);

  const templates = {
    offer: (s) => `OFFER LETTER ACKNOWLEDGMENT
Date: ${new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })}

Dear ${s.name},

We are pleased to confirm that ${
      s.targetUniversity
    } has issued a formal Offer Letter for your enrolment in the ${
      s.course
    } program commencing ${s.intakeTerm}.

Please review the attached offer letter carefully and confirm your acceptance by signing and returning it to our office within 7 business days.

Upon acceptance, the next steps will be:
1. Payment of initial tuition deposit as specified in the offer letter
2. Submission of remaining required documents
3. Application for your Confirmation of Enrolment (COE)
4. Australian student visa application (Subclass 500)

If you have any questions regarding the offer conditions, please do not hesitate to contact our office.

Warm regards,

${s.assignedConsultant}
Education Consultant
Aussie Immi & Education Consultancy
Uttara Sector 9, Dhaka, Bangladesh`,

    coe: (s) => `CONFIRMATION OF ENROLMENT (COE) — ADVISORY LETTER
Date: ${new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })}

Dear ${s.name},

We are pleased to inform you that your Confirmation of Enrolment (COE) has been successfully issued by ${
      s.targetUniversity
    } for the following program:

Student Name:   ${s.name}
Passport No.:   ${s.passport || 'To be confirmed'}
Course:         ${s.course}
Institution:    ${s.targetUniversity}
Commencement:   ${s.intakeTerm}

Your COE is an essential document required for your Australian Student Visa (Subclass 500) application. Please retain this document carefully.

Important Next Steps:
1. Proceed with your visa application through ImmiAccount on the Australian Home Affairs website
2. Prepare your Genuine Temporary Entrant (GTE) statement
3. Complete your health examination with a DIBP-approved panel physician
4. Obtain an Overseas Student Health Cover (OSHC) policy

Our office will guide you through each of these steps. Please schedule a meeting with your consultant at your earliest convenience.

Regards,

${s.assignedConsultant}
Education Consultant
Aussie Immi & Education Consultancy`,

    visa: (s) => `STUDENT VISA APPLICATION SUPPORT LETTER
Date: ${new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })}

To Whom It May Concern,
Australian Department of Home Affairs

RE: Student Visa (Subclass 500) Application — ${s.name}

This letter is to confirm that ${s.name} (Passport: ${
      s.passport || 'refer to application'
    }) is a registered student with Aussie Immi & Education Consultancy and has been accepted into the ${
      s.course
    } program at ${s.targetUniversity}, commencing ${s.intakeTerm}.

We have been engaged as the student's authorised education consultant and have reviewed all documents submitted as part of this visa application. We confirm that, to the best of our knowledge, all documentation is genuine and accurate.

The applicant meets all academic and English language requirements set by the institution and the Australian Government for the Subclass 500 visa category.

Please do not hesitate to contact our office if further information is required.

Yours faithfully,

${s.assignedConsultant}
Education Consultant
Aussie Immi & Education Consultancy
Uttara Sector 9, Dhaka, Bangladesh
Phone: +880-XXXX-XXXXXX`,

    followup: (s) => `STUDENT FOLLOW-UP — RETENTION COMMUNICATION
Date: ${new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })}

Dear ${s.name},

I hope this message finds you well. I am writing on behalf of Aussie Immi & Education Consultancy as part of our ongoing student support and after-enrolment engagement program.

As your designated education consultant, I wanted to check in regarding your academic journey at ${
      s.targetUniversity
    }. Our commitment to you does not end at enrolment — we are here to support you throughout your studies in Australia.

Please feel free to reach out if you need assistance with any of the following:
• Course transfers or changes (onshore)
• Change of institution procedures
• Visa renewal or extension guidance
• Academic support referrals
• Accommodation or welfare concerns

Your current enrolment status with us: ${s.stage}
Visa Status: ${s.visaStatus}

We look forward to hearing about your progress. Please do not hesitate to get in touch.

Warm regards,

${s.assignedConsultant}
Education Consultant
Aussie Immi & Education Consultancy`,
  };

  const generate = () => {
    if (!s) return;
    setGenerated(templates[template](s));
    setCopied(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(generated).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h2
          style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}
        >
          Letter & Document Generator
        </h2>
        <p style={{ margin: '4px 0 0', color: '#6B7280', fontSize: 13 }}>
          Generate professional letters for any student in seconds
        </p>
      </div>

      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          padding: 20,
          border: '1px solid #F3F4F6',
          marginBottom: 16,
        }}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <Field label="Select Student">
              <Select
                value={selectedStudent}
                onChange={(e) => {
                  setSelectedStudent(e.target.value);
                  setGenerated('');
                }}
              >
                <option value="">— Choose a student —</option>
                {students.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — {s.targetUniversity}
                  </option>
                ))}
              </Select>
            </Field>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <Field label="Letter Type">
              <Select
                value={template}
                onChange={(e) => {
                  setTemplate(e.target.value);
                  setGenerated('');
                }}
              >
                <option value="offer">Offer Letter Acknowledgment</option>
                <option value="coe">COE Advisory Letter</option>
                <option value="visa">Visa Application Support Letter</option>
                <option value="followup">Student Retention Follow-up</option>
              </Select>
            </Field>
          </div>
          <div style={{ alignSelf: 'flex-end', paddingBottom: 16 }}>
            <Btn onClick={generate} disabled={!selectedStudent}>
              <Icon name="docs" size={14} /> Generate Letter
            </Btn>
          </div>
        </div>
      </div>

      {generated && (
        <div
          style={{
            background: '#fff',
            borderRadius: 14,
            border: '1px solid #F3F4F6',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '14px 20px',
              background: '#F9FAFB',
              borderBottom: '1px solid #F3F4F6',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 13, color: '#374151' }}>
              Generated Letter — {s?.name}
            </span>
            <div style={{ display: 'flex', gap: 8 }}>
              <Btn
                variant={copied ? 'success' : 'secondary'}
                small
                onClick={copy}
              >
                <Icon name="copy" size={12} /> {copied ? 'Copied!' : 'Copy'}
              </Btn>
              <Btn
                variant="secondary"
                small
                onClick={() => {
                  const blob = new Blob([generated], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `${s.name.replace(/ /g, '_')}_letter.txt`;
                  a.click();
                }}
              >
                <Icon name="download" size={12} /> Download
              </Btn>
            </div>
          </div>
          <pre
            ref={textRef}
            style={{
              margin: 0,
              padding: 24,
              fontSize: 13,
              lineHeight: 1.8,
              color: '#374151',
              fontFamily: 'Georgia, serif',
              whiteSpace: 'pre-wrap',
              background: '#FFFBF0',
              borderLeft: '4px solid #EAB308',
            }}
          >
            {generated}
          </pre>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MODULE 7 — ADD STUDENT MODAL
// ─────────────────────────────────────────────────────────────────────────────
const AddStudentModal = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    passport: '',
    dob: '',
    nationality: 'Bangladeshi',
    targetCountry: 'Australia',
    targetUniversity: '',
    intakeTerm: '',
    course: '',
    visaStatus: 'Not Started',
    assignedConsultant: 'Tanzeel Ahmed',
    stage: 'New Inquiry',
  });

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = () => {
    if (!form.name || !form.email || !form.targetUniversity || !form.course)
      return alert('Please fill required fields.');
    const newStudent = {
      ...form,
      id: 's' + Date.now(),
      createdAt: new Date().toISOString().slice(0, 10),
      lastContact: new Date().toISOString().slice(0, 10),
      documents: {
        passport: false,
        ssc: false,
        hsc: false,
        bachelors: false,
        ielts: false,
        offerLetter: false,
        coe: false,
        visaGrant: false,
        medicals: false,
        policeClearance: false,
      },
      notes: [
        {
          id: 'n' + Date.now(),
          date: new Date().toISOString().slice(0, 10),
          author: form.assignedConsultant,
          type: 'System',
          text: `Student profile created. Assigned to ${form.assignedConsultant}.`,
        },
      ],
      tasks: [],
      converted: false,
      monthConverted: null,
    };
    onAdd(newStudent);
  };

  return (
    <Modal title="Add New Student" onClose={onClose} width={660}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0 16px',
        }}
      >
        <Field label="Full Name" required>
          <Input
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="Student full name"
          />
        </Field>
        <Field label="Email" required>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="email@example.com"
          />
        </Field>
        <Field label="Phone">
          <Input
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            placeholder="01X-XXXXXXXX"
          />
        </Field>
        <Field label="Passport No.">
          <Input
            value={form.passport}
            onChange={(e) => set('passport', e.target.value)}
          />
        </Field>
        <Field label="Date of Birth">
          <Input
            type="date"
            value={form.dob}
            onChange={(e) => set('dob', e.target.value)}
          />
        </Field>
        <Field label="Nationality">
          <Input
            value={form.nationality}
            onChange={(e) => set('nationality', e.target.value)}
          />
        </Field>
        <Field label="University" required>
          <Input
            value={form.targetUniversity}
            onChange={(e) => set('targetUniversity', e.target.value)}
            placeholder="Target institution"
          />
        </Field>
        <Field label="Course" required>
          <Input
            value={form.course}
            onChange={(e) => set('course', e.target.value)}
            placeholder="e.g. Master of IT"
          />
        </Field>
        <Field label="Intake Term">
          <Input
            value={form.intakeTerm}
            onChange={(e) => set('intakeTerm', e.target.value)}
            placeholder="e.g. Feb 2026"
          />
        </Field>
        <Field label="Initial Stage">
          <Select
            value={form.stage}
            onChange={(e) => set('stage', e.target.value)}
          >
            {STAGES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </Select>
        </Field>
      </div>
      <div
        style={{
          marginTop: 8,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 10,
        }}
      >
        <Btn variant="secondary" onClick={onClose}>
          Cancel
        </Btn>
        <Btn onClick={submit}>
          <Icon name="add" size={14} /> Create Student Profile
        </Btn>
      </div>
    </Modal>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────────────────────────────────────
export default function EduCRM() {
  const [students, setStudents] = useState(loadStudents);
  const [view, setView] = useState('dashboard');
  const [openStudentId, setOpenStudentId] = useState(null);
  const [showAddStudent, setShowAddStudent] = useState(false);

  useEffect(() => {
    saveStudents(students);
  }, [students]);

  const updateStudent = (id, updates) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updates } : s))
    );
  };

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
    setShowAddStudent(false);
    setOpenStudentId(student.id);
    setView('students');
  };

  const openStudent = (id) => {
    setOpenStudentId(id);
    setView('students');
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'pipeline', label: 'Pipeline', icon: 'pipeline' },
    { id: 'students', label: 'Students', icon: 'students' },
    { id: 'tasks', label: 'Tasks', icon: 'tasks' },
    { id: 'letters', label: 'Letters', icon: 'letter' },
  ];

  const openedStudent = students.find((s) => s.id === openStudentId);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        background: '#F0F4F8',
        overflow: 'hidden',
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 220,
          background: '#0F172A',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
        }}
      >
        <div style={{ padding: '20px 20px 14px' }}>
          <div
            style={{
              fontWeight: 800,
              fontSize: 16,
              color: '#fff',
              letterSpacing: -0.5,
            }}
          >
            EduCRM
          </div>
          <div style={{ fontSize: 11, color: '#64748B', marginTop: 2 }}>
            Aussie Immi & Education
          </div>
        </div>
        <div style={{ flex: 1, padding: '6px 12px' }}>
          {navItems.map((item) => {
            const active = view === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id);
                  if (item.id !== 'students') setOpenStudentId(null);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 12px',
                  borderRadius: 10,
                  border: 'none',
                  background: active ? '#1D4ED8' : 'transparent',
                  color: active ? '#fff' : '#94A3B8',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: active ? 700 : 500,
                  marginBottom: 2,
                  transition: 'all .15s',
                  textAlign: 'left',
                }}
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </button>
            );
          })}
        </div>
        <div style={{ padding: '14px 20px', borderTop: '1px solid #1E293B' }}>
          <div style={{ fontSize: 12, color: '#64748B' }}>Signed in as</div>
          <div
            style={{
              fontSize: 13,
              color: '#E2E8F0',
              fontWeight: 600,
              marginTop: 2,
            }}
          >
            Tanzeel Ahmed
          </div>
          <div style={{ fontSize: 11, color: '#475569' }}>
            Education Consultant
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, overflow: 'auto', padding: 28 }}>
        {view === 'dashboard' && <Dashboard students={students} />}

        {view === 'pipeline' && (
          <Pipeline
            students={students}
            onUpdate={updateStudent}
            onOpenStudent={openStudent}
          />
        )}

        {view === 'students' && !openedStudent && (
          <StudentList
            students={students}
            onOpenStudent={openStudent}
            onAddStudent={() => setShowAddStudent(true)}
          />
        )}

        {view === 'students' && openedStudent && (
          <StudentProfile
            student={openedStudent}
            onBack={() => setOpenStudentId(null)}
            onUpdate={updateStudent}
          />
        )}

        {view === 'tasks' && (
          <TasksView students={students} onUpdate={updateStudent} />
        )}

        {view === 'letters' && <LetterGenerator students={students} />}
      </div>

      {showAddStudent && (
        <AddStudentModal
          onClose={() => setShowAddStudent(false)}
          onAdd={addStudent}
        />
      )}
    </div>
  );
}
