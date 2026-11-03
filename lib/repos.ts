export type Repo = {
  /** Repository name on GitHub; also the key and the label on the card. */
  name: string
  title: string
  /** One or two sentences for the card. */
  summary: string
  /** Short, factual points about the engineering, checked against the code. */
  highlights: string[]
  stack: string[]
  github: string
  demo?: { url: string; label: string }
  /** Short screen recording shown at the top of the card. */
  video?: { src: string; label: string; /** width / height, when not 16:9 */ aspect?: number }
  /** Images shown as a slideshow at the top of the card when there is no video. */
  images?: { src: string; alt: string; caption: string; width: number; height: number }[]
}

// Order here is the order on the site.
export const repos: Repo[] = [
  {
    name: "bedrock-rag-platform",
    title: "Bedrock LLM and RAG platform",
    summary:
      "An LLM service on AWS: a FastAPI app on EC2 calls Amazon Bedrock, answers questions over documents in S3 with citations, and the whole stack is defined in CloudFormation.",
    highlights: [
      "Retrieval over S3 documents with Titan embeddings and cited answers",
      "Async inference through SQS, with a dead-letter queue after 3 failed receives",
      "CloudWatch metrics for latency, tokens, errors and cost per request",
      "API key generated in Secrets Manager; the instance role can only invoke two named models",
    ],
    stack: ["Python", "FastAPI", "Amazon Bedrock", "CloudFormation", "SQS", "DynamoDB"],
    github: "https://github.com/Posiislight/bedrock-rag-platform",
    images: [
      {
        src: "/bedrock-rag-architecture.png",
        alt: "Architecture diagram: a FastAPI service on EC2 calls Amazon Bedrock, reads documents and the vector index from S3, runs async jobs through SQS with a dead-letter queue and DynamoDB job state, and reports metrics to CloudWatch",
        caption: "Architecture",
        width: 3200,
        height: 2008,
      },
      {
        src: "/bedrock-rag-request-flows.png",
        alt: "Two request flows: the seven steps of a synchronous cited RAG query, and the async job states queued, running, retrying, failed and dead-letter queue",
        caption: "Request flows",
        width: 3200,
        height: 2035,
      },
      {
        src: "/bedrock-rag-sample-session.png",
        alt: "Sample terminal session showing ingest, a cited RAG query, and submitting and polling an async job. Output is illustrative, not captured from a deployed run",
        caption: "",
        width: 3200,
        height: 2356,
      },
    ],
  },
  {
    name: "agent-workspace",
    title: "Agent workspace",
    summary:
      "Describe a change in plain English, pick a GitHub repo, and five stages take it to a real pull request: coding, testing, review, human approval, then commit.",
    highlights: [
      "Each task runs on its own agent VM, which sleeps while waiting for approval so idle time isn't billed",
      "The tester runs the repo's real test suite and sends failures back to coding",
      "Retries are bounded: 3 test failures or 2 rejected reviews stop the task for a human",
      "Approve or reject from the UI or from the pull request on GitHub",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "React", "Postgres", "Redis"],
    github: "https://github.com/Posiislight/agent-workspace",
    video: {
      src: "/agent-workspace-demo.mp4#t=2",
      label: "Agent workspace demo: a task going through coding, testing, review and approval to a GitHub pull request",
      aspect: 1908 / 894,
    },
  },
  {
    name: "gremlin",
    title: "Gremlin",
    summary:
      "Browser-agent QA built at the OpenFire hackathon. An LLM drives Playwright through a web app, deterministic oracles detect the bugs, and each finding comes with a replay and a fix handoff for a coding agent.",
    highlights: [
      "Fastify REST API and an MCP server with 11 tools, with BullMQ workers and Postgres (Drizzle) behind them",
      "The model navigates and deterministic oracles detect: crashes, console errors, failed requests. Each agent is bounded by steps, time and tokens, and stops after repeated no-ops",
      "A Chromium-level request policy blocks payment hosts, off-site navigation and writes in read-only mode; credentials are placeholders the model never sees",
      "Autofix opens a PR only after the tests are not weakened, the repro passes and a separate review pass approves",
    ],
    stack: ["TypeScript", "Playwright", "Fastify", "BullMQ", "Postgres", "Next.js"],
    github: "https://github.com/Posiislight/gremlin/tree/build/m1-m2",
    video: { src: "/gremlin-demo.mp4#t=2", label: "Gremlin demo: an agent testing a web app and reporting bugs" },
  },
]
