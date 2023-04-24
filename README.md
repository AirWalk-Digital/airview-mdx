This packages is a collection of React / MDX Components to render content to Web (Airview), PDF (Airview) and Presentations (MDX-Deck).

Storybook is used to documenbt these components in a standalone location.

Each component should have a dedicated `.tsx` file within `src/stories`. it should also have a `.stories.tsx` to describe the Component in Storybook. Optionally a `.mdx` can be used to document the Component in further detail if required.




## Getting Started

First, install dependancies:

```bash
npm i
```

The run storybook:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.



const github = 'airwalk_patterns'
const path = '/blah'


<TechRadar data=getData('github', 'file.json')/>