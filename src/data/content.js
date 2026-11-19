// ─────────────────────────────────────────────────────────────
// All report content lives here. Components never hard-code text.
// "kind" labels keep facts, reflections and proposals distinct:
//   covered    = topic taken from the official programme (titles, speakers)
//   reflection = my personal learning (first person)
//   proposed   = potential GovTech initiative (not implemented)
// Icons are referenced by name and resolved in components/Icon.jsx
// ─────────────────────────────────────────────────────────────

export const participant = {
  name: 'Sonam Chophel',
  designation: 'Assistant ICT Officer',
  organisation: 'GovTech Agency, Bhutan',
  division: 'Digital Service Development Division (DSD)',
}

export const event = {
  name: 'Tokyo Test Fest 2026',
  title: 'Conference Participation Report',
  dates: '12–13 November 2026',
  location: 'Tokyo, Japan',
  logo: 'images/ttf-logo.png',
  photo: 'images/tokyo-tower.jpg',
  photoCredit: 'Photo: David Kernan, CC BY 4.0, via Wikimedia Commons',
}

export const kinds = {
  covered: { label: 'Topic covered', hint: 'From the official programme' },
  reflection: { label: 'My reflection', hint: 'My personal learning from the event' },
  proposed: { label: 'Proposed for exploration', hint: 'Not implemented. Needs assessment and approval' },
}

// ── Slide 2: programme at a glance ───────────────────────────
export const programme = {
  days: [
    { id: 'workshop', date: '12 Nov 2026', label: 'Workshop Day', icon: 'wrench',
      venues: [{ name: 'Autify Office, Tokyo', note: 'Track 1' }, { name: 'Cybozu Office, Tokyo', note: 'Track 2' }] },
    { id: 'conference', date: '13 Nov 2026', label: 'Conference Day', icon: 'mic',
      venues: [{ name: 'Osaki Bright Core Hall, Tokyo', note: 'Main venue' }] },
  ],
  tracks: [
    { id: 't1', label: 'Track 1', venue: 'Autify Office' },
    { id: 't2', label: 'Track 2', venue: 'Cybozu Office' },
  ],
  slots: [
    { id: 'am', label: 'Morning', time: '09:00 – 12:00' },
    { id: 'pm', label: 'Afternoon', time: '13:00 – 16:00' },
  ],
  workshops: [
    { slot: 'am', track: 't1', icon: 'plug', title: 'MCP Playwright and Playwright Agents', speakers: 'Sai Krishna, Srinivasan Sekar', area: 'AI-driven browser automation', detail: 'Theme: using the Model Context Protocol (MCP) and Playwright Agents for AI-assisted browser testing.' },
    { slot: 'am', track: 't2', icon: 'database', title: 'Teaching AI Your Test Automation Skills: A RAG Workshop', speakers: 'Boris Wrubel', area: 'Retrieval-Augmented Generation', detail: 'Theme: giving AI assistants relevant testing knowledge through retrieval (RAG).' },
    { slot: 'pm', track: 't1', icon: 'smartphone', title: 'Mobile Automation with Appium and WebdriverIO', speakers: 'Wim Selles', area: 'Mobile test automation', detail: 'Theme: making sense of mobile test automation with Appium and WebdriverIO.' },
    { slot: 'pm', track: 't2', icon: 'brain', title: 'The 70% Problem: Agentic Quality Engineering', speakers: 'Lalitkumar Bahmare', area: 'Agentic quality engineering', detail: 'Theme: reclaiming testing’s intellectual core with agentic quality engineering.' },
  ],
  workshopNote: 'Four workshops across two parallel tracks. Themes are drawn from the session titles.',
  conference: [
    { group: 'Keynotes', icon: 'sparkles', items: [
      { who: 'Angie Jones', what: 'Your Next User Might Be an Agent' },
      { who: 'Richard Bradshaw', what: 'Rethinking the Automation in Testing Principles' },
    ] },
    { group: 'Technical sessions', icon: 'search', items: [
      { who: 'Satish Mallela', what: 'The Verification Gap' },
      { who: 'Vitaly Sharovatov', what: 'Value, Money and Costs in Testing Strategy' },
      { who: 'Manoj Kumar', what: 'Trust, but Verify: Quality Engineering for AI Systems' },
      { who: 'François Martin', what: 'From Bugs to Brilliance: Testing Toolbox in Action' },
      { who: 'Liliia Abdulina', what: 'Influence Without Authority' },
    ] },
    { group: 'Agentic testing', icon: 'bot', items: [
      { who: 'Lalitkumar Bahmare', what: 'Beyond Automation: How Agents Amplify (Not Replace) Testers with Agentic QCSD' },
    ] },
    { group: 'Lightning talks and panel', icon: 'users', items: [
      { who: 'Parallel English and Japanese tracks', what: 'Lightning talks (see slide 5)' },
      { who: 'Panel discussion', what: 'QE Approaches in Japan vs the Western World and Next-Gen Testing' },
    ] },
  ],
}

