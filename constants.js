// settings used all over the app
// change these to see the app react (e.g. lower HEAVY_WEEK_HOURS to 8)

export const CURRENT_WEEK = 7;
export const TOTAL_WEEKS = 16;

// a week with more pending hours than this is a "crunch week"
export const HEAVY_WEEK_HOURS = 12;

// how many weeks ahead the dashboard bar chart shows
export const WEEKS_TO_SHOW = 6;

// planner only looks at tasks due within this many weeks
export const PLAN_RANGE = 2;

export const TASK_TYPES = ['Quiz', 'Assignment', 'Project', 'Exam'];

export const COLORS = {
  primary: '#3b5bdb',
  bg: '#f4f5fb',
  card: '#ffffff',
  text: '#1c1e2b',
  muted: '#6b6f80',
  danger: '#e03131',
  warning: '#f08c00',
  success: '#2f9e44',
  border: '#e3e5ee',
};
