export type Repo = {
  /** Repository name on GitHub; also the key and the label on the card. */
  name: string
  title: string
  /** One or two sentences for the card. */
  summary: string
  /** Short, factual points taken from the repository's README. */
  highlights: string[]
  stack: string[]
  github: string
  demo?: { url: string; label: string }
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
  },
  {
    name: "lagos-racer",
    title: "Lagos Racer",
    summary:
      "A comedic kart racer for the browser: okadas, kekes, danfos and BRTs racing along the real Ojuelegba Road in Lagos.",
    highlights: [
      "Track layout derived from OpenStreetMap data, with Rapier physics in React Three Fiber",
      "Installable as an app and playable on a phone",
      "Online multiplayer through a room server",
      "A headless test races several tabs and passes only if every tab shows identical standings",
    ],
    stack: ["TypeScript", "React Three Fiber", "Rapier", "PWA"],
    github: "https://github.com/Posiislight/lagos-racer",
    demo: { url: "https://lagos-racer.vercel.app", label: "Play it" },
  },
]
