# Contributing Guidelines

We're thrilled that you're interested in contributing to this open-source project! Thank you!

Below you can find some guidance on how to be most effective when contributing to the project.

## Before Getting Started

### Core Principles

- Maintain a respectful, civil, open-minded, and friendly attitude in all interactions.
- Follow the Code Of Conduct standards.

### Contributing Process

- If you want to make non-trivial changes:

1. Please always begin by opening an issue or starting a discussion to outline your proposed changes before writing your code.
2. Before opening a new issue, please searching the existing issues and pull requests, to review whether your concern has already been reported or is being addressed, which helps prevent duplicate and saves you time.
3. Describe the changes you want to make in the issue or discussion.
4. Await maintainer feedback before starting code development.

This will give us opportunity to flag any considerations you should be aware of before you spend time developing, ensuring your time and effort are well-directed.

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

There are many ways to help:

- Submit a bug report on [GitHub Issues](https://github.com/ittuann/qingshanasd/issues)
- Create a pull request on [GitHub](https://github.com/ittuann/qingshanasd/pulls)

- License

When you contribute code, you affirm that the contribution is your original work and that you license the work to the project under the project's open source license. Whether or not you state this explicitly, by submitting any copyrighted material via pull request, email, or other means you agree to license the material under the project's open source license and warrant that you have the legal authority to do so.