// ── Slide 3: AI and agentic testing ──────────────────────────
export const aiTesting = {
  stages: [
    { id: 'req', icon: 'listCheck', title: 'Requirements', sub: 'Approved input', text: 'Work starts from approved requirements, user stories and acceptance criteria. Clear requirements are what the AI output is later checked against.' },
    { id: 'agent', icon: 'bot', title: 'AI Agent', sub: 'Plans and drafts', text: 'The agent turns requirements into test ideas and test steps. With RAG it can draw on approved documentation and testing standards for context.' },
    { id: 'tools', icon: 'plug', title: 'Testing Tools', sub: 'MCP / Playwright', text: 'MCP gives the agent a standard way to reach external tools. Playwright provides the browser automation the agent can drive.' },
    { id: 'exec', icon: 'play', title: 'Test Execution', sub: 'Runs the checks', text: 'Tests run against the application, for example in a browser, producing logs, screenshots and pass or fail results.' },
    { id: 'verify', icon: 'search', title: 'Results and Verification', sub: 'Evidence', text: 'Results are checked against the requirements. A passing run is not proof of quality if the test itself is wrong or incomplete.' },
    { id: 'human', icon: 'eye', title: 'Human Review', sub: 'Judgement', text: 'A person reviews the evidence, decides what it means and remains accountable. The agent assists but does not replace human judgement.' },
  ],
  principle: 'AI agents can assist with testing. They should not replace human judgement.',
  rag: 'RAG context: approved documents feed the agent',
  concepts: [
    { id: 'mcp', icon: 'plug', title: 'MCP', text: 'Model Context Protocol. A standard way for AI applications to connect to external tools and data sources.' },
    { id: 'pw', icon: 'globe', title: 'Playwright Agents', text: 'AI agents that help create and maintain Playwright browser tests. Playwright is a browser automation framework.' },
    { id: 'rag', icon: 'database', title: 'RAG', text: 'Retrieval-Augmented Generation. Relevant documents are retrieved and given to the AI so its answers are grounded in organisational knowledge.' },
    { id: 'aqe', icon: 'brain', title: 'Agentic QE', text: 'Using AI agents across quality activities with people directing the work. The sessions framed agents as amplifying testers, not replacing them.' },
    { id: 'mobile', icon: 'smartphone', title: 'Appium and WebdriverIO', text: 'Appium automates mobile applications. WebdriverIO is a JavaScript automation framework that can drive Appium.' },
    { id: 'role', icon: 'users', title: 'Tester role', text: 'The tester role moves from writing and running test cases towards quality strategy, critical thinking and verification.' },
  ],
  sources: 'Sessions: MCP Playwright and Playwright Agents; RAG Workshop; Appium and WebdriverIO; Agentic Quality Engineering. Stage descriptions are a general explanation, not a record of any demonstration.',
}

// ── Slide 4: trust and verification ──────────────────────────
export const verification = {
  views: [
    { id: 'ai', label: 'AI-generated output', icon: 'bot', tone: 'amber', headline: 'Fast, but not yet trusted',
      points: ['Fast to generate', 'Potentially incomplete or incorrect', 'May not fully satisfy requirements', 'Requires independent validation'] },
    { id: 'verified', label: 'Verified output', icon: 'shield', tone: 'green', headline: 'Evidence-backed and accountable',
      points: ['Tested against requirements', 'Supported by test evidence', 'Reviewed and validated', 'Approved through human oversight'] },
  ],
  bridge: ['Check against requirements', 'Collect test evidence', 'Review', 'Human approval'],
  quote: 'Successful AI-assisted development requires reliable verification, not just faster generation.',
  govTitle: 'Why this matters for government digital services',
  gov: [
    { icon: 'target', label: 'Correctness' },
    { icon: 'lock', label: 'Security' },
    { icon: 'gauge', label: 'Reliability' },
    { icon: 'scale', label: 'Accountability' },
  ],
  sources: 'Conference themes: The Verification Gap (Satish Mallela); Trust, but Verify: Quality Engineering for AI Systems (Manoj Kumar).',
}

