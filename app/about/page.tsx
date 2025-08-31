interface SkillSet {
  languages: string;
  frameworskused: string;
  database?: string;
}

interface Feature {
  name: string;
  description?: string;
}

interface SetupInstructions {
  requirements: string[];
  installCommands: string[];
  runAccessInfo: string;
}

interface ApiRoute {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  projectLink?: string;
  skillSet: SkillSet;
  currentFeatures: Feature[];
  plannedFeatures?: Feature[];
  setup?: SetupInstructions;
  apiRoutes?: ApiRoute[];
  notes?: string[];
}

const Projects: Project[] = [
  {
    title: "Pastebin Recreational Project",
    description:
      "A lightweight Pastebin clone built with Go, Echo, and SQLite. Supports anonymous and one-time view posts, with plans for password-protected pastes and PostgreSQL integration.",
    projectLink: "https://github.com/thedummyuser/repastebin",
    skillSet: {
      languages: "Go",
      frameworskused: "Echo",
      database: "SQLite",
    },
    currentFeatures: [
      {
        name: "Anonymous posts",
        description: "Users can post without authentication and fetch by ID.",
      },
      {
        name: "One-time view posts",
        description: "Posts that self-destruct after a single view.",
      },
    ],
    plannedFeatures: [
      {
        name: "Password-protected pastes",
        description: "Add an option to secure pastes with a password.",
      },
      {
        name: "Move to PostgreSQL",
        description: "Switch from SQLite to a PostgreSQL socket database.",
      },
      {
        name: "Other features",
        description: "Additional useful features as development continues.",
      },
    ],
    setup: {
      requirements: ["Go"],
      installCommands: [
        "git clone git@github.com:TheDummyUser/repastebin.git",
        "cd repastebin",
        "make autorun",
      ],
      runAccessInfo: "Open http://localhost:3000",
    },
    apiRoutes: [
      {
        method: "GET",
        path: "/",
        description:
          "Fetches all pastes except anonymous and one-time view posts.",
      },
      {
        method: "POST",
        path: "/add",
        description:
          "Add a new paste (JSON body with 'title', 'content', 'is_anon', 'one_time_view').",
      },
      {
        method: "GET",
        path: "/:id",
        description: "Fetch paste by ID.",
      },
    ],
    notes: [
      "Anonymous and one-time posts must be fetched by ID.",
      "One-time view posts are deleted automatically after first viewing.",
    ],
  },
  {
    title: "simpleComp",
    description:
      "A collection of simple and reusable React Native components including Badge, Button, Card, Profile, TextInput, and ThemeProvider to speed up development.",
    projectLink: "https://github.com/thedummyuser/simplecomp", // Assuming this is the repo link
    skillSet: {
      languages: "JavaScript, TypeScript",
      frameworskused: "React Native",
    },
    currentFeatures: [
      {
        name: "Badge Component",
        description:
          "Displays badges with variants like default, info, success, warning, and error for showing status or information highlights.",
      },
      {
        name: "Button Component",
        description:
          "Customizable buttons supporting variants (primary, secondary, outline, ghost), sizes, icons, loading states, and full-width display.",
      },
      {
        name: "Card Component",
        description:
          "Content containers with variants (elevated, outlined, filled) and adjustable padding sizes.",
      },
      {
        name: "Profile Component",
        description:
          "Displays user profile pictures or initials with size and style customization.",
      },
      {
        name: "TextInput Component",
        description:
          "Text input fields with labels and error messaging support for user forms and search bars.",
      },
      {
        name: "ThemeProvider Component",
        description:
          "Applies app-wide theming supporting light, dark, or system modes with optional theme overrides.",
      },
    ],
    plannedFeatures: [
      {
        name: "To Npm",
        description:
          "One Day will publish this simple comp to npm so everyone can use it...",
      },
    ],
    notes: [
      "Components come with detailed props for customization.",
      "Includes usage examples for each component demonstrating typical and advanced use cases.",
      "Pre-alpha stage indicates ongoing development and possible API changes.",
    ],
  },
];

export default function Page() {
  return (
    <div className="bg-background w-screen h-full snap-y snap-mandatory scroll-smooth">
      {/* Top Section (Image + Info side by side) */}
      <div className="h-screen grid place-items-center p-4 snap-start">
        <div className="max-w-2xl w-full space-y-10">
          {/* About Me */}
          <section className="border-b-2 border-muted pb-2 px-2">
            <h2 className="text-2xl font-bold mb-2">About Me</h2>
            <p className="text-muted-foreground">
              I am a passionate developer who loves building clean and modern
              apps with React, Go, and cloud-native tools. Currently working as
              a react native developer at mindwave ai solutions.
            </p>
          </section>

          {/* Skill Set */}
          <section className="border-b-2 border-muted pb-2 px-2">
            <h2 className="text-2xl font-bold mb-2">Skill Set</h2>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>React / React Native / JavaScript / TypeScript</li>
              <li>Go / Fiber / GORM</li>
              <li>Cloud (AWS)</li>
              <li>Linux / NixOS</li>
            </ul>
            <p className="mt-2">
              See some of my work in the{" "}
              <a
                href="#projects"
                className="text-primary font-semibold hover:underline"
              >
                Projects section
              </a>
              .
            </p>
          </section>

          {/* Contact */}
          <section className="border-b-2 border-muted pb-2 px-2">
            <h2 className="text-2xl font-bold mb-2">Work With Me</h2>
            <p className="text-muted-foreground">
              Wanna work with me? Reach out at{" "}
              <a
                href="mailto:abhiram.reddy122002@gmail.com"
                className="text-primary font-semibold hover:underline"
              >
                abhiram.reddy122002@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Projects Section */}
      <div
        id="projects"
        className="min-h-screen w-full p-6 space-y-6 snap-start flex flex-col"
      >
        <h2 className="text-3xl font-bold mb-4">Projects</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Projects.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="flex flex-col gap-3 p-2"
            >
              {item.projectLink ? (
                <h3 className="text-lg font-semibold">
                  <a
                    href={item.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-primary"
                  >
                    {item.title}
                  </a>
                </h3>
              ) : (
                <h3 className="text-lg font-semibold">{item.title}</h3>
              )}

              <p className="text-muted-foreground">{item.description}</p>

              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Skills:</span>{" "}
                {item.skillSet.languages}
                {item.skillSet.frameworskused
                  ? ` · ${item.skillSet.frameworskused}`
                  : ""}
                {item.skillSet.database ? ` · ${item.skillSet.database}` : ""}
              </p>

              {item.currentFeatures?.length ? (
                <div className="mt-1">
                  <p className="text-sm font-medium">Current features</p>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1 space-y-1">
                    {item.currentFeatures.map((feature, fIdx) => (
                      <li key={`${item.title}-feature-${fIdx}`}>
                        <span className="font-medium">{feature.name}</span>
                        {feature.description ? ` — ${feature.description}` : ""}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {item.plannedFeatures?.length ? (
                <div className="mt-1">
                  <p className="text-sm font-medium">planned features</p>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1 space-y-1">
                    {item.plannedFeatures.map((feature, fIdx) => (
                      <li key={`${item.title}-feature-${fIdx}`}>
                        <span className="font-medium">{feature.name}</span>
                        {feature.description ? ` — ${feature.description}` : ""}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
