const SIDE_NAV_ITEMS = [
  {
    label: 'List',
    route: '',
    defaultPage: 'list-details',
    hasChildren: true,
    expanded: true,
    active: true,
    rawIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    children: [
      { label: 'List Details', key: 'list-details', section: 'list', route: '' },
      { label: 'List ONT SN', key: 'list-ont-sn', section: 'list', route: '' },
    ]
  },
  {
    label: 'Operations',
    route: '',
    hasChildren: true,
    expanded: false,
    active: false,
    children: [],
    rawIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
  },
  {
    label: 'Suspend/Resume',
    route: '',
    defaultPage: 'suspend-resume',
    hasChildren: false,
    expanded: false,
    active: false,
    children: [],
    rawIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
  },
  {
    label: 'Admin',
    route: '',
    defaultPage: 'create-user-task',
    hasChildren: true,
    expanded: false,
    active: false,
    rawIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
    children: [
      { label: 'Create User With Task', key: 'create-user-task', section: 'admin', route: '' },
      { label: 'Create User', key: 'create-user', section: 'admin', route: '' },
      { label: 'Delete User', key: 'delete-user', section: 'admin', route: '' },
      { label: 'Admin Delete User', key: 'admin-delete-user', section: 'admin', route: '' },
      { label: 'Delete User With MSAN', key: 'delete-user-MSAN', section: 'admin', route: '' },
      { label: 'Admin Delete User With MSAN', key: 'admin-delete-user-MSAN', section: 'admin', route: '' },
      { label: 'Delete Voice', key: 'delete-voice', section: 'admin', route: '' },
      { label: 'Add Feature', key: 'add-feature', section: 'admin', route: '' },
    ]
  },
  {
    label: 'Change',
    route: '',
    defaultPage: 'change-voice-port',
    hasChildren: true,
    expanded: false,
    active: false,
    rawIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    children: [
      { label: 'Change Voice Port', key: 'change-voice-port', section: 'change', route: '' },
      { label: 'Change OLT Clarity', key: 'change-olt-clarity', section: 'change', route: '' },
      { label: 'Change ONT SN in Clarity', key: 'change-ont-sn', section: 'change', route: '' },
    ]
  },
];

const DEFAULT_ACTIVE_PAGE = SIDE_NAV_ITEMS.find(i => i.defaultPage)?.defaultPage ?? '';
export { SIDE_NAV_ITEMS, DEFAULT_ACTIVE_PAGE };