// ── Slide 5: emerging practices and perspectives ─────────────
export const perspectives = {
  tabs: [
    { id: 'lightning', label: 'Lightning talks' },
    { id: 'strategy', label: 'Strategy and leadership' },
    { id: 'future', label: 'Keynote and panel' },
  ],
  lightning: [
    { icon: 'lock', title: 'Security of AI-assisted coding', text: 'Security implications when AI helps write code.' },
    { icon: 'accessibility', title: 'Accessibility testing', text: 'Making services usable by everyone.' },
    { icon: 'listCheck', title: 'Automation framework selection', text: 'Choosing the right framework.' },
    { icon: 'dna', title: 'Reverse Mutation Testing', text: 'Questioning the strength of a test suite.' },
    { icon: 'share', title: 'Delegating testing to GenAI', text: 'What to hand to Generative AI.' },
    { icon: 'code', title: 'Quality of AI-generated test code', text: 'Checking the tests AI writes.' },
    { icon: 'boxes', title: 'Domain-Driven Design', text: 'DDD and test case reduction.' },
    { icon: 'arrowLeft', title: 'Shift-Left testing', text: 'Deriving test specifications from PRDs.' },
    { icon: 'route', title: 'E2E testing in the AI era', text: 'Where end-to-end tests fit now.' },
    { icon: 'message', title: 'QA for LLM products', text: 'Quality assurance for LLM-based products.' },
  ],
  lightningNote: 'Parallel English and Japanese lightning talk tracks. Topics shown are from the programme.',
  strategy: [
    { icon: 'coins', title: 'Value, Money and Costs', meta: 'Vitaly Sharovatov', detail: 'Theme: using value and cost as a common language for testing strategy.' },
    { icon: 'handshake', title: 'Influence Without Authority', meta: 'Liliia Abdulina', detail: 'Theme: leading quality when you do not own the roadmap.' },
    { icon: 'wrench', title: 'Testing Toolbox in Action', meta: 'François Martin', detail: 'Theme: practical testing techniques, from bugs to brilliance.' },
    { icon: 'scale', title: 'Automation in Testing Principles', meta: 'Richard Bradshaw', detail: 'Theme: rethinking the principles behind automation in testing.' },
  ],
  future: [
    { icon: 'sparkles', title: 'Your Next User Might Be an Agent', meta: 'Opening keynote · Angie Jones', detail: 'Theme: software may increasingly be used by AI agents as well as people, which affects how services are designed and tested.' },
    { icon: 'users', title: 'QE in Japan and the Western World', meta: 'Panel discussion', detail: 'A discussion comparing quality engineering approaches in Japan and the Western world, and next-generation testing.' },
  ],
}

// ── Slide 6: my key takeaways (first person) ─────────────────
export const takeaways = {
  items: [
    { icon: 'sparkles', title: 'AI is changing how software is built and tested', text: 'I learned that AI is changing how software is developed and tested.', why: 'Teams need to understand these tools to use them well.', source: 'Opening keynote; workshop day' },
    { icon: 'lightbulb', title: 'The tester role is evolving', text: 'Testing professionals need to move beyond writing and running test cases.', why: 'Quality strategy, critical thinking and verification add the most value.', source: 'The 70% Problem; Agentic QCSD' },
    { icon: 'plug', title: 'Agents need tools and context', text: 'AI agents can improve testing efficiency when connected to appropriate tools and domain knowledge.', why: 'MCP and Playwright supply the tools. RAG supplies the knowledge.', source: 'MCP Playwright workshop; RAG workshop' },
    { icon: 'database', title: 'RAG grounds AI in our knowledge', text: 'RAG offers a way to ground AI responses in relevant organisational knowledge.', why: 'Answers can draw on approved documents rather than general assumptions.', source: 'RAG workshop' },
    { icon: 'eye', title: 'Human oversight is essential', text: 'Human oversight remains essential for reliability and accountability.', why: 'A person must own the decision, particularly for public services.', source: 'The Verification Gap; Trust, but Verify' },
    { icon: 'route', title: 'Quality belongs across the lifecycle', text: 'Quality engineering must be part of the whole software development lifecycle.', why: 'Finding issues early is better than testing only at the end.', source: 'Shift-Left talk; Agentic QCSD' },
    { icon: 'shield', title: 'Automation alone is not quality', text: 'Automation does not guarantee quality. Independent verification and sound strategy are still needed.', why: 'Tests, whether human- or AI-written, must themselves be validated.', source: 'Verification sessions; Bradshaw' },
  ],
  note: 'These are my personal reflections. They describe what I learned, not technologies I have implemented.',
}

