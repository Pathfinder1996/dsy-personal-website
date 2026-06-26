const icons = {
  github: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      <title>GitHub</title>
      <path
        d="M9 19c-5 1.5-5-2.5-7-3
        m14 6v-3.87
        a3.37 3.37 0 0 0-.94-2.61
        c3.14-.35 6.44-1.54 6.44-7
        A5.44 5.44 0 0 0 20 4.77
        5.07 5.07 0 0 0 19.91 1
        S18.73.65 16 2.48
        a13.38 13.38 0 0 0-7 0
        C6.27.65 5.09 1 5.09 1
        A5.07 5.07 0 0 0 5 4.77
        a5.44 5.44 0 0 0-1.5 3.78
        c0 5.42 3.3 6.61 6.44 7
        A3.37 3.37 0 0 0 9 18.13
        V22"
      ></path>
    </svg>
  `,
  linkedin: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      <title>LinkedIn</title>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  `,
  leetcode: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      <title>LeetCode</title>
      <path d="M16 18l4-4-4-4"></path>
      <path d="M8 6l-6 6 6 6"></path>
      <path d="M14 4l-4 16"></path>
    </svg>
  `,
  email: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      <title>Email</title>
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <path d="M3 7l9 6 9-6"></path>
    </svg>
  `,
  linux: `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <title>Linux</title>
    <path d="M12 3c-2 0-3.5 1.7-3.5 4.2 0 1.2.3 2.2.8 3.1L7 16.5 5.5 21h13L17 16.5l-2.3-6.2c.5-.9.8-1.9.8-3.1C15.5 4.7 14 3 12 3z"></path>
    <path d="M10 8h.01"></path>
    <path d="M14 8h.01"></path>
    <path d="M10.5 12h3"></path>
  </svg>
`,

networking: `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <title>Networking</title>
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M3 12h18"></path>
    <path d="M12 3c3 3.5 3 14 0 18"></path>
    <path d="M12 3c-3 3.5-3 14 0 18"></path>
  </svg>
`,

git: `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <title>Git</title>
    <path d="M15 6l3 3-3 3"></path>
    <path d="M6 18V8a2 2 0 0 1 2-2h10"></path>
    <circle cx="6" cy="18" r="2"></circle>
    <circle cx="18" cy="6" r="2"></circle>
  </svg>
`,

docker: `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <title>Docker</title>
    <path d="M4 13h16c-.5 4-3.5 7-8 7-4 0-7-2.5-8-7z"></path>
    <path d="M6 10h3v3H6z"></path>
    <path d="M9 10h3v3H9z"></path>
    <path d="M12 10h3v3h-3z"></path>
    <path d="M9 7h3v3H9z"></path>
    <path d="M12 7h3v3h-3z"></path>
    <path d="M15 7h3v3h-3z"></path>
  </svg>
`,

aws: `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <title>AWS</title>
    <path d="M4 16c4 3 12 3 16 0"></path>
    <path d="M6 11l2-5 2 5"></path>
    <path d="M6.7 9h2.6"></path>
    <path d="M12 6v5"></path>
    <path d="M12 11h3"></path>
    <path d="M17 6v5"></path>
    <path d="M17 11h2"></path>
  </svg>
`,

terraform: `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <title>Terraform</title>
    <path d="M4 5l5 3v6l-5-3z"></path>
    <path d="M10 8l5 3v6l-5-3z"></path>
    <path d="M16 5l4 2.5v6L16 11z"></path>
  </svg>
`,

githubActions: `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <title>GitHub Actions</title>
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M10 8l6 4-6 4z"></path>
  </svg>
`,

kubernetes: `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <title>Kubernetes</title>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"></path>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 5v4"></path>
    <path d="M12 15v4"></path>
    <path d="M5.5 8.5l3.5 2"></path>
    <path d="M15 13.5l3.5 2"></path>
    <path d="M18.5 8.5l-3.5 2"></path>
    <path d="M9 13.5l-3.5 2"></path>
  </svg>
`,

monitoring: `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <title>Monitoring</title>
    <path d="M4 19V5"></path>
    <path d="M4 19h16"></path>
    <path d="M7 15l3-4 3 2 4-6"></path>
  </svg>
`,
};
