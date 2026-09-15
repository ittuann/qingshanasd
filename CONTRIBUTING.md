# Contributing Guidelines

I appreciate your interest in making this project better. Thank you for considering contributing!

By following these guidelines, you can help us maintain a healthy and productive open-source community. To ensure a smooth collaboration, please take a moment to read the following guidelines before getting started.

## Before Getting Started

### Core Principles

- Maintain a respectful, civil, open-minded, and friendly attitude in all interactions.
- Follow the Code Of Conduct standards.

### Contributing Process

- If you want to make changes that aren't minor:

1. Please always begin by opening an issue or starting a discussion to outline your proposed changes before writing your code.
2. Before opening a new issue, please check the Issues tracker and Pull Requests, to review if there's an existing issue or discussion related to it. If your concern has already been reported or is being addressed, this will prevent duplication and save you time.
3. Describe the changes you want to make in the issue or discussion.
4. Await maintainer feedback before starting code development.

This will give us the opportunity to flag any considerations you should be aware of before you spend time developing, ensuring your time and effort are well-directed.

- For minor changes (e.g., typo fixes, small documentation updates):

Feel free to directly submit a filing Pull Request.

Anyone else reading this who wishes to contribute does not need to worry, I'm happy to explain and answer any questions via email if you want.

Thanks so much for helping us improve, and we look forward to your valuable contribution!

## Development Stacks

The website is built with [React](https://react.dev/) and powered by the [Next.js](https://nextjs.org/) framework. For styling, [Tailwind CSS](https://tailwindcss.com/) v4 is used alongside the [shadcn/ui](https://ui.shadcn.com/) component library to implement responsive design.

For the CI/CD workflows, automated code quality testing and builds are implemented via [GitHub Actions](https://github.com/features/actions). Specifically, [ESLint](https://eslint.org/) is used for static code analysis and quality standard enforcement, while [Prettier](https://prettier.org/) handles code formatting to ensure a consistent style. [Jest](https://jestjs.io/) is used for Unit Testing.

[Format.js](https://github.com/formatjs/formatjs) (react-intl) is used to implement Internationalization (i18n) support.

[Apache ECharts](https://echarts.apache.org/) is utilized for data visualization in the Map. [RemixIcon](https://remixicon.com/) icon library is used for icon resources.

For the blog implementation, [@next/mdx](https://www.npmjs.com/package/@next/mdx) is used to process [MDX](https://mdxjs.com/) files for content handling. It's integrated with the [remark-GFM](https://github.com/remarkjs/remark-gfm) extension to support GitHub-flavored Markdown syntax features such as footnotes.

## Getting Started

1. Fork and Clone this Repository

- Create [your own fork](https://docs.github.com/get-started/quickstart/fork-a-repo) of this repository to your GitHub account.
- Clone your fork to your local machine

```bash
git clone https://github.com/<your-github-username>/qingshanasd.git
cd qingshanasd
```

If you simply want to explore the repository, you can clone the original repository directly:

```bash
git clone https://github.com/ittuann/qingshanasd.git
cd qingshanasd
```

2. Install Dependencies

```bash
pnpm i
```

3. Build

Build for production:

```bash
pnpm build
```

To preview the built static site:

```bash
pnpm serve
```

Now you're all setup and can start implementing your changes.

After completing your changes, please rerun the build command `pnpm build` to review the changes.

4. Preview

Preview in development:

```bash
pnpm dev
```

5. Checks

```bash
pnpm format

pnpm lint

pnpm build
```

When all that's done, it's time to submit a pull request to upstream and fill out the title and body appropriately.

## AI-Assisted Contributions

We're not opposed to using AI tools to help write or review code. However, you must understand and review every change you submit. You are responsible for anything you submit, however it was produced, and we are responsible for anything we merge and release; we hold a high bar for both.

A person has to be in the loop. Don't wire a bot or agent up to open pull requests, issues, or discussions on your behalf.

PRs that appear to have been submitted without human review — e.g., irrelevant code, duplicate logic, or comments that don't match the implementation — may be directly closed. If we misjudge something you wrote, just say so. We'll take you at your word. We would much rather occasionally reopen something we misjudged than treat everyone who posts here as a suspect.

## Credits

This documentation was inspired by the contributing guidelines for [cloudflare/workers-sdk](https://github.com/cloudflare/workers-sdk/blob/main/CONTRIBUTING.md).

- License

When you contribute code, you affirm that the contribution is your original work and that you license the work to the project under the project's open source license. Whether or not you state this explicitly, by submitting any copyrighted material via pull request, email, or other means you agree to license the material under the project's open source license and warrant that you have the legal authority to do so.

## Thank You

Your contributions to open source, large or small, make great projects like this possible. Thank you for taking the time to contribute.

Happy contributing!