// ── Slide 7: application to GovTech ──────────────────────────
export const relevance = {
  items: [
    { icon: 'bot', title: 'AI-assisted testing', text: 'Explore Playwright Agents for browser-based testing of government digital services.', example: 'Repeatable browser checks of a citizen service form: fill, validate, submit, confirm. Re-run on each release.' },
    { icon: 'database', title: 'RAG knowledge assistance', text: 'Give AI agents access to technical documentation, requirements, API documentation and testing standards.', example: 'A developer asks how an API field is validated and receives an answer grounded in the approved API specification.' },
    { icon: 'plug', title: 'MCP integration', text: 'Explore connecting AI agents with testing tools and development environments through MCP.', example: 'An assistant triggers a test run in a controlled test environment and reads back the results.' },
    { icon: 'gitBranch', title: 'CI/CD quality gates', text: 'Strengthen automated testing, code quality checks and security scanning in existing DevOps pipelines.', example: 'A release is held when functional tests, a security scan or code quality checks fail.' },
    { icon: 'search', title: 'Independent verification', text: 'Establish practices to validate AI-generated test cases, code and testing results.', example: 'AI-drafted test cases for a service handling citizen data are reviewed against approved requirements before use.' },
    { icon: 'route', title: 'Quality across the lifecycle', text: 'Test throughout development rather than as a final-stage activity.', example: 'Requirements for a new e-service are reviewed for testability before development begins.' },
  ],
  note: 'Examples are illustrative scenarios, not descriptions of systems or work already in place at GovTech.',
}

// ── Slide 8: proposed next steps ─────────────────────────────
export const nextSteps = {
  title: 'My Proposed Next Steps for GovTech',
  banner: 'Proposed Initiatives. Recommendations only. They need further assessment, prioritisation and approval. No budget, timeline or outcome is implied.',
  items: [
    { n: 1, icon: 'globe', title: 'Playwright Agents PoC', objective: 'Evaluate AI-assisted browser automation and testing.', approach: 'Conduct a small proof of concept using Playwright Agents on an existing DSD application.', benefit: 'Explore opportunities to reduce repetitive testing effort and improve browser-based test coverage.', first: 'Identify a suitable application and a small set of repeatable test scenarios.' },
    { n: 2, icon: 'database', title: 'RAG-based Technical Knowledge Assistant', objective: 'Explore AI-assisted access to organisational technical knowledge.', approach: 'Explore a RAG-based assistant using system documentation, BRDs, API specifications, technical documentation and testing standards.', benefit: 'Improve access to relevant technical information and support knowledge retrieval.', first: 'Identify a limited set of approved technical documents for a feasibility assessment.' },
    { n: 3, icon: 'search', title: 'AI-assisted Testing and Verification', objective: 'Evaluate the use of AI for generating and reviewing test cases.', approach: 'Explore AI-generated test scenarios and test scripts, with independent validation against approved requirements.', benefit: 'Support test design while maintaining quality and accountability.', first: 'Select a small feature and compare AI-generated test cases against manually reviewed requirements.' },
    { n: 4, icon: 'gitBranch', title: 'Strengthen DevOps Quality Gates', objective: 'Improve quality assurance within existing CI/CD workflows.', approach: 'Explore integration of automated functional testing, security scanning and code quality checks into existing pipelines.', benefit: 'Identify defects and security issues earlier in the development lifecycle.', first: 'Review existing DSD pipeline stages and identify potential gaps.' },
  ],
  fields: [
    { key: 'objective', label: 'Objective', icon: 'target' },
    { key: 'approach', label: 'Proposed approach', icon: 'route' },
    { key: 'benefit', label: 'Expected benefit', icon: 'sparkles' },
    { key: 'first', label: 'Possible first step', icon: 'listCheck' },
  ],
}

// ── Slides 9 and 10: conclusion and thanks ───────────────────
export const conclusion = {
  message: 'The future of software quality engineering is not about replacing testers with AI, but empowering people with AI agents, better tools and stronger verification practices to deliver more reliable digital services.',
  answers: [
    { icon: 'lightbulb', q: 'What did I learn?', a: 'AI agents, MCP, RAG and Playwright are reshaping testing, and verification must keep pace with generation.' },
    { icon: 'shield', q: 'Why does it matter?', a: 'Government services need correctness, security and accountability, so trust must be earned through evidence.' },
    { icon: 'building', q: 'How can GovTech benefit?', a: 'By exploring small, controlled initiatives with human oversight, then adopting what proves its value.' },
  ],
}

export const thanks = {
  heading: 'Thank You',
  line: 'Tokyo Test Fest 2026 | Conference Participation Report',
}